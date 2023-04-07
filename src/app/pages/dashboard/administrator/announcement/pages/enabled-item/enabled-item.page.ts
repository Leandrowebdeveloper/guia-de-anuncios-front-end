import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { AlertService } from 'src/app//utilities/alert/alert.service';
import { Announcement, Category, SearchAnnouncement } from 'src/app/interface';
import { Observable, Subject, Subscription, EMPTY } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AdminAnnouncementService } from '../../service/admin-announcement.service';
import { SearchbarCustomEvent } from '@ionic/angular';
import { SearchAnnouncementService } from 'src/app/pages/dashboard/component/announcement/search/service/search.service';

@Component({
  selector: 'app-enabled-item-admin-announcement-page',
  templateUrl: './enabled-item.page.html',
  styleUrls: ['./enabled-item.page.scss'],
})
export class EnabledItemAdminAnnouncementPage implements OnInit, OnDestroy {
  public announcement$!: Observable<Announcement[]>;
  public announcement!: Announcement[];
  public isAdmin!: boolean;

  public isDeleted!: number;
  public error = new Subject<boolean>();
  public menssage!: boolean;

  private destroyAnnouncement!: Subscription;
  private searchBy!: { [key: string]: any };

  private $search!: Subscription;
  private $searchBy!: Subscription;

  private limit = 12;
  private offset = 0;

  constructor(
    private adminAnnouncementService: AdminAnnouncementService,
    private searchAnnouncementService: SearchAnnouncementService,
    private authService: AuthService,
    private alertService: AlertService,
    private messageService: MessageService,
    private loadingService: LoadingService
  ) {}

  private get getSearchBy(): { [key: string]: any } {
    return this.searchBy;
  }

  private set setSearchBy(value: SearchAnnouncement) {
    const build = JSON.parse(`{ "${value}":"null" }`);
    this.searchBy = build;
  }

  ngOnInit() {
    this.getAnnouncement();
    this.setButtonCreate();
    this.initSearchBy();
  }

  ngOnDestroy(): void {
    this.$searchBy.unsubscribe();
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
    announcement: Required<Pick<Announcement, '_csrf' | 'id'>>;
  }): Promise<void> | void {
    const { action, index, announcement } = event;
    if (action === 'destroy') {
      return this.destroy(index, announcement);
    }
  }

  public search(event: SearchbarCustomEvent): Subscription | void {
    if (event?.target?.value && event?.target?.value.length >= 3) {
      const data = this.setDataSearch(event?.target?.value);
      return (this.$search = this.adminAnnouncementService
        .searchBy(data)
        .subscribe({
          next: (announcement: Announcement[]) => {
            this.searchAnnouncementService.search = announcement;
            setTimeout(() => this.$search.unsubscribe(), 2000);
          },
        }));
    }
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
    return (this.announcement$ = this.adminAnnouncementService
      .getAnnouncementAll('', {
        limit: this.limit,
        offset: this.offset,
      })
      .pipe(
        tap((announcement: Announcement[]) => {
          this.announcement = announcement;
        }),
        map((item) =>
          item.map((data) => {
            data.category = {
              ...data?.categoryAnnouncement?.category,
            } as Category;
            delete data?.categoryAnnouncement;
            return data;
          })
        ),
        catchError((error: HttpErrorResponse) => {
          setTimeout(() => (this.menssage = false), 300);
          this.error.next(true);
          return EMPTY;
        })
      ));
  }

  private deleted(
    announcement: Required<Pick<Announcement, '_csrf' | 'id'>>,
    index: number
  ) {
    const loading = this.loadingService.show('Enviando para lixeira...');
    this.destroyAnnouncement = this.adminAnnouncementService
      .delete(announcement)
      .subscribe({
        next: (announcement_: Announcement) =>
          this.success(index, announcement_, loading),
        error: (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.destroyAnnouncement),
      });
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
    if (announcement_?.message)
      this.messageService.success(
        announcement_.message,
        loading,
        this.destroyAnnouncement,
        2000
      );
  }

  private setButtonCreate() {
    this.isAdmin = this.authService.getLevel === '1';
  }

  private orderBy(search: SearchAnnouncement): void {
    if (!this.announcement) {
      return;
    }
    switch (search) {
      case 'title':
        this.announcement.sort((a, b): any => {
          if (a?.title && b?.title) return a?.title < b?.title && -1;
        });
        break;
      case 'createdAt':
        this.announcement.sort((a, b): any => {
          if (a?.createdAt && b?.createdAt)
            return a?.createdAt > b?.createdAt && -1;
        });
        break;
      case 'updatedAt':
        this.announcement.sort((a, b): any => {
          if (a?.updatedAt && b?.updatedAt)
            return a?.updatedAt > b?.updatedAt && -1;
        });
        break;
      case 'state':
        this.announcement.sort((a, b): any => {
          if (a?.state && b?.state) return a?.state > b?.state && -1;
        });
        break;
      case 'blockade':
        this.announcement.sort((a, b): any => {
          if (a?.blockade && b?.blockade)
            return a?.blockade > b?.blockade && -1;
        });
        break;
    }
  }

  private initSearchBy(): void {
    this.$searchBy = this.searchAnnouncementService.getSearchBy.subscribe({
      next: (filter: SearchAnnouncement | void) => {
        if (filter === 'title') {
          this.setSearchBy = filter;

          this.setSearchBy = 'title';
        }
        if (filter) this.orderBy(filter);
      },
    });
  }

  private setDataSearch(value: string): object {
    let data: object;
    if (this.getSearchBy) {
      this.searchBuild(value);
      data = this.getSearchBy;
    } else {
      data = { firstName: value };
    }
    return data;
  }

  private searchBuild(value: string) {
    const key = Object.keys(this.getSearchBy)[0];
    this.getSearchBy[key] = value;
  }
}
