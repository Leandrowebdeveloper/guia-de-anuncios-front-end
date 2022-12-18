import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { CategoryService } from 'src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service';

@Injectable()
export class StateService extends HttpService<
  Pick<Category, 'slug' | 'updatedAt'>
> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private categoryService: CategoryService
  ) {
    super(http, storageService);
    this.setApi = `category-announcement`;
  }

  public set setState(
    category: Required<Pick<Category, 'updatedAt' | 'state'>>
  ) {
    this.categoryService.getCategory.state = category?.state;
    this.categoryService.getCategory.updatedAt = category?.updatedAt;
    this.categoryService.setCategory = this.categoryService.getCategory;
  }

  public state(
    category: Required<Pick<Category, 'slug' | '_csrf'>>
  ): Observable<Category | number[]> {
    return this.patch(category, 'management/state').pipe(
      tap(
        (
          category_: Required<Pick<Category, 'state' | 'updatedAt' | 'message'>>
        ) => {
          this.setState = category_;
        }
      )
    );
  }
}
