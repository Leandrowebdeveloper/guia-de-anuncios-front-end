import { tap, catchError } from 'rxjs/operators';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { AlertService } from 'src/app//utilities/alert/alert.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, Subscription, EMPTY } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/interface';
import { AdminAnnouncementService } from '../../service/admin-announcement.service';

@Component({
  selector: 'app-deleted-item-admin-announcement-page',
  templateUrl: './deleted-item.page.html',
  styleUrls: ['./deleted-item.page.scss'],
})
export class DeletedItemAdminAnnouncementPage implements OnInit {
  public announcement$: Observable<Announcement[]>;
  public announcement: Announcement[];
  public isToRestore: number;
  public isDeleted: number;
  public isAnnouncement: boolean;
  public delete: boolean;
  public error = new Subject<boolean>();
  public menssage: boolean;

  public toggleListAnnouncement: boolean;

  private destroyAnnouncement: Subscription;

  private limit = 12;
  private offset = 0;

  constructor(
    private adminAnnouncementService: AdminAnnouncementService,
    private alertService: AlertService,
    public messageService: MessageService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.getAnnouncement();
  }

  public togglePage(e: boolean) {
    if (this.toggleListAnnouncement === e) {
      return;
    }
    this.toggleListAnnouncement = e;
    this.getAnnouncement();
  }

  public refresher(event: any): void {
    this.getAnnouncement();
    event.target.complete();
  }

  public hideMenssage() {
    this.menssage = true;
  }

  public actionButton(event: {
    action: 'destroy' | 'restore' | 'drop';
    index: number;
    announcement: Required<Pick<Announcement, '_csrf' | 'id' | 'title'>>;
  }): Promise<void> {
    const { action, index, announcement } = event;
    if (action === 'drop') {
      return this.destroy(index, announcement);
    }
    return this.toRestore(index, announcement);
  }

  public async destroy(
    index: number,
    announcement: Required<Pick<Announcement, '_csrf' | 'id'>>
  ) {
    this.isDeleted = index;
    const alert = await this.alertService.alertController.create({
      header: 'Atenção',
      message: 'Este anúncio será enviado para a lixeira.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.isDeleted = -1;
          },
        },
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => this.drop(announcement, index),
        },
      ],
    });

    await alert.present();
  }

  public async toRestore(
    index: number,
    announcement: Required<Pick<Announcement, '_csrf' | 'id' | 'title'>>
  ) {
    this.isToRestore = index;
    const alert = await this.alertService.alertController.create({
      message: `Item <i>" ${announcement?.title} "</i> será restalrado.`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.isToRestore = -1;
          },
        },
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => this.restore(announcement, index),
        },
      ],
    });

    await alert.present();
  }

  private restore(
    announcement: Required<Pick<Announcement, '_csrf' | 'id'>>,
    index: number
  ): Subscription {
    const loading = this.loadingService.show('Restaurar anúncio...');
    return (this.destroyAnnouncement = this.adminAnnouncementService
      .toRestore(announcement)
      .subscribe(
        (announcement_: Announcement) =>
          this.success(index, announcement_, loading),
        (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.destroyAnnouncement)
      ));
  }

  private removeItem(index: number) {
    setTimeout(() => {
      this.isToRestore = -1;
      this.announcement.splice(index, 1);
    }, 6000);
  }

  private getAnnouncement(): Observable<Announcement[]> {
    return (this.announcement$ = this.adminAnnouncementService
      .getAnnouncementAll('deleted', {
        limit: this.limit,
        offset: this.offset,
      })
      .pipe(
        tap((announcement: Announcement[]) => {
          this.isAnnouncement = announcement.length > 0;
          this.announcement = announcement;
        }),
        catchError((error: HttpErrorResponse) => {
          setTimeout(() => (this.menssage = false), 300);
          this.error.next(true);
          return EMPTY;
        })
      ));
  }

  private drop(
    announcement: Required<Pick<Announcement, '_csrf' | 'id'>>,
    index: number
  ) {
    const loading = this.loadingService.show('Enviando para lixeira...');
    this.destroyAnnouncement = this.adminAnnouncementService
      .drop(announcement)
      .subscribe(
        (announcement_: Announcement) =>
          this.success(index, announcement_, loading),
        (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.destroyAnnouncement)
      );
  }

  private success(
    index: number,
    announcement_: Announcement,
    loading: Promise<HTMLIonLoadingElement>
  ) {
    this.removeItem(index);
    this.messageService.success(
      announcement_?.message,
      loading,
      this.destroyAnnouncement,
      2000
    );
  }
}
