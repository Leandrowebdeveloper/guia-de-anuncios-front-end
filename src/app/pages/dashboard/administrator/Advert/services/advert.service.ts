import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Image, Advert } from 'src/app/interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BreadcrumbsService } from 'src/app/header/breadcrumbs/service/breadcrumbs.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AdvertService extends HttpService<Advert> {
  public drop = new EventEmitter<Advert>(undefined);
  public deleted = new EventEmitter<Advert>(undefined);
  public add = new EventEmitter<Advert>(undefined);
  private advert = new BehaviorSubject<Advert>(undefined);
  constructor(
    private messageService: MessageService,
    private loadingService: LoadingService,
    http: HttpClient,
    public storageService: StorageService,
    private location: Location,
    private breadcrumbsService: BreadcrumbsService
  ) {
    super(http, storageService);
    this.setApi = `auth-advert`;
  }

  public get advertObservable(): Observable<Advert> {
    return this.advert.asObservable();
  }

  public get getAdvert(): Advert {
    return this.advert.value;
  }

  public set setAdvert(value: Advert) {
    this.advert.next(value);
  }

  public set setState(value: boolean) {
    this.advert.value.state = value;
    this.advert.next(this.advert.value);
  }

  public set setUpdatedAt(value: string) {
    this.advert.value.updatedAt = value;
    this.advert.next(this.advert.value);
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public get getSlug() {
    return this.getAdvert?.slug;
  }

  public set setSlug(advert: Advert) {
    this.advert.value.slug = advert?.slug;
    this.setAdvert = this.advert?.value;
  }

  public async showLoading(message: string): Promise<HTMLIonLoadingElement> {
    return await this.loadingService.show(message);
  }

  public updateNameAndDescription(advert: Advert): Observable<Advert> {
    return this.patch(advert, 'management/name-description').pipe(
      tap((advert_: Advert) => {
        this.advert.value.title = advert_.title;
        this.advert.value.description = advert_.description;
        this.advert.value.updatedAt = advert_.updatedAt;
        this.advert.value.slug = advert_.slug;
        return (this.setAdvert = this.advert.value);
      })
    );
  }

  public register(advert: Advert): Observable<Advert> {
    return this.create(advert, 'management/register').pipe(
      tap((advert_: Advert) => this.add.emit(advert_))
    );
  }

  public restore(advert: Advert): Observable<Advert | number[]> {
    return this.patch(advert, 'management/restore').pipe(
      tap((advert_: Advert) => setTimeout(() => this.drop.emit(advert_), 4000))
    );
  }

  public searchBy(searchBy: object): Observable<Advert[]> {
    return this.search(`management/search`, searchBy);
  }

  public state(advert: Advert): Observable<Advert | number[]> {
    return this.patch(advert, 'management/state').pipe(
      tap((advert_: Advert) => {
        this.setState = advert_?.state;
        this.setUpdatedAt = advert_?.updatedAt;
      })
    );
  }

  public delete(advert: Advert): Observable<Advert> {
    return this.destroy(advert, `management/`).pipe(
      tap((advert_: Advert) =>
        setTimeout(() => this.deleted.emit(advert_), 3600)
      )
    );
  }

  public deleteIcon(image: Image): Observable<Advert> {
    return this.destroy(image, `management/icon`);
  }

  public dropd(advert: Advert): Observable<Advert> {
    return this.destroy(advert, `management/drop`).pipe(
      tap((advert_: Advert) => setTimeout(() => this.drop.emit(advert_), 3600))
    );
  }

  public uploadIcon(advert: Advert, file: File): Observable<any> {
    const data = this.buildFileData(advert, file);
    // eslint-disable-next-line no-underscore-dangle
    this.setCsrf = advert._csrf;
    return this.upload('upload', data);
  }

  public order(advert: Advert): Observable<Advert | number[]> {
    return this.patch(advert, 'management/order');
  }

  public async message(
    advert: Advert,
    loading: Promise<HTMLIonLoadingElement>,
    subscribe?: Subscription,
    time?: number
  ): Promise<number> {
    return await this.messageService.success(
      advert?.message,
      loading,
      subscribe,
      time
    );
  }

  public async error(
    error: HttpErrorResponse,
    loading: Promise<HTMLIonLoadingElement>,
    subscribe: Subscription
  ) {
    return this.messageService.error(error, loading, subscribe);
  }

  public updateUsersUrl(advert: Advert): void {
    const url = `/painel-de-controle/admin/manutencao/usuario/${advert?.slug}`;
    this.breadcrumbsService.setEvent(url);
    this.location.replaceState(url);
  }

  private buildFileData(advert: Advert, file: File): FormData {
    if (advert && file && file.type === 'image/svg+xml') {
      const formData = new FormData();
      formData.append('catAdId', `${advert.id}`);
      // eslint-disable-next-line no-underscore-dangle
      formData.append('_csrf', advert._csrf);
      formData.append('filename', file, file?.name);
      return formData;
    }
  }
}
