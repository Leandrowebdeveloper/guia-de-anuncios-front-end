import { NavController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Announcement } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { MessageService } from 'src/app/utilities/message/message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthAnnouncementService extends HttpService<Announcement> {
  private announcement = new BehaviorSubject<Announcement[]>([]);
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    public messageService: MessageService,
    private navCtrl: NavController
  ) {
    super(http, storageService);
    this.setApi = `auth-announcement`;
  }

  public get announcementObservable(): Observable<Announcement[]> {
    return this.announcement.asObservable();
  }

  public get getAnnouncement(): Announcement[] {
    return this.announcement.value;
  }

  public set setAnnouncement(value: Announcement[]) {
    this.announcement.next(value);
  }

  public set deleteAnnouncement(value: Announcement) {
    const index = this.getAnnouncement.findIndex(
      (item: Announcement) => item?.id === value?.id
    );
    this.announcement.value.splice(index, 1);
    this.setAnnouncement = this.announcement?.value;
  }

  public set setDataAnnouncement(value: Announcement) {
    const index = this.getAnnouncement.findIndex(
      (item: Announcement) => item?.id === value?.id
    );
    this.announcement.value[index] = value;
    this.setAnnouncement = this.announcement?.value;
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  public createAnnouncement(
    announcement: Required<
      Pick<Announcement, '_csrf' | 'description' | 'title' | 'userId'>
    >
  ): Observable<Announcement> {
    return this.create(announcement, 'announcement').pipe(
      tap((announcement_: Announcement) => {
        if (this.getAnnouncement?.length > 0) {
          this.getAnnouncement.unshift(announcement_);
          this.setAnnouncement = this.getAnnouncement;
        } else {
          this.setAnnouncement = [announcement_];
        }
        return this.navCtrl.navigateBack([
          '/painel-de-controle',
          'anuncio',
          announcement_.slug,
        ]);
      })
    );
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

  public getAnnouncementAll(
    url: string,
    query: Required<{ userId: number; limit: number; offset: number }>
  ): Observable<Announcement[]> {
    return this.index(`management/${url}`, { ...query });
  }
}
