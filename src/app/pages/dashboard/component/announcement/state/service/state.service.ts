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
export class StateService extends HttpService<Announcement> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    public messageService: MessageService,
    private managementAnnouncementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `auth-announcement/state`;
  }

  public state(
    announcement: Announcement
  ): Observable<Announcement | number[]> {
    return this.patch(announcement).pipe(
      tap(
        (announcement_: Announcement) =>
          (this.managementAnnouncementService.setSate = announcement_)
      )
    );
  }
}
