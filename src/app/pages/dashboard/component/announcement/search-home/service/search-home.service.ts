import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class SearchHomeAnnouncementService extends HttpService<Announcement> {
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService
  ) {
    super(http, storageService);
    this.setApi = `announcement`;
  }

  public getSearch(announcement: Announcement): Observable<Announcement[]> {
    return this.search('search-home', announcement);
  }
}
