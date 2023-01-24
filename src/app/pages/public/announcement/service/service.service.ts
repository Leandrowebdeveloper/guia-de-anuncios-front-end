import { Announcement } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class AnnouncementService extends HttpService<Announcement> {
  constructor(http: HttpClient, public storageService: StorageService) {
    super(http, storageService);
    this.setApi = `announcement`;
  }
}
