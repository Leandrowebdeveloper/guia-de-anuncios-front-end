import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { MessageService } from 'src/app/utilities/message/message.service';

@Injectable()
export class AdminAnnouncementService extends HttpService<Announcement> {
  public saveSorting = new EventEmitter<boolean>(false);
  private announcement = new EventEmitter<Announcement>(undefined);
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    public messageService: MessageService
  ) {
    super(http, storageService);
    this.setApi = `announcement`;
  }

  public get asObservable(): Observable<Announcement> {
    return this.announcement.asObservable();
  }

  public set setAnnouncement(announcement: Announcement) {
    this.announcement.emit(announcement);
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  public delete(
    announcement: Required<Pick<Announcement, '_csrf' | 'id'>>
  ): Observable<Announcement> {
    const { id, _csrf } = announcement;
    return this.destroy({ id, _csrf }, `management/`);
  }

  public drop(
    announcement: Required<Pick<Announcement, '_csrf' | 'id'>>
  ): Observable<Announcement> {
    const { id, _csrf } = announcement;
    return this.destroy({ id, _csrf }, `management/drop`);
  }

  public toRestore(
    announcement: Required<Pick<Announcement, '_csrf' | 'id'>>
  ): Observable<Announcement | number[]> {
    const { id, _csrf } = announcement;
    return this.patch({ id, _csrf }, `management/to-restore`);
  }

  public searchBy(searchBy: object): Observable<Announcement[]> {
    return this.search(`management/search`, searchBy);
  }

  public getAnnouncementAll(
    url: string,
    query: Required<{ limit: number; offset: number }>
  ): Observable<Announcement[]> {
    return this.index(`management/${url}`, { ...query });
  }

  public order(
    announcement: Pick<Announcement, 'order' | '_csrf'>
  ): Observable<Announcement | number[]> {
    return this.patch(announcement, 'management/order');
  }
}
