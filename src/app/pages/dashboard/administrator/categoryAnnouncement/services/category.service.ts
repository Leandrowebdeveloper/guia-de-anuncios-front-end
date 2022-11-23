import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Image, Category } from 'src/app/interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BreadcrumbsService } from 'src/app/header/breadcrumbs/service/breadcrumbs.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends HttpService<Category> {
  public drop = new EventEmitter<Category>(undefined);
  public deleted = new EventEmitter<Category>(undefined);
  public add = new EventEmitter<Category>(undefined);
  private category = new BehaviorSubject<Category>(undefined);
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private location: Location,
    private breadcrumbsService: BreadcrumbsService
  ) {
    super(http, storageService);
    this.setApi = `category-announcement`;
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
  public get getIcon(): Image {
    return this.category.value?.image;
  }

  public set setIcon(value: Image) {
    this.category.value.image = value;
    this.category.next(this.category.value);
  }

  public set setState(value: boolean) {
    this.category.value.state = value;
    this.category.next(this.category.value);
  }

  public set setUpdatedAt(value: string) {
    this.category.value.updatedAt = value;
    this.category.next(this.category.value);
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public get getSlug() {
    return this.getCategory?.slug;
  }

  public set setSlug(category: Category) {
    this.category.value.slug = category?.slug;
    this.setCategory = this.category?.value;
  }

  public updateNameAndDescription(category: Category): Observable<Category> {
    return this.patch(category, 'management/name-description').pipe(
      tap((category_: Category) => {
        this.category.value.name = category_.name;
        this.category.value.description = category_.description;
        this.category.value.updatedAt = category_.updatedAt;
        this.category.value.slug = category_.slug;
        return (this.setCategory = this.category.value);
      })
    );
  }

  public register(category: Category): Observable<Category> {
    return this.create(category, 'management/register').pipe(
      tap((category_: Category) => this.add.emit(category_))
    );
  }

  public restore(category: Category): Observable<Category | number[]> {
    return this.patch(category, 'management/restore').pipe(
      tap((category_: Category) =>
        setTimeout(() => this.drop.emit(category_), 4000)
      )
    );
  }

  public searchBy(searchBy: object): Observable<Category[]> {
    return this.search(`management/search`, searchBy);
  }

  public state(category: Category): Observable<Category | number[]> {
    return this.patch(category, 'management/state').pipe(
      tap((category_: Category) => {
        this.setState = category_?.state;
        this.setUpdatedAt = category_?.updatedAt;
      })
    );
  }

  public delete(category: Category): Observable<Category> {
    return this.destroy(category, `management/`).pipe(
      tap((category_: Category) =>
        setTimeout(() => this.deleted.emit(category_), 3600)
      )
    );
  }

  public deleteIcon(image: Image): Observable<Category> {
    return this.destroy(image, `management/icon`);
  }

  public dropd(category: Category): Observable<Category> {
    return this.destroy(category, `management/drop`).pipe(
      tap((category_: Category) =>
        setTimeout(() => this.drop.emit(category_), 3600)
      )
    );
  }

  public uploadIcon(category: Category, file: File): Observable<any> {
    const data = this.buildFileData(category, file);
    // eslint-disable-next-line no-underscore-dangle
    this.setCsrf = category._csrf;
    return this.upload('upload', data);
  }

  public order(category: Category): Observable<Category | number[]> {
    return this.patch(category, 'management/order');
  }

  public updateUsersUrl(category: Category): void {
    const url = `/painel-de-controle/admin/manutencao/usuario/${category?.slug}`;
    this.breadcrumbsService.setEvent(url);
    this.location.replaceState(url);
  }

  private buildFileData(category: Category, file: File): FormData {
    if (category && file && file.type === 'image/svg+xml') {
      const formData = new FormData();
      formData.append('catAdId', `${category.id}`);
      // eslint-disable-next-line no-underscore-dangle
      formData.append('_csrf', category._csrf);
      formData.append('filename', file, file?.name);
      return formData;
    }
  }
}
