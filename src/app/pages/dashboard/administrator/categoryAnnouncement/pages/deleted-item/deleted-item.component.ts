import { HttpErrorResponse } from '@angular/common/http';
import { CategoryService } from 'src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service';
import { EMPTY, Observable, Subject, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category, Search, SearchCategory } from 'src/app/interface';
import { tap, delay, catchError } from 'rxjs/operators';
import {
  AlertController,
  InfiniteScrollCustomEvent,
  SearchbarCustomEvent,
} from '@ionic/angular';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { SearchCategoryAnnouncementService } from 'src/app/pages/dashboard/component/category-announcement/search/service/search.service';

@Component({
  selector: 'app-category-announcement-deleted-item',
  templateUrl: './deleted-item.component.html',
  styleUrls: [
    './deleted-item.component.scss',
    '../../../users/users.page.scss',
  ],
})
export class DeletedItemComponent implements OnInit, OnDestroy {
  public category$!: Observable<Category[]>;
  public category!: Category[];
  public error = new Subject<boolean>();
  public endListCategory = true;
  public toggleList!: boolean;

  public fab = false;

  public sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  public toggleListCategory!: boolean;

  public isOrder = false;
  public sendOrder = false;
  public menssage!: boolean;

  private limit = 12;
  private offset = 0;
  private page = 1;

  private searchBy!: { [key: string]: any };

  private $category!: Subscription;
  private $drop!: Subscription;
  private $delete!: Subscription;
  private $search!: Subscription;
  private $searchBy!: Subscription;

  constructor(
    private route: Router,
    private categoryService: CategoryService,
    private helpService: HelpsService,
    private alertController: AlertController,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private searchService: SearchCategoryAnnouncementService
  ) {}

  private get getSearchBy(): { [key: string]: any } {
    return this.searchBy;
  }

  private set setSearchBy(value: Search) {
    const build = JSON.parse(`{ "${value}":"null" }`);
    this.searchBy = build;
  }

  ngOnInit() {
    this.getUrl();
    this.findCategory();
    this.initSearchBy();
    this.update();
    this.drop();
  }

  ngOnDestroy(): void {
    this.$category.unsubscribe();
    this.$drop.unsubscribe();
    this.$searchBy.unsubscribe();
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

  public togglePage(e: boolean) {
    this.toggleList = e;
  }

  public findMoreCategory(event: any): Subscription {
    this.calculatePagination();
    return (this.$category = this.categoryService
      .index(`management/deleted`, { limit: this.limit, offset: this.offset })
      .subscribe({
        next: (category: Category[]) => this.success(event, category),
        error: (error: HttpErrorResponse) => this.error.next(true),
        complete: () =>
          this.helpService.delay(this.$category.unsubscribe(), 2000),
      }));
  }

  public search(event: SearchbarCustomEvent): Subscription | void {
    if (event?.target?.value && event?.target?.value.length >= 3) {
      const data = this.setDataSearch(event?.target?.value);
      return (this.$search = this.categoryService.searchBy(data).subscribe({
        next: (category: Category[]) => {
          this.searchService.search = category;
          setTimeout(() => this.$search.unsubscribe(), 2000);
        },
      }));
    }
  }

  public async restore(
    category: Pick<Category, 'name' | 'id' | '_csrf'>,
    index: number
  ): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Restaurar categoria',
      subHeader: category?.name,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (event) => {
            const data: Category = {
              ...event,
              id: category?.id,
              _csrf: category?._csrf,
            };
            return this.restored(data, index);
          },
        },
      ],
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'Senha',
          min: 8,
          max: 16,
        },
      ],
    });

    await alert.present();
  }

  public async destroy(
    category: Pick<Category, 'name' | 'id' | '_csrf'>,
    index: number
  ): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Excluir categoria',
      subHeader: category?.name,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (event) => {
            const data: Category = {
              ...event,
              id: category?.id,
              _csrf: category?._csrf,
            };
            return this.delete(data, index);
          },
        },
      ],
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'Senha',
          min: 8,
          max: 16,
        },
      ],
    });

    await alert.present();
  }

  private getUrl(): void {
    this.toggleListCategory =
      this.route.routerState.snapshot.url.includes('excluidas');
  }

  private orderBy(search: Search | 'position'): void {
    if (!this.category) {
      return;
    }
  }

  private initSearchBy(): void {
    this.$searchBy = this.searchService.getSearchCategoryBy.subscribe({
      next: (filter: void | SearchCategory) => {
        if (filter === 'name') {
          this.setSearchBy = filter;
        } else {
          this.setSearchBy = 'name';
          if (filter) this.orderBy(filter);
        }
      },
    });
  }

  private setDataSearch(value: string): { [key: string]: any } {
    let data: { [key: string]: any };
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
      .index(`management/deleted`, { limit: this.limit, offset: this.offset })
      .pipe(
        tap((category: Category[] | []) => (this.category = category)),
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
    return category.forEach((item: Category) => this.category.push(item));
  }

  private update(): Subscription {
    return (this.$category = this.categoryService.categoryObservable.subscribe({
      next: (category: Category | void) => {
        if (category) {
          const i = this.getIndexCategoryCurrent(category);
          if (i) this.switchBetweenAddAndUpdate(category, i);
        }
      },
    }));
  }

  private getIndexCategoryCurrent(
    category: Pick<Category, 'id'>
  ): number | void {
    if (this.category) {
      const index = this.category.findIndex(
        (item: Pick<Category, 'id'>) => item?.id === category?.id
      );
      return index;
    }
  }

  private getIndexUserDropCurrent(category: Pick<Category, 'id'>): number {
    const index = this.category.findIndex(
      (item: Pick<Category, 'id'>) => item?.id === category?.id
    );
    return index;
  }

  private switchBetweenAddAndUpdate(category: Category, i: number): void {
    if (this.category) {
      this.category.splice(i, 1, category);
    }
  }

  private drop(): void {
    this.$drop = this.categoryService.drop.subscribe({
      next: (category: Category) => {
        if (category && this.toggleListCategory) {
          this.category.splice(this.getIndexUserDropCurrent(category), 1);
        }
      },
    });
  }

  private delete(category: Category, index: number): Subscription {
    const loading = this.loadingService.show('Excluindo categoria...');
    return (this.$delete = this.categoryService.dropd(category).subscribe({
      next: (category_: Category) => this.messsage(category_, index, loading),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.$delete),
    }));
  }

  private restored(data: Category, index: number): Subscription {
    const loading = this.loadingService.show('Restaurar categoria...');
    return (this.$delete = this.categoryService.restore(data).subscribe({
      next: (category_: Category) => this.messsage(category_, index, loading),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.$delete),
    }));
  }

  private messsage(
    category: Category,
    index: number,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    setTimeout(() => this.category.splice(index, 1), 3500);
    return this.messageService.success(
      category?.message,
      loading,
      this.$delete
    );
  }
}
