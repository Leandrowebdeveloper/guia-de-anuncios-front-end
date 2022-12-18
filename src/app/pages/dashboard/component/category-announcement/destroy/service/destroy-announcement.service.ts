import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage/storage.service';
import { CategoryService } from 'src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service';

@Injectable({
  providedIn: 'root',
})
export class DestroyAnnouncementService extends HttpService<Category> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    public categoryService: CategoryService
  ) {
    super(http, storageService);
    this.setApi = `category-announcement`;
  }

  public delete(category: Category): Observable<Category> {
    return this.destroy(category, `management/`).pipe(
      tap((category_: Category) =>
        setTimeout(() => this.categoryService.deleted.emit(category_), 3600)
      )
    );
  }
}
