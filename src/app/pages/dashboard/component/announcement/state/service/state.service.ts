import { MessageService } from 'src/app/utilities/message/message.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Announcement } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class StateService extends HttpService<Announcement> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    public messageService: MessageService
  ) {
    super(http, storageService);
    this.setApi = `auth-announcement/state`;
  }

  public state(
    announcement: Announcement
  ): Observable<Announcement | number[]> {
    return this.patch(announcement);
  }
}
