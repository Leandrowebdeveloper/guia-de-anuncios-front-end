import { Observable } from 'rxjs';
import { Category, Announcement } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AdminAnnouncementService } from 'src/app/pages/dashboard/administrator/announcement/service/admin-announcement.service';

@Injectable()
export class CategoryAnnouncementService extends HttpService<{
  category: Category;
  announcement: Announcement[];
}> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private adminAnnouncementService: AdminAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `category`;
  }

  public order(
    announcement: Pick<Announcement, 'order' | '_csrf'>
  ): Observable<Announcement | number[]> {
    return this.adminAnnouncementService.order(announcement);
  }
}
