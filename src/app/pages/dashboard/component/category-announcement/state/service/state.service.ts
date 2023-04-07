import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { CategoryService } from 'src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service';

@Injectable()
export class StateService extends HttpService<Category> {
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    private categoryService: CategoryService
  ) {
    super(http, storageService);
    this.setApi = `category`;
  }

  public set setState(category: Category) {
    if (this.categoryService.getCategory) {
      this.categoryService.getCategory.state = category?.state;
      this.categoryService.getCategory.updatedAt = category?.updatedAt;
      this.categoryService.setCategory = this.categoryService.getCategory;
    }
  }

  public state(category: Category): Observable<Category> {
    return this.patch(category, 'management/state').pipe(
      tap((category_: Category) => (this.setState = category_))
    );
  }
}
