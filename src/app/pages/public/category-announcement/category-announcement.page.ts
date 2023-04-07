import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import {
  InfiniteScrollCustomEvent,
  IonReorderGroup,
  NavController,
} from '@ionic/angular';

import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { AllowAdPipe } from 'src/app/pipe/allow-ad/allow-ad.pipe';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Announcement, Category, Plan, User } from 'src/app/interface';
import { CategoryAnnouncementService } from './service/service.service';
import { HomeService } from './../home/services/home.service';
import { ModuleDarkService } from 'src/app/services/module-dark/module-dark.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './category-announcement.page.html',
  styleUrls: ['./category-announcement.page.scss'],
})
export class CategoryAnnouncementPage implements OnInit, OnDestroy {
  @ViewChild(IonReorderGroup) reorderGroup!: IonReorderGroup;
  public isOrder!: boolean;
  public sendOrder!: boolean;
  public categoryAnnouncement$!: Observable<{
    category: Category;
    announcement: Announcement[];
  } | void>;
  public category!: Category;
  public announcement!: Announcement[];
  public error = new Subject<boolean>();
  public isBtnOrder!: boolean;
  public endListCategory = true;
  public ln: number | undefined;

  public fab = false;
  public menssage!: boolean;

  public sizeSkeleton = [1, 2, 3, 4, 5, 6];

  public isAuth!: boolean;
  public isModuleDark!: boolean;

  private limit = 12;
  private offset = 0;
  private page = 1;

  private $categoryAnnouncement!: Subscription;
  private $order!: Subscription;
  private $isModuleDark!: Subscription;
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private route: ActivatedRoute,
    private homeService: HomeService,
    private categoryAnnouncementService: CategoryAnnouncementService,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private helpService: HelpsService,
    private allowAdPipe: AllowAdPipe,
    private moduleDarkService: ModuleDarkService
  ) {}

  ngOnDestroy(): void {
    this.$isModuleDark.unsubscribe();
  }

  ngOnInit() {
    this.findCategory();
    this.getIsBtnOrder();
    this.setAuth();
    this.setDarkValue();
    this.isDark();
  }

  public back() {
    this.navCtrl.back();
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
    const result: (number | undefined)[] = this.announcement.map(
      (item: Announcement) => item.id
    );
    if (result && result.length > 0 && this.authService.getCsrf) {
      const announcement: Announcement = {
        order: result,
        _csrf: this.authService.getCsrf,
      };
      this.$order = this.categoryAnnouncementService
        .order(announcement)
        .subscribe({
          next: (announcement_: Announcement) => {
            setTimeout(() => {
              this.sendOrder = false;
              this.isOrder = false;
            }, 3500);
            announcement_?.message &&
              this.messageService.success(
                announcement_?.message,
                loading,
                this.$order
              );
          },
          error: (error: HttpErrorResponse) =>
            this.messageService.error(error, loading, this.$order),
        });
    }
  }

  public findMoreCategory(event: any): Subscription | void {
    this.calculatePagination();
    const id = this.getId();
    if (id) {
      return (this.$categoryAnnouncement = this.categoryAnnouncementService
        .findOne(`list`, { limit: this.limit, offset: this.offset, id })
        .subscribe({
          next: ({ category, announcement }) => {
            const data: (Announcement | void)[] = announcement
              .map((value): Announcement | void => {
                if (
                  value?.plan &&
                  value?.user?.plan &&
                  value?.announcement?.user?.email
                ) {
                  value.plan = {
                    ...(value?.announcement?.user?.plan as Plan),
                  };
                  value.user = {
                    email: value?.announcement.user.email,
                  } as User;
                  delete value?.announcement;
                  return value;
                }
              })
              .filter((val): Announcement | null => {
                if (val && !this.allowAdPipe.transform(val)) {
                  return val;
                }
                return null;
              });
            return this.success(event, data);
          },
          error: (error: HttpErrorResponse) => this.error.next(true),
          complete: () =>
            this.helpService.delay(
              this.$categoryAnnouncement.unsubscribe(),
              2000
            ),
        }));
    }
  }

  private setDarkValue(): boolean {
    const is = this.moduleDarkService.isDark();
    if (is) return (this.isModuleDark = true);
    return (this.isModuleDark = false);
  }

  private isDark(): void {
    this.$isModuleDark = this.moduleDarkService
      .toggleEvent()
      .subscribe({ next: (isDark: boolean) => (this.isModuleDark = isDark) });
  }

  private findCategory(): Observable<{
    category: Category;
    announcement: Announcement[];
  }> | void {
    const id = this.getId();
    if (id) {
      return this.findOne(id);
    }
  }

  private getId(): number | void {
    if (
      this.homeService.getCategories &&
      this.homeService.getCategories.length > 0
    ) {
      const { slug } = this.route.snapshot.params;
      const i = this.homeService.getCategories.findIndex(
        (item: Category) => item?.slug === slug
      );
      const id = this.homeService.getCategories[i].id;
      return id;
    }
  }

  private findOne(
    id: number
  ): Observable<{ category: Category; announcement: Announcement[] }> {
    return (this.categoryAnnouncement$ = this.categoryAnnouncementService
      .findOne(`list`, { limit: this.limit, offset: this.offset, id })
      .pipe(
        tap(({ category, announcement }) => {
          const data: (Announcement | void)[] = announcement
            .map((value): Announcement | void => {
              if (value?.announcement) {
                value.plan = {
                  ...value?.announcement?.user?.plan,
                } as Plan;
                value.user = {
                  email: value?.announcement.user.email,
                } as User;
                delete value?.announcement;
                return value;
              }
            })
            .filter((val): Announcement | void => {
              if (val && !this.allowAdPipe.transform(val)) {
                return val;
              }
            });
          this.category = category;
          this.announcement = data as Announcement[];
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
    announcement: (Announcement | void)[]
  ): void {
    this.setMoreData(announcement);
    this.updateScrollEvent(event, announcement);
    return;
  }

  private updateScrollEvent(
    event: InfiniteScrollCustomEvent,
    announcement: (Announcement | void)[]
  ): void {
    event.target.complete();
    if (announcement.length < 8) {
      this.endListCategory = false;
      event.target.disabled = true;
    }
    return;
  }

  private setMoreData(announcement: (Announcement | void)[]): void {
    if (Array.isArray(announcement)) {
      return announcement.forEach((item: Announcement | void) => {
        if (item && typeof item !== undefined) {
          this.announcement && this.announcement.push(item);
        }
      });
    }
  }

  private getIsBtnOrder() {
    if (this.authService.getUser) {
      this.isBtnOrder = this.authService.getUser.level === '1';
    }
  }

  private setAuth(): void {
    if (this.authService.getUser) {
      this.isAuth = this.authService.getUser.auth;
    }
  }

  // private saveSorting(): Subscription {
  //   return (this.$saveSorting = this.categoryService.saveSorting.subscribe(
  //     (is: boolean) => is && this.saveOrder()
  //   ));
  // }
}
