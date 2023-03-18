import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { CategoryAnnouncement } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Observable } from 'rxjs';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryAnnouncementService extends HttpService<CategoryAnnouncement> {
  private _categoryEvent = new EventEmitter<CategoryAnnouncement>();
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private managementAnnouncementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `category`;
  }

  public get getCategoryEvent(): Observable<CategoryAnnouncement> {
    // eslint-disable-next-line no-underscore-dangle
    return this._categoryEvent.asObservable();
  }

  public set categoryEvent(value: CategoryAnnouncement) {
    // eslint-disable-next-line no-underscore-dangle
    this._categoryEvent.emit(value);
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  public category(
    category: Required<CategoryAnnouncement>
  ): Observable<CategoryAnnouncement | number[]> {
    if (category.id) {
      return this.patch(category).pipe(
        tap((announcement_: CategoryAnnouncement) => {
          this.managementAnnouncementService.setCategoryAnnouncement =
            announcement_;
          return (this.categoryEvent = announcement_);
        })
      );
    } else {
      return this.create(category).pipe(
        tap((announcement_: CategoryAnnouncement) => {
          this.managementAnnouncementService.setCategoryAnnouncement =
            announcement_;
          return (this.categoryEvent = announcement_);
        })
      );
    }
  }
}
