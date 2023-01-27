import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { CategoryService } from 'src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service';

@Injectable()
export class CreateCategoryAnnouncementService extends HttpService<Category> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private categoryService: CategoryService
  ) {
    super(http, storageService);
    this.setApi = `category`;
  }

  public register(
    category: Required<Pick<Category, 'name' | 'description' | '_csrf'>>
  ): Observable<Category> {
    return this.create(category, 'management/register').pipe(
      tap((category_: Category) => this.categoryService.add.emit(category_))
    );
  }
}
