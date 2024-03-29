import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { HttpService } from 'src/app/services/http/http.service';
import { Announcement } from 'src/app/interface';

@Injectable()
export class StateAnnouncementService extends HttpService<Announcement> {
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    public messageService: MessageService,
    private managementAnnouncementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `announcement/state`;
  }

  public set setSate(value: Pick<Announcement, 'state'>) {
    if (this.managementAnnouncementService.getAnnouncement) {
      this.managementAnnouncementService.getAnnouncement.state = value.state;
      this.managementAnnouncementService.setAnnouncement =
        this.managementAnnouncementService.getAnnouncement;
    }
  }

  public state(
    announcement: Pick<Announcement, '_csrf' | 'id'>
  ): Observable<Announcement> {
    return this.patch(announcement).pipe(
      tap((announcement_: Announcement) => (this.setSate = announcement_))
    );
  }
}
