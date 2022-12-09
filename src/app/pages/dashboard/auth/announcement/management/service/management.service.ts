import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Announcement,
  CategoryAnnouncement,
  Galery,
  OpeningHour,
} from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage/storage.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { NavController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { BreadcrumbsService } from 'src/app/header/breadcrumbs/service/breadcrumbs.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ManagementAnnouncementService extends HttpService<Announcement> {
  private announcement = new BehaviorSubject<Announcement>(undefined);

  constructor(
    http: HttpClient,
    public storageService: StorageService,
    public messageService: MessageService,
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

  public set addItemGalery(value: Galery) {
    this.announcement.value.galery.unshift(value);
    this.setAnnouncement = this.announcement?.value;
  }

  public set removeItemGalery(galery: Galery) {
    const i = this.announcement.value.galery.findIndex(
      (item) => item?.id === galery?.id
    );
    this.announcement.value.galery.splice(i, 1);
    this.setAnnouncement = this.announcement?.value;
  }

  public set setGalery(value: Galery[]) {
    this.announcement.value.galery = value;
    this.setAnnouncement = this.announcement?.value;
  }

  public set setOpeningHour(value: OpeningHour) {
    this.announcement.value.openingHour = value;
    this.setAnnouncement = this.announcement?.value;
  }

  public set setSate(value: Announcement) {
    this.announcement.value.state = value.state;
    this.setAnnouncement = this.announcement?.value;
  }

  public set setTitleDescription(value: Announcement) {
    this.announcement.value.title = value?.title;
    this.announcement.value.description = value?.description;
    this.announcement.value.slug = value?.slug;
    this.setAnnouncement = this.announcement?.value;
    this.updateUrl(value);
  }

  public updateAnnouncement(
    announcement: Announcement
  ): Observable<Announcement> {
    return this.patch(announcement, 'announcement').pipe(
      tap(
        (announcement_: Announcement) =>
          (this.setTitleDescription = announcement_)
      )
    );
  }

  public blockade(announcement: Announcement): Observable<Announcement> {
    return this.patch(announcement, 'blockade').pipe(
      tap(
        (announcement_: Announcement) =>
          (this.setTitleDescription = announcement_)
      )
    );
  }

  public updateUrl(announcement: Announcement): void {
    const url = `/painel-de-controle/anuncio/${announcement?.slug}`;
    this.breadcrumbsService.setEvent(url);
    this.location.replaceState(url);
  }
}
