import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Category } from 'src/app/interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends HttpService<Category> {
  public drop = new EventEmitter<Category>(undefined);
  public deleted = new EventEmitter<Category>(undefined);
  public add = new EventEmitter<Category>(undefined);
  public saveSorting = new EventEmitter<boolean>(false);
  private category = new BehaviorSubject<Category>(undefined);
  constructor(http: HttpClient, public storageService: StorageService) {
    super(http, storageService);
    this.setApi = `category`;
  }

  public get categoryObservable(): Observable<Category> {
    return this.category.asObservable();
  }

  public get getCategory(): Category {
    return this.category.value;
  }

  public set setCategory(value: Category) {
    this.category.next(value);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public get getSlug() {
    return this.getCategory?.slug;
  }

  public set setSlug(category: Category) {
    this.category.value.slug = category?.slug;
    this.setCategory = this.category?.value;
  }

  public register(category: Category): Observable<Category> {
    return this.create(category, 'management/register').pipe(
      tap((category_: Category) => this.add.emit(category_))
    );
  }

  public restore(category: Category): Observable<Category | number[]> {
    return this.patch(category, 'management/restore');
  }

  public searchBy(searchBy: object): Observable<Category[]> {
    return this.search(`management/search`, searchBy);
  }

  public dropd(
    category: Required<Pick<Category, '_csrf' | 'id' | 'password'>>
  ): Observable<Category> {
    return this.destroy(category, `management/drop`).pipe(
      tap((category_: Category) =>
        setTimeout(() => this.drop.emit(category_), 3600)
      )
    );
  }

  public order(category: Category): Observable<Category | number[]> {
    return this.patch(category, 'management/order');
  }
}
