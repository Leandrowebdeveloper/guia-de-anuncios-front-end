import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryAnnouncement } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryAnnouncementService extends HttpService<CategoryAnnouncement> {
  constructor(http: HttpClient, public storageService: StorageService) {
    super(http, storageService);
    this.setApi = `auth-announcement/category`;
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  public category(category: CategoryAnnouncement) {
    if (category.id) {
      return this.patch(category);
    } else {
      return this.create(category);
    }
  }
}
