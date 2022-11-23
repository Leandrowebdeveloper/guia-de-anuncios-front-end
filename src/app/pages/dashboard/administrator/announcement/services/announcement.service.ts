import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Image, Announcement } from 'src/app/interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BreadcrumbsService } from 'src/app/header/breadcrumbs/service/breadcrumbs.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService extends HttpService<Announcement> {
  public drop = new EventEmitter<Announcement>(undefined);
  public deleted = new EventEmitter<Announcement>(undefined);
  public add = new EventEmitter<Announcement>(undefined);
  private announcement = new BehaviorSubject<Announcement>(undefined);
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private location: Location,
    private breadcrumbsService: BreadcrumbsService
  ) {
    super(http, storageService);
    this.setApi = `auth-announcement`;
  }

  public get announcementObservable(): Observable<Announcement> {
    return this.announcement.asObservable();
  }

  public get getAnnouncement(): Announcement {
    return this.announcement.value;
  }

  public set setAnnouncement(value: Announcement) {
    this.announcement.next(value);
  }

  public set setState(value: boolean) {
    this.announcement.value.state = value;
    this.announcement.next(this.announcement.value);
  }

  public set setUpdatedAt(value: string) {
    this.announcement.value.updatedAt = value;
    this.announcement.next(this.announcement.value);
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public get getSlug() {
    return this.getAnnouncement?.slug;
  }

  public set setSlug(announcement: Announcement) {
    this.announcement.value.slug = announcement?.slug;
    this.setAnnouncement = this.announcement?.value;
  }

  public updateNameAndDescription(
    announcement: Announcement
  ): Observable<Announcement> {
    return this.patch(announcement, 'management/name-description').pipe(
      tap((announcement_: Announcement) => {
        this.announcement.value.title = announcement_.title;
        this.announcement.value.description = announcement_.description;
        this.announcement.value.updatedAt = announcement_.updatedAt;
        this.announcement.value.slug = announcement_.slug;
        return (this.setAnnouncement = this.announcement.value);
      })
    );
  }

  public register(announcement: Announcement): Observable<Announcement> {
    return this.create(announcement, 'management/register').pipe(
      tap((announcement_: Announcement) => this.add.emit(announcement_))
    );
  }

  public restore(
    announcement: Announcement
  ): Observable<Announcement | number[]> {
    return this.patch(announcement, 'management/restore').pipe(
      tap((announcement_: Announcement) =>
        setTimeout(() => this.drop.emit(announcement_), 4000)
      )
    );
  }

  public searchBy(searchBy: object): Observable<Announcement[]> {
    return this.search(`management/search`, searchBy);
  }

  public state(
    announcement: Announcement
  ): Observable<Announcement | number[]> {
    return this.patch(announcement, 'management/state').pipe(
      tap((announcement_: Announcement) => {
        this.setState = announcement_?.state;
        this.setUpdatedAt = announcement_?.updatedAt;
      })
    );
  }

  public delete(announcement: Announcement): Observable<Announcement> {
    return this.destroy(announcement, `management/`).pipe(
      tap((announcement_: Announcement) =>
        setTimeout(() => this.deleted.emit(announcement_), 3600)
      )
    );
  }

  public deleteIcon(image: Image): Observable<Announcement> {
    return this.destroy(image, `management/icon`);
  }

  public dropd(announcement: Announcement): Observable<Announcement> {
    return this.destroy(announcement, `management/drop`).pipe(
      tap((announcement_: Announcement) =>
        setTimeout(() => this.drop.emit(announcement_), 3600)
      )
    );
  }

  public uploadIcon(announcement: Announcement, file: File): Observable<any> {
    const data = this.buildFileData(announcement, file);
    // eslint-disable-next-line no-underscore-dangle
    this.setCsrf = announcement._csrf;
    return this.upload('upload', data);
  }

  public order(
    announcement: Announcement
  ): Observable<Announcement | number[]> {
    return this.patch(announcement, 'management/order');
  }

  public updateUsersUrl(announcement: Announcement): void {
    const url = `/painel-de-controle/admin/manutencao/usuario/${announcement?.slug}`;
    this.breadcrumbsService.setEvent(url);
    this.location.replaceState(url);
  }

  private buildFileData(announcement: Announcement, file: File): FormData {
    if (announcement && file && file.type === 'image/svg+xml') {
      const formData = new FormData();
      formData.append('catAdId', `${announcement.id}`);
      // eslint-disable-next-line no-underscore-dangle
      formData.append('_csrf', announcement._csrf);
      formData.append('filename', file, file?.name);
      return formData;
    }
  }
}
