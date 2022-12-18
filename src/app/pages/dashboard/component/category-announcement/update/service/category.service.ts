import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

import { Category } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { CategoryService } from 'src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service';
import { BreadcrumbsService } from 'src/app/header/breadcrumbs/service/breadcrumbs.service';

@Injectable()
export class UpdateCategoryAnnouncementService extends HttpService<Category> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private categoryService: CategoryService,
    private location: Location,
    private breadcrumbsService: BreadcrumbsService
  ) {
    super(http, storageService);
    this.setApi = `category-announcement`;
  }

  private set setCategory(
    category: Required<
      Pick<Category, 'slug' | 'updatedAt' | 'description' | 'name'>
    >
  ) {
    this.categoryService.getCategory.name = category?.name;
    this.categoryService.getCategory.description = category?.description;
    this.categoryService.getCategory.updatedAt = category?.updatedAt;
    this.categoryService.getCategory.slug = category.slug;
    this.categoryService.setCategory = this.categoryService.getCategory;
    this.updateUsersUrl(category);
  }

  public updateNameAndDescription(
    category: Required<Pick<Category, 'slug' | 'description' | 'name'>>
  ): Observable<Category> {
    return this.patch(category, 'management/name-description').pipe(
      tap(
        (
          category_: Required<
            Pick<
              Category,
              'slug' | 'updatedAt' | 'description' | 'name' | 'message'
            >
          >
        ) => (this.setCategory = category_)
      )
    );
  }

  public updateUsersUrl(category: Required<Pick<Category, 'slug'>>): void {
    const url = `/painel-de-controle/admin/categoria/${category?.slug}`;
    this.breadcrumbsService.setEvent(url);
    this.location.replaceState(url);
  }
}
