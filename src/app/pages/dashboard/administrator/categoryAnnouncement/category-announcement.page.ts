import { HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, tap } from 'rxjs/operators';
import { Category, CategorySearch } from 'src/app/interface';
import { Observable, EMPTY, Subject, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  InfiniteScrollCustomEvent,
  IonContent,
  IonReorderGroup,
  ModalController,
  NavController,
  SearchbarCustomEvent,
} from '@ionic/angular';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { Router } from '@angular/router';
import { CategoryService } from './services/category.service';
import { FormComponent } from './form/form.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SearchService } from 'src/app/components/categotyAnnouncementSearch/service/service.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';

@Component({
  selector: 'app-category',
  templateUrl: 'category-announcement.page.html',
  styleUrls: ['category-announcement.page.scss', '../users/users.page.scss'],
})
export class CategoryPage implements OnInit, OnDestroy {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  public category$: Observable<Category[]>;
  public category: Category[];
  public categoryDrop: Category[];
  public error = new Subject<boolean>();
  public endListCategory = true;

  public fab = false;

  public sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  public toggleListCategory: boolean;

  public isOrder = false;
  public sendOrder = false;

  private $category: Subscription;
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
    private categoryService: CategoryService,
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
    this.$category.unsubscribe();
    this.$drop.unsubscribe();
    this.$dropd.unsubscribe();
  }

  public doReorder(ev: any): void {
    if (ev) {
      this.sendOrder = true;
      this.category = ev.detail.complete(this.category);
    }
  }

  public saveOrder(): void {
    const loading = this.loadingService.show('Ordenar categoria...');
    const result: number[] = this.category.map((item: Category) => item.id);
    if (result.length > 0) {
      const category: Category = {
        order: result,
        // eslint-disable-next-line no-underscore-dangle
        _csrf: this.category[0]._csrf,
      };
      this.$order = this.categoryService.order(category).subscribe(
        (category_: Category) => {
          setTimeout(() => {
            this.isOrder = false;
            this.sendOrder = false;
          }, 3500);
          this.messageService.success(category_?.message, loading, this.$order);
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
      return (this.$search = this.categoryService
        .searchBy(data)
        .subscribe((category: Category[]) => {
          this.searchService.search = category;
          setTimeout(() => this.$search.unsubscribe(), 2000);
        }));
    }
  }

  public findMoreCategory(event: any): Subscription {
    this.calculatePagination();
    const url = this.toggleListCategory ? 'deleted' : '';
    return (this.$category = this.categoryService
      .index(`management/${url}`, { limit: this.limit, offset: this.offset })
      .subscribe(
        (category: Category[]) => this.success(event, category),
        (error: HttpErrorResponse) => this.error.next(true),
        () => this.helpService.delay(this.$category.unsubscribe(), 2000)
      ));
  }

  public async restore(category: Category): Promise<void> {
    const { _csrf, slug, id } = category;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'restore',
        label: 'Restaurar',
        category: {
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
  public async destroy(category: Category): Promise<void> {
    const { _csrf, slug, id } = category;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'drop',
        label: 'Excluir',
        category: {
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
        category: {
          name: null,
          description: null,
          // eslint-disable-next-line no-underscore-dangle
          _csrf: this.category[0]?._csrf || this.authService.getCsrf,
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
    if (!this.category) {
      return;
    }
    switch (search) {
      case 'name':
        this.category.sort((a, b) => a?.name < b?.name && -1);
        break;
      case 'createdAt':
        this.category.sort((a, b) => a?.createdAt > b?.createdAt && -1);
        break;
      case 'updatedAt':
        this.category.sort((a, b) => a?.updatedAt > b?.updatedAt && -1);
        break;
      case 'state':
        this.category.sort((a, b) => a?.state > b?.state && -1);
        break;
      case 'position':
        this.category.sort((a, b) => a?.position < b?.position && -1);
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

  private findCategory(): Observable<Category[]> {
    const url = this.toggleListCategory ? 'deleted' : '';
    return (this.category$ = this.categoryService
      .index(`management/${url}`, { limit: this.limit, offset: this.offset })
      .pipe(
        tap((category: Category[] | []) => {
          if (this.toggleListCategory) {
            return (this.categoryDrop = category);
          }
          return (this.category = category);
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
    category: Category[]
  ): void {
    this.setMoreData(category);
    this.updateScrollEvent(event, category);
    return;
  }

  private updateScrollEvent(
    event: InfiniteScrollCustomEvent,
    category: Category[]
  ): void {
    event.target.complete();
    if (category.length < 8) {
      this.endListCategory = false;
      event.target.disabled = true;
    }
    return;
  }

  private setMoreData(category: Category[]): void {
    if (this.toggleListCategory) {
      return category.forEach((item: Category) => this.categoryDrop.push(item));
    }
    return category.forEach((item: Category) => this.category.push(item));
  }

  private update(): Subscription {
    return (this.$category = this.categoryService.categoryObservable.subscribe(
      (category: Category) => {
        if (category) {
          const i = this.getIndexCategoryCurrent(category);
          this.switchBetweenAddAndUpdate(category, i);
        }
      }
    ));
  }

  private add(): Subscription {
    return (this.$category = this.categoryService.add.subscribe(
      (category: Category) => {
        if (category) {
          this.category.unshift(category);
        }
      }
    ));
  }

  private getIndexCategoryCurrent(category: Category): number {
    if (this.category) {
      const index = this.category.findIndex(
        (item: Category) => item?.slug === category?.slug
      );
      return index;
    }
  }

  private getIndexUserDropCurrent(category: Category): number {
    if (this.categoryDrop) {
      const index = this.categoryDrop.findIndex(
        (item: Category) => item?.slug === category?.slug
      );
      return index;
    }
  }

  private switchBetweenAddAndUpdate(category: Category, i: number): void {
    if (this.category) {
      this.category.splice(i, 1, category);
    }
  }

  private drop(): void {
    this.$drop = this.categoryService.drop.subscribe((category: Category) => {
      if (category && this.toggleListCategory) {
        this.categoryDrop.splice(this.getIndexUserDropCurrent(category), 1);
      }
    });
  }

  private deleted(): void {
    this.$dropd = this.categoryService.deleted.subscribe(
      (category: Category) => {
        if (category && this.category) {
          const result: Category[] = this.category.splice(
            this.getIndexCategoryCurrent(category),
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
