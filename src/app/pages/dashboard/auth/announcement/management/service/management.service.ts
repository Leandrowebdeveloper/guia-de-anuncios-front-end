import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Announcement, Galery, OpeningHour } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class ManagementService {
  private announcement = new BehaviorSubject<Announcement>(undefined);

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
}
