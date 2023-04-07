import { CategoryService } from 'src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  InfiniteScrollCustomEvent,
  IonReorderGroup,
  NavController,
  Platform,
  SearchbarCustomEvent,
} from '@ionic/angular';
import { EMPTY, Observable, Subject, Subscription } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { Category, Search, SearchCategory } from 'src/app/interface';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { SearchCategoryAnnouncementService } from 'src/app/pages/dashboard/component/category-announcement/search/service/search.service';

@Component({
  selector: 'app-category-announcement-enabled-item',
  templateUrl: './enabled-item.component.html',
  styleUrls: [
    './enabled-item.component.scss',
    '../../../users/users.page.scss',
    '../../../users/pages/enabled-item/component/card-desktop/card-desktop.component.scss',
  ],
})
export class EnabledItemComponent implements OnInit, OnDestroy {
  @ViewChild(IonReorderGroup) reorderGroup!: IonReorderGroup;
  @Output() setError = new EventEmitter<boolean>(false);
  @Output() isEmpty = new EventEmitter<boolean>(false);
  @Output() sendOrder = new EventEmitter<boolean>(false);
  @Input() isOrder!: boolean;
  public category$!: Observable<Category[] | void>;
  public category!: Category[];
  public error = new Subject<boolean>();
  public endListCategory = true;
  public ln: number | undefined;

  public fab = false;
  public menssage!: boolean;

  public sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  private limit = 12;
  private offset = 0;
  private page = 1;
  private searchBy!: { [key: string]: any };

  private $category!: Subscription;
  private $saveSorting!: Subscription;
  private $update!: Subscription;
  private $delete!: Subscription;
  private $order!: Subscription;
  private $search!: Subscription;
  private $searchBy!: Subscription;
  constructor(
    private categoryService: CategoryService,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private searchService: SearchCategoryAnnouncementService,
    private helpService: HelpsService,
    private navCtrl: NavController,
    private plt: Platform
  ) {}

  private get getSearchBy(): { [key: string]: any } {
    return this.searchBy;
  }

  private set setSearchBy(value: Search) {
    const build = JSON.parse(`{ "${value}":"null" }`);
    this.searchBy = build;
  }

  ngOnInit() {
    this.setLnWord();
    this.findCategory();
    this.initSearchBy();
    this.add();
    this.delete();
    this.saveSorting();
    this.update();
  }

  ngOnDestroy(): void {
    this.$searchBy.unsubscribe();
    this.$delete.unsubscribe();
    this.$saveSorting.unsubscribe();
    this.$update.unsubscribe();
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

  public doReorder(ev: any): void {
    if (ev) {
      this.sendOrder.emit(true);
      this.category = ev.detail.complete(this.category);
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
    const loading = this.loadingService.show('Ordenar categoria...');
    const result: (number | undefined)[] = this.category.map(
      (item: Category) => item.id
    );
    if (result && result.length > 0) {
      const category = {
        order: result,
        _csrf: this.category[0]?._csrf,
      } as Category;
      this.$order = this.categoryService.order(category).subscribe({
        next: (category_: Category): void => {
          setTimeout(() => {
            this.isOrder = false;
            this.sendOrder.emit(false);
          }, 3500);
          if (category_?.message)
            this.messageService.success(
              category_?.message,
              loading,
              this.$order
            );
        },
        error: (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.$order),
      });
    }
  }

  public findMoreCategory(event: any): Subscription {
    this.calculatePagination();
    return (this.$category = this.categoryService
      .index(`management`, { limit: this.limit, offset: this.offset })
      .subscribe({
        next: (category: Category[]) => this.success(event, category),
        error: (error: HttpErrorResponse) => {
          this.error.next(true);
          return this.setError.next(true);
        },
        complete: () =>
          this.helpService.delay(this.$category.unsubscribe(), 2000),
      }));
  }

  public search(event: SearchbarCustomEvent): Subscription | void {
    if (event?.target?.value && event?.target?.value.length >= 3) {
      const data = this.setDataSearch(event.target.value);
      return (this.$search = this.categoryService.searchBy(data).subscribe({
        next: (category: Category[]) => {
          this.searchService.search = category;
          setTimeout(() => this.$search.unsubscribe(), 2000);
        },
      }));
    }
  }

  private orderBy(search: Search | 'position'): void {
    if (this.category && search) {
      switch (search) {
        case 'name':
          this.category.sort((a, b): any => a?.name < b?.name && -1);
          break;
        case 'createdAt':
          this.category.sort((a, b): any => a?.createdAt > b?.createdAt && -1);
          break;
        case 'updatedAt':
          this.category.sort((a, b): any => a?.updatedAt > b?.updatedAt && -1);
          break;
        case 'state':
          this.category.sort((a, b): any => a?.state > b?.state && -1);
          break;
        case 'position':
          this.category.sort((a, b): any => a?.position < b?.position && -1);
          break;
      }
    }
  }

  private initSearchBy(): void {
    this.$searchBy = this.searchService.getSearchCategoryBy.subscribe({
      next: (filter: void | SearchCategory) => {
        if (filter === 'name') {
          this.setSearchBy = filter;
        } else {
          this.setSearchBy = 'name';
          filter && this.orderBy(filter);
        }
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

  private findCategory(): Observable<Category[]> {
    return (this.category$ = this.categoryService
      .index(`management`, { limit: this.limit, offset: this.offset })
      .pipe(
        tap((category: Category[] | []) => {
          this.category = category;
          return this.isEmpty.emit(this.category?.length > 0);
        }),
        delay(500),
        catchError((error: HttpErrorResponse) => {
          this.error.next(true);
          this.setError.next(true);
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
    return category.forEach((item: Category) => this.category.push(item));
  }

  private delete(): void {
    this.$delete = this.categoryService.deleted.subscribe({
      next: (category: Category): Promise<boolean> | void => {
        if (category && this.category) {
          const i = this.getIndexCategoryCurrent(category);
          if (i) {
            const result: Category[] = this.category.splice(i, 1);
            this.isEmpty.emit(this.category?.length > 0);
            if (result.length > 0) {
              return this.navCtrl.navigateBack([
                '/painel-de-controle',
                'admin',
                'categorias',
              ]);
            }
          }
        }
      },
    });
  }

  private getIndexCategoryCurrent(category: Category): number | void {
    if (this.category) {
      const index = this.category.findIndex(
        (item: Category) => item?.id === category?.id
      );
      return index;
    }
  }

  private add(): Subscription {
    return (this.$category = this.categoryService.add.subscribe({
      next: (category: Category) => {
        if (category) {
          this.isEmpty.emit(false);
          this.category.unshift(category);
        }
      },
    }));
  }

  private saveSorting(): Subscription {
    return (this.$saveSorting = this.categoryService.saveSorting.subscribe({
      next: (is: boolean) => is && this.saveOrder(),
    }));
  }

  private update(): Subscription {
    return (this.$update = this.categoryService.categoryObservable.subscribe({
      next: (category: Category | void) => {
        if (category && this.category) {
          const i = this.category.findIndex(
            (category_: Pick<Category, 'id'>) => category_?.id === category?.id
          );
          this.category.splice(i, 1, category);
        }
      },
    }));
  }

  private setLnWord() {
    this.plt.ready().then(() => {
      if (!this.plt.is('mobile')) {
        this.ln = 64;
      } else {
        this.ln = 16;
      }
    });
  }
}
