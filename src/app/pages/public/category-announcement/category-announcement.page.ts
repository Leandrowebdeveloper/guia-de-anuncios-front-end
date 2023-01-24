import { AuthService } from 'src/app/services/auth/auth.service';
import { CategoryService } from 'src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject, Subscription } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Announcement, Category, User } from 'src/app/interface';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { HomeService } from './../home/services/home.service';
import { CategoryAnnouncementService } from './service/service.service';
import { InfiniteScrollCustomEvent, IonReorderGroup } from '@ionic/angular';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { AllowAdPipe } from 'src/app/utilities/pipe/allow-ad/allow-ad.pipe';

@Component({
  selector: 'app-announcement',
  templateUrl: './category-announcement.page.html',
  styleUrls: ['./category-announcement.page.scss'],
})
export class CategoryAnnouncementPage implements OnInit {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  public isOrder: boolean;
  public sendOrder: boolean;
  public categoryAnnouncement$: Observable<{
    category: Category;
    announcement: Announcement[];
  }>;
  public category: Category;
  public announcement: Announcement[];
  public error = new Subject<boolean>();
  public isBtnOrder: boolean;
  public endListCategory = true;
  public ln: number | undefined;

  public fab = false;
  public menssage: boolean;

  public sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  private limit = 12;
  private offset = 0;
  private page = 1;

  private $categoryAnnouncement: Subscription;
  private $order: Subscription;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private homeService: HomeService,
    private categoryAnnouncementService: CategoryAnnouncementService,
    private categoryService: CategoryService,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private helpService: HelpsService,
    private allowAdPipe: AllowAdPipe
  ) {}

  ngOnInit() {
    this.findCategory();
    this.getIsBtnOrder();
  }

  /*********************************************************************************** */
  public refresher(event: any): void {
    this.findCategory();
    event.target.complete();
  }

  public hideMenssage() {
    this.menssage = true;
  }

  /************************************************************************************ */

  public orderList(): void {
    this.isOrder = !this.isOrder;
    // if (!this.isOrder) {
    //   this.sendOrder = false;
    // }
  }

  public isSaveOrder(e: boolean): void {
    if (!e) {
      this.isOrder = e;
    }
    this.sendOrder = e;
  }

  public doReorder(ev: any): void {
    if (ev) {
      this.sendOrder = true;
      this.announcement = ev.detail.complete(this.announcement);
    }
  }

  public logScrolling(event: any): void {
    if (event.detail.scrollTop > 500) {
      this.fab = true;
    } else {
      this.fab = false;
    }
  }

  public saveOrder(): void {
    const loading = this.loadingService.show('Ordenar anúncios...');
    const result: number[] = this.announcement.map(
      (item: Announcement) => item.id
    );
    if (result.length > 0) {
      const announcement: Announcement = {
        order: result,
        // eslint-disable-next-line no-underscore-dangle
        _csrf: this.authService.getCsrf,
      };
      this.$order = this.categoryAnnouncementService
        .order(announcement)
        .subscribe(
          (announcement_: Announcement) => {
            setTimeout(() => {
              this.sendOrder = false;
              this.isOrder = false;
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

  public findMoreCategory(event: any): Subscription {
    this.calculatePagination();
    const id = this.getId();
    if (id) {
      return (this.$categoryAnnouncement = this.categoryAnnouncementService
        .findOne(`list`, { limit: this.limit, offset: this.offset, id })
        .subscribe(
          ({ category, announcement }) => {
            const data = announcement
              .map((value) => {
                value.plan = {
                  ...value?.announcement?.user?.plan,
                };
                delete value?.announcement;

                return value;
              })
              .filter((val) => {
                if (!this.allowAdPipe.transform(val)) {
                  return val;
                }
              });
            return this.success(event, data);
          },
          (error: HttpErrorResponse) => this.error.next(true),
          () =>
            this.helpService.delay(
              this.$categoryAnnouncement.unsubscribe(),
              2000
            )
        ));
    }
  }

  private findCategory(): Observable<{
    category: Category;
    announcement: Announcement[];
  }> {
    const id = this.getId();
    if (id) {
      return this.findOne(id);
    }
  }

  private getId() {
    const { slug } = this.route.snapshot.params;
    const i = this.homeService.getCategories.findIndex(
      (item: Category) => item?.slug === slug
    );
    const id = this.homeService.getCategories[i].id;
    return id;
  }

  private findOne(
    id: number
  ): Observable<{ category: Category; announcement: Announcement[] }> {
    return (this.categoryAnnouncement$ = this.categoryAnnouncementService
      .findOne(`list`, { limit: this.limit, offset: this.offset, id })
      .pipe(
        tap(({ category, announcement }) => {
          const data = announcement
            .map((value) => {
              value.plan = {
                ...value?.announcement?.user?.plan,
              };
              delete value?.announcement;
              return value;
            })
            .filter((val) => {
              if (!this.allowAdPipe.transform(val)) {
                return val;
              }
            });
          this.category = category;
          this.announcement = data;
        }),
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
    return announcement.forEach((item: Announcement) =>
      this.announcement.push(item)
    );
  }

  private getIsBtnOrder() {
    this.isBtnOrder = this.authService.getUser.level === '1';
  }

  // private saveSorting(): Subscription {
  //   return (this.$saveSorting = this.categoryService.saveSorting.subscribe(
  //     (is: boolean) => is && this.saveOrder()
  //   ));
  // }
}
