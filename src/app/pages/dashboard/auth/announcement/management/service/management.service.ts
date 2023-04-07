import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { StorageService } from 'src/app/services/storage/storage.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { BreadcrumbsService } from 'src/app/header/breadcrumbs/service/breadcrumbs.service';
import {
  Announcement,
  CategoryAnnouncement,
  Galery,
  Messages,
} from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ManagementAnnouncementService extends HttpService<Announcement> {
  private announcement = new BehaviorSubject<Announcement | void>(undefined);

  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    public messageService: MessageService,
    private location: Location,
    private breadcrumbsService: BreadcrumbsService
  ) {
    super(http, storageService);
    this.setApi = `announcement`;
  }

  public get galery(): Galery[] | void {
    if (this.announcement.value) {
      return this.announcement.value.galery;
    }
  }

  public get announcementObservable(): Observable<Announcement | void> {
    return this.announcement.asObservable();
  }

  public get getAnnouncement(): Announcement | void {
    return this.announcement.value;
  }

  public set setAnnouncement(value: Announcement) {
    this.announcement.next(value);
  }

  public set addItemGalery(value: Galery) {
    if (this.announcement.value?.galery) {
      this.announcement.value.galery.unshift(value);
      this.setAnnouncement = this.announcement?.value;
    }
  }

  public set removeItemGalery(galery: Galery) {
    if (this.announcement.value?.galery) {
      const i = this.announcement.value.galery.findIndex(
        (item) => item?.id === galery?.id
      );
      this.announcement.value.galery.splice(i, 1);
      this.setAnnouncement = this.announcement?.value;
    }
  }

  public set setGalery(value: Galery[]) {
    if (this.announcement.value?.galery) {
      this.announcement.value.galery = value;
      this.setAnnouncement = this.announcement?.value;
    }
  }

  public set setBlockade(value: Pick<Announcement, 'blockade'>) {
    if (this.announcement.value?.galery) {
      this.announcement.value.blockade = value?.blockade;
      this.setAnnouncement = this.announcement?.value;
    }
  }

  public set setCategoryAnnouncement(value: CategoryAnnouncement) {
    if (this.announcement.value?.galery) {
      this.announcement.value.category = value?.category;
      this.announcement.value.categoryAnnouncement = {
        id: value?.id,
      } as CategoryAnnouncement;
      this.setAnnouncement = this.announcement?.value;
    }
  }

  public set setAnnouncementMessage(value: Messages) {
    if (this.getAnnouncement?.messages?.length) {
      const count: number = this.getAnnouncement?.messages?.length;
      const i = this.getAnnouncement.messages.findIndex(
        (item) => item?.id === value?.id
      );
      if (i === -1) {
        if (count > 0) {
          this.getAnnouncement?.messages.unshift(value);
        } else {
          this.getAnnouncement.messages = [value];
        }
      } else {
        this.getAnnouncement?.messages.splice(i, 1, value);
      }
      this.setAnnouncement = this.getAnnouncement;
    }
  }

  public set setTitleDescription(
    value: Pick<
      Announcement,
      'title' | 'slug' | 'blockade' | 'description' | 'messages'
    >
  ) {
    if (
      this.getAnnouncement?.messages &&
      this.announcement.value &&
      value.messages
    ) {
      this.announcement.value.title = value?.title;
      this.announcement.value.blockade = value?.blockade;
      this.announcement.value.description = value?.description;
      this.announcement.value.slug = value?.slug;
      this.getAnnouncement?.messages.unshift(value.messages[0]);
      this.setAnnouncement = this.announcement?.value;
      this.updateUrl(value);
    }
  }

  public updateAnnouncement(
    announcement: Announcement
  ): Observable<Announcement> {
    return this.patch(announcement).pipe(
      tap(
        (announcement_: Announcement) =>
          (this.setTitleDescription = announcement_)
      )
    );
  }

  public blockade(announcement: Announcement): Observable<Announcement> {
    return this.patch(announcement, 'blockade').pipe(
      tap((announcement_: Announcement) => (this.setBlockade = announcement_))
    );
  }

  public updateUrl(announcement: Announcement): void {
    const url = `/painel-de-controle/anuncio/${announcement?.slug}`;
    this.breadcrumbsService.setEvent(url);
    this.location.replaceState(url);
  }
}
