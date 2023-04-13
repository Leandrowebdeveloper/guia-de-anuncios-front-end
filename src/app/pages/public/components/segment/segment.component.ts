import { Component, Input, OnInit } from '@angular/core';
import { Announcement, Like } from 'src/app/interface';
import { Share } from '@capacitor/share';
import { Clipboard } from 'ts-clipboard';
import { ToastService } from 'src/app/utilities/toast/toast.service';
import { LikeService } from '../like-service/like.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'src/app/utilities/message/message.service';

@Component({
  selector: 'app-segment-component',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent implements OnInit {
  @Input() announcement!: Pick<Announcement, '_csrf' | 'id' | 'title' | 'like'>;
  public isSupportShare!: boolean;

  public like!: string | null;

  private $like: Subscription | undefined;
  constructor(
    private toastService: ToastService,
    private likeService: LikeService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.canShare();
    this.like = localStorage.getItem('like');
  }

  public yesLike(): void {
    if (this.like === null || this.like === 'not') return this.setLike('+');
  }

  public notLike(): void {
    if (this.like === null || this.like === 'yes') return this.setLike('-');
  }

  private setLike(action: '-' | '+'): void {
    if (this.announcement) {
      const { id, _csrf } = this.announcement;
      if (this.announcement.like === null) {
        return this.create(
          { announcementId: id, _csrf, yes: 1, not: 0 },
          action
        );
      }

      this.calcLike(action, _csrf);

      if (this.announcement?.like)
        return this.update({ ...this.announcement.like }, action);
    }
  }

  private calcLike(action: string, _csrf: string | undefined): void {
    if (this.announcement?.like && _csrf) {
      this.announcement.like._csrf = _csrf;
      if (action === '+') {
        if (this.like === 'not') {
          this.announcement.like.yes += 1;
          this.announcement.like.not -= 1;
        } else {
          this.announcement.like.yes += 1;
        }
      }
      if (action === '-') {
        if (this.like === 'yes') {
          this.announcement.like.yes -= 1;
          this.announcement.like.not += 1;
        } else {
          this.announcement.like.not += 1;
        }
      }
    }
  }

  private create(data: Like, action: '-' | '+') {
    this.$like = this.likeService.createLike(data).subscribe({
      next: (like: Like) => this.set(like, action),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, undefined, this.$like),
      complete: () =>
        setTimeout(() => this.$like && this.$like.unsubscribe(), 2000),
    });
  }

  private update(data: Like, action: '-' | '+') {
    this.$like = this.likeService.updateLike(data).subscribe({
      next: (like: Like) => this.set(like, action),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, undefined, this.$like),
      complete: () =>
        setTimeout(() => this.$like && this.$like.unsubscribe(), 2000),
    });
  }

  private set(like: Like, action: '-' | '+'): void {
    if (like) {
      this.like = action === '+' ? 'yes' : 'not';
      localStorage.setItem('like', this.like);
      this.announcement.like = like;
    }
  }

  public async share(announcement: Pick<Announcement, 'title'>) {
    try {
      if (this.isSupportShare) {
        await Share.share({
          title: `Site ${announcement?.title}`,
          text: `O link a baixo para o site ${announcement?.title}`,
          url: location?.href,
          dialogTitle: 'Compartilhar página.',
        });
      }
    } catch (error) {}
  }

  public async clipboard(): Promise<void> {
    const url = location?.href;
    try {
      Clipboard.copy(url);
      (
        await this.toastService.show(
          'Link copiado.',
          'bottom',
          'thumbs-up',
          1000
        )
      ).present();
    } catch (error) {}
  }

  private async canShare(): Promise<boolean> {
    const { value } = await Share.canShare();
    return (this.isSupportShare = value);
  }
}
