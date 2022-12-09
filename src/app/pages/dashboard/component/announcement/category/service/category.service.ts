import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryAnnouncement } from 'src/app/interface';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryAnnouncementService extends HttpService<CategoryAnnouncement> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private managementAnnouncementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `auth-announcement/category`;
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  public set setCategoryAnnouncement(value: CategoryAnnouncement) {
    this.managementAnnouncementService.getAnnouncement.categoryAnnouncement =
      value;
    this.managementAnnouncementService.setAnnouncement =
      this.managementAnnouncementService.getAnnouncement;
  }

  public category(
    category: CategoryAnnouncement
  ): Observable<CategoryAnnouncement> {
    if (category.id) {
      return this.patch(category).pipe(
        tap(
          (category_: CategoryAnnouncement) =>
            (this.setCategoryAnnouncement = category_)
        )
      );
    } else {
      return this.create(category).pipe(
        tap(
          (category_: CategoryAnnouncement) =>
            (this.setCategoryAnnouncement = category_)
        )
      );
    }
  }
}
