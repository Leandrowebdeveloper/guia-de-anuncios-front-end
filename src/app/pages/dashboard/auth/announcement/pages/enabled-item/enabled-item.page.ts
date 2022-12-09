import { Platform } from '@ionic/angular';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { AlertService } from 'src/app//utilities/alert/alert.service';
import { AuthAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/service/auth-announcement.service';
import { Announcement } from 'src/app/interface/index';
import { Observable, Subject, Subscription, EMPTY } from 'rxjs';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-enabled-item-announcement-page',
  templateUrl: './enabled-item.page.html',
  styleUrls: ['./enabled-item.page.scss', '../../dashboard.page.scss'],
})
export class EnabledItemAnnouncementPage implements OnInit {
  @Input() userId!: number;
  @Output() isAnnouncement = new EventEmitter<boolean>(undefined);
  public announcement$: Observable<Announcement[]>;
  public announcement: Announcement[];

  public isDeleted: number;
  public error = new Subject<boolean>();
  public menssage: boolean;

  public isDesktop: boolean;

  private destroyAnnouncement: Subscription;

  private limit = 12;
  private offset = 0;

  constructor(
    private plt: Platform,
    private authAnnouncementService: AuthAnnouncementService,
    private alertService: AlertService,
    public messageService: MessageService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.getAnnouncement();
    this.plt.ready().then(() => this.isPlatform());
  }

  public trackByFn(index: number, announcement: Announcement) {
    return announcement ? announcement.id : undefined;
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
    announcement: Announcement;
  }): Promise<void> {
    const { action, index, announcement } = event;
    if (action === 'destroy') {
      return this.destroy(index, announcement);
    }
  }

  public async destroy(index: number, announcement: Announcement) {
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
          handler: () => this.deleted(announcement, index),
        },
      ],
    });

    await alert.present();
  }

  private removeItem(index: number) {
    setTimeout(() => {
      this.isDeleted = -1;
      this.announcement.splice(index, 1);
    }, 6000);
  }

  private getAnnouncement(): Observable<Announcement[]> {
    if (this.userId) {
      return (this.announcement$ = this.authAnnouncementService
        .getAnnouncementAll('', {
          limit: this.limit,
          offset: this.offset,
          userId: this.userId,
        })
        .pipe(
          tap((announcement: Announcement[]) => {
            this.isAnnouncement.emit(announcement.length > 0);
            this.announcement = announcement;
          }),
          catchError((error: HttpErrorResponse) => {
            setTimeout(() => (this.menssage = false), 300);
            this.error.next(true);
            return EMPTY;
          })
        ));
    }
  }

  private deleted(announcement: Announcement, index: number) {
    const loading = this.loadingService.show('Enviando para lixeira...');
    this.destroyAnnouncement = this.authAnnouncementService
      .delete(announcement)
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
    this.message(announcement_, loading);
  }

  private message(
    announcement_: Announcement,
    loading: Promise<HTMLIonLoadingElement>
  ) {
    this.messageService.success(
      announcement_.message,
      loading,
      this.destroyAnnouncement,
      2000
    );
  }

  private isPlatform(): boolean {
    return (this.isDesktop = this.plt.is('desktop'));
  }
}
