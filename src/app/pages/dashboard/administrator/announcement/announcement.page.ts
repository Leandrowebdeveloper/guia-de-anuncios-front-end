import { HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, tap } from 'rxjs/operators';
import { Announcement, CategorySearch } from 'src/app/interface';
import { Observable, EMPTY, Subject, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  InfiniteScrollCustomEvent,
  IonContent,
  IonReorderGroup,
  ItemReorderEventDetail,
  ModalController,
  NavController,
  SearchbarCustomEvent,
} from '@ionic/angular';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { Router } from '@angular/router';
import { AnnouncementService } from './services/announcement.service';
import { FormComponent } from './form/form.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SearchService } from 'src/app/components/categotyAnnouncementSearch/service/service.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';

@Component({
  selector: 'app-announcement',
  templateUrl: 'announcement.page.html',
  styleUrls: ['announcement.page.scss', '../users/users.page.scss'],
})
export class AnnouncementPage implements OnInit, OnDestroy {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  public announcement$: Observable<Announcement[]>;
  public announcement: Announcement[];
  public categoryDrop: Announcement[];
  public error = new Subject<boolean>();
  public endListCategory = true;

  public fab = false;

  public sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  public toggleListCategory: boolean;

  public isOrder = false;
  public sendOrder = false;

  private $announcement: Subscription;
  private $search: Subscription;
  private $searchBy: Subscription;
  private $drop: Subscription;
  private $dropd: Subscription;
  private $order: Subscription;

  private limit = 12;
  private offset = 0;
  private page = 1;
  private searchBy: object;

  constructor(
    private announcementService: AnnouncementService,
    private helpService: HelpsService,
    private searchService: SearchService,
    private route: Router,
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private messageService: MessageService,
    private loadingService: LoadingService
  ) {}

  private get getSearchBy(): object {
    return this.searchBy;
  }

  private set setSearchBy(value: CategorySearch) {
    const build = JSON.parse(`{ "${value}":"null" }`);
    this.searchBy = build;
  }

  ngOnInit() {
    this.getUrl();
    this.findCategory();
    this.update();
    this.initSearchBy();
    this.drop();
    this.deleted();
    this.add();
  }

  ngOnDestroy(): void {
    this.$searchBy.unsubscribe();
    this.$announcement.unsubscribe();
    this.$drop.unsubscribe();
    this.$dropd.unsubscribe();
  }

  public doReorder(ev: CustomEvent<ItemReorderEventDetail>): void {
    if (ev) {
      this.sendOrder = true;
      this.announcement = ev.detail.complete(this.announcement);
    }
  }

  public saveOrder(): void {
    const loading = this.loadingService.show('Ordenar categoria...');
    const result: number[] = this.announcement.map(
      (item: Announcement) => item.id
    );
    if (result.length > 0) {
      const announcement: Announcement = {
        order: result,
        // eslint-disable-next-line no-underscore-dangle
        _csrf: this.announcement[0]._csrf,
      };
      this.$order = this.announcementService.order(announcement).subscribe(
        (announcement_: Announcement) => {
          setTimeout(() => {
            this.isOrder = false;
            this.sendOrder = false;
          }, 3500);
          this.messageService.success(
            announcement_?.message,
            loading,
            this.$order
          );
        },
        (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.$order)
      );
    }
  }

  public orderList(): void {
    this.isOrder = !this.isOrder;
  }

  public logScrolling(event: any): void {
    if (event.detail.scrollTop > 500) {
      this.fab = true;
    } else {
      this.fab = false;
    }
  }

  public toTop(): Promise<void> {
    return this.content.scrollToTop(1000);
  }

  public search(event: SearchbarCustomEvent): Subscription {
    if (event?.target?.value.length >= 3) {
      const data = this.setDataSearch(event?.target?.value);
      return (this.$search = this.announcementService
        .searchBy(data)
        .subscribe((announcement: Announcement[]) => {
          this.searchService.search = announcement;
          setTimeout(() => this.$search.unsubscribe(), 2000);
        }));
    }
  }

  public findMoreCategory(event: any): Subscription {
    this.calculatePagination();
    const url = this.toggleListCategory ? 'deleted' : '';
    return (this.$announcement = this.announcementService
      .index(`management/${url}`, { limit: this.limit, offset: this.offset })
      .subscribe(
        (announcement: Announcement[]) => this.success(event, announcement),
        (error: HttpErrorResponse) => this.error.next(true),
        () => this.helpService.delay(this.$announcement.unsubscribe(), 2000)
      ));
  }

