import { ToastService } from 'src/app/utilities/toast/toast.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Announcement } from 'src/app/interface';
import { AnnouncementService } from './service/service.service';
import { Share } from '@capacitor/share';
import { Clipboard } from 'ts-clipboard';
import * as moment from 'moment';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  public announcement$: Observable<Announcement>;
  public error = new Subject<boolean>();

  public datetimes = moment().format();

  public isSupportShare: boolean;

  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private announcementService: AnnouncementService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.init();
    this.canShare();
  }

  public async share(announcement: Announcement) {
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

  private init(): Observable<Announcement> {
    const { slug } = this.activatedRoute.snapshot.params;
    if (slug) {
      return (this.announcement$ = this.announcementService
        .findOne('show', { slug })
        .pipe(
          // tap((item) => {
          //   item.category = { ...item.categoryAnnouncement.category };
          //   delete item.categoryAnnouncement;
          //   return item;
          // }),
          catchError((error: HttpErrorResponse) => {
            console.error(error);

            this.error.next(true);
            return EMPTY;
          })
        ));
    }
  }
}
