import { HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, tap } from 'rxjs/operators';
import { Advert, CategorySearch } from 'src/app/interface';
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
import { AdvertService } from './services/advert.service';
import { FormComponent } from './form/form.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SearchService } from 'src/app/components/categotyAdvertsementSearch/service/service.service';

@Component({
  selector: 'app-advert',
  templateUrl: 'advert.page.html',
  styleUrls: ['advert.page.scss', '../users/users.page.scss'],
})
export class AdvertPage implements OnInit, OnDestroy {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  public advert$: Observable<Advert[]>;
  public advert: Advert[];
  public categoryDrop: Advert[];
  public error = new Subject<boolean>();
  public endListCategory = true;

  public fab = false;

  public sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  public toggleListCategory: boolean;

  public isOrder = false;
  public sendOrder = false;

  private $advert: Subscription;
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
    private advertService: AdvertService,
    private helpService: HelpsService,
    private searchService: SearchService,
    private route: Router,
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController
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
    this.$advert.unsubscribe();
    this.$drop.unsubscribe();
    this.$dropd.unsubscribe();
  }

  public doReorder(ev: CustomEvent<ItemReorderEventDetail>): void {
    if (ev) {
      this.sendOrder = true;
      this.advert = ev.detail.complete(this.advert);
    }
  }

  public saveOrder(): void {
    const loading = this.advertService.showLoading('Ordenar categoria...');
    const result: number[] = this.advert.map((item: Advert) => item.id);
    if (result.length > 0) {
      const advert: Advert = {
        order: result,
        // eslint-disable-next-line no-underscore-dangle
        _csrf: this.advert[0]._csrf,
      };
      this.$order = this.advertService.order(advert).subscribe(
        (advert_: Advert) => {
          setTimeout(() => {
            this.isOrder = false;
            this.sendOrder = false;
          }, 3500);
          this.advertService.message(advert_, loading, this.$order);
        },
        (error: HttpErrorResponse) =>
          this.advertService.error(error, loading, this.$order)
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
      return (this.$search = this.advertService
        .searchBy(data)
        .subscribe((advert: Advert[]) => {
          this.searchService.search = advert;
          setTimeout(() => this.$search.unsubscribe(), 2000);
        }));
    }
  }

  public findMoreCategory(event: any): Subscription {
    this.calculatePagination();
    const url = this.toggleListCategory ? 'deleted' : '';
    return (this.$advert = this.advertService
      .index(`management/${url}`, { limit: this.limit, offset: this.offset })
      .subscribe(
        (advert: Advert[]) => this.success(event, advert),
        (error: HttpErrorResponse) => this.error.next(true),
        () => this.helpService.delay(this.$advert.unsubscribe(), 2000)
      ));
  }

  public async restore(advert: Advert): Promise<void> {
    const { _csrf, slug, id } = advert;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'restore',
        label: 'Restaurar',
        advert: {
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
  public async destroy(advert: Advert): Promise<void> {
    const { _csrf, slug, id } = advert;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'drop',
        label: 'Excluir',
        advert: {
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
        advert: {
          name: null,
          description: null,
          // eslint-disable-next-line no-underscore-dangle
          _csrf: this.advert[0]?._csrf || this.authService.getCsrf,
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
    if (!this.advert) {
      return;
    }
    switch (search) {
      case 'name':
        this.advert.sort((a, b) => a?.title < b?.title && -1);
        break;
      case 'createdAt':
        this.advert.sort((a, b) => a?.createdAt > b?.createdAt && -1);
        break;
      case 'updatedAt':
        this.advert.sort((a, b) => a?.updatedAt > b?.updatedAt && -1);
        break;
      case 'state':
        this.advert.sort((a, b) => a?.state > b?.state && -1);
        break;
      case 'position':
        this.advert.sort((a, b) => a?.position < b?.position && -1);
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

  private findCategory(): Observable<Advert[]> {
    const url = this.toggleListCategory ? 'deleted' : '';
    return (this.advert$ = this.advertService
      .index(`management/${url}`, { limit: this.limit, offset: this.offset })
      .pipe(
        tap((advert: Advert[]) => {
          if (this.toggleListCategory) {
            return (this.categoryDrop = advert);
          }
          return (this.advert = advert);
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

  private success(event: InfiniteScrollCustomEvent, advert: Advert[]): void {
    this.setMoreData(advert);
    this.updateScrollEvent(event, advert);
    return;
  }

  private updateScrollEvent(
    event: InfiniteScrollCustomEvent,
    advert: Advert[]
  ): void {
    event.target.complete();
    if (advert.length < 8) {
      this.endListCategory = false;
      event.target.disabled = true;
    }
    return;
  }

  private setMoreData(advert: Advert[]): void {
    if (this.toggleListCategory) {
      return advert.forEach((item: Advert) => this.categoryDrop.push(item));
    }
    return advert.forEach((item: Advert) => this.advert.push(item));
  }

  private update(): Subscription {
    return (this.$advert = this.advertService.advertObservable.subscribe(
      (advert: Advert) => {
        if (advert) {
          const i = this.getIndexCategoryCurrent(advert);
          this.switchBetweenAddAndUpdate(advert, i);
        }
      }
    ));
  }

  private add(): Subscription {
    return (this.$advert = this.advertService.add.subscribe(
      (advert: Advert) => {
        if (advert) {
          this.advert.unshift(advert);
        }
      }
    ));
  }

  private getIndexCategoryCurrent(advert: Advert): number {
    if (this.advert) {
      const index = this.advert.findIndex(
        (item: Advert) => item?.slug === advert?.slug
      );
      return index;
    }
  }

  private getIndexUserDropCurrent(advert: Advert): number {
    if (this.categoryDrop) {
      const index = this.categoryDrop.findIndex(
        (item: Advert) => item?.slug === advert?.slug
      );
      return index;
    }
  }

  private switchBetweenAddAndUpdate(advert: Advert, i: number): void {
    if (this.advert) {
      this.advert.splice(i, 1, advert);
    }
  }

  private drop(): void {
    this.$drop = this.advertService.drop.subscribe((advert: Advert) => {
      if (advert && this.toggleListCategory) {
        this.categoryDrop.splice(this.getIndexUserDropCurrent(advert), 1);
      }
    });
  }

  private deleted(): void {
    this.$dropd = this.advertService.deleted.subscribe((advert: Advert) => {
      if (advert && this.advert) {
        const result: Advert[] = this.advert.splice(
          this.getIndexCategoryCurrent(advert),
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
    });
  }
}