  public async restore(announcement: Announcement): Promise<void> {
    const { _csrf, slug, id } = announcement;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'restore',
        label: 'Restaurar',
        announcement: {
          _csrf,
          slug,
          id,
          password: '',
        },
      },
    });
    return await modal.present();
  }

  // Destroy
  public async destroy(announcement: Announcement): Promise<void> {
    const { _csrf, slug, id } = announcement;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'drop',
        label: 'Excluir',
        announcement: {
          _csrf,
          slug,
          id,
          password: null,
        },
      },
    });
    return await modal.present();
  }

  // Create
  public async register(): Promise<void> {
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'register',
        label: 'Cadastrar',
        announcement: {
          name: null,
          description: null,
          // eslint-disable-next-line no-underscore-dangle
          _csrf: this.announcement[0]?._csrf || this.authService.getCsrf,
        },
      },
    });
    return await modal.present();
  }

  private getUrl(): void {
    this.toggleListCategory =
      this.route.routerState.snapshot.url.includes('excluidas');
  }

  private orderBy(search: CategorySearch): void {
    if (!this.announcement) {
      return;
    }
    switch (search) {
      case 'name':
        this.announcement.sort((a, b) => a?.title < b?.title && -1);
        break;
      case 'createdAt':
        this.announcement.sort((a, b) => a?.createdAt > b?.createdAt && -1);
        break;
      case 'updatedAt':
        this.announcement.sort((a, b) => a?.updatedAt > b?.updatedAt && -1);
        break;
      case 'state':
        this.announcement.sort((a, b) => a?.state > b?.state && -1);
        break;
      case 'position':
        this.announcement.sort((a, b) => a?.position < b?.position && -1);
        break;
    }
  }

  private initSearchBy(): void {
    this.$searchBy = this.searchService.getSearchBy.subscribe(
      (filter: CategorySearch) => {
        if (filter === 'name') {
          this.setSearchBy = filter;
        } else {
          if (filter === 'orderName') {
            filter = 'name';
          }
          this.setSearchBy = 'name';
          this.orderBy(filter);
        }
      }
    );
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

  private findCategory(): Observable<Announcement[]> {
    const url = this.toggleListCategory ? 'deleted' : '';
    return (this.announcement$ = this.announcementService
      .index(`management/${url}`, { limit: this.limit, offset: this.offset })
      .pipe(
        tap((announcement: Announcement[]) => {
          if (this.toggleListCategory) {
            return (this.categoryDrop = announcement);
          }
          return (this.announcement = announcement);
        }),
        delay(500),
        catchError((error: HttpErrorResponse) => {
          this.error.next(true);
          return EMPTY;
        })
      ));
  }

  private calculatePagination(): void {
    this.page += 1;
    this.offset = (this.page - 1) * this.limit;
    return;
  }

  private success(
    event: InfiniteScrollCustomEvent,
    announcement: Announcement[]
  ): void {
    this.setMoreData(announcement);
    this.updateScrollEvent(event, announcement);
    return;
  }

  private updateScrollEvent(
    event: InfiniteScrollCustomEvent,
    announcement: Announcement[]
  ): void {
    event.target.complete();
    if (announcement.length < 8) {
      this.endListCategory = false;
      event.target.disabled = true;
    }
    return;
  }

  private setMoreData(announcement: Announcement[]): void {
    if (this.toggleListCategory) {
      return announcement.forEach((item: Announcement) =>
        this.categoryDrop.push(item)
      );
    }
    return announcement.forEach((item: Announcement) =>
      this.announcement.push(item)
    );
  }

  private update(): Subscription {
    return (this.$announcement =
      this.announcementService.announcementObservable.subscribe(
        (announcement: Announcement) => {
          if (announcement) {
            const i = this.getIndexCategoryCurrent(announcement);
            this.switchBetweenAddAndUpdate(announcement, i);
          }
        }
      ));
  }

  private add(): Subscription {
    return (this.$announcement = this.announcementService.add.subscribe(
      (announcement: Announcement) => {
        if (announcement) {
          this.announcement.unshift(announcement);
        }
      }
    ));
  }

  private getIndexCategoryCurrent(announcement: Announcement): number {
    if (this.announcement) {
      const index = this.announcement.findIndex(
        (item: Announcement) => item?.slug === announcement?.slug
      );
      return index;
    }
  }

  private getIndexUserDropCurrent(announcement: Announcement): number {
    if (this.categoryDrop) {
      const index = this.categoryDrop.findIndex(
        (item: Announcement) => item?.slug === announcement?.slug
      );
      return index;
    }
  }

  private switchBetweenAddAndUpdate(
    announcement: Announcement,
    i: number
  ): void {
    if (this.announcement) {
      this.announcement.splice(i, 1, announcement);
    }
  }

  private drop(): void {
    this.$drop = this.announcementService.drop.subscribe(
      (announcement: Announcement) => {
        if (announcement && this.toggleListCategory) {
          this.categoryDrop.splice(
            this.getIndexUserDropCurrent(announcement),
            1
          );
        }
      }
    );
  }

  private deleted(): void {
    this.$dropd = this.announcementService.deleted.subscribe(
      (announcement: Announcement) => {
        if (announcement && this.announcement) {
          const result: Announcement[] = this.announcement.splice(
            this.getIndexCategoryCurrent(announcement),
            1
          );
          if (result.length > 0) {
            return this.navCtrl.navigateBack([
              '/painel-de-controle',
              'admin',
              'categorias',
            ]);
          }
        }
      }
    );
  }
}
