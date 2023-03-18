import { CategoryService } from 'src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Category, Image } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class ImageCategoryService extends HttpService<Category> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private categoryService: CategoryService
  ) {
    super(http, storageService);
    this.setApi = `category`;
  }

  public set setIcon(value: Image) {
    this.categoryService.getCategory.image = value;
    this.categoryService.setCategory = this.categoryService.getCategory;
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  public deleteIcon(image: Image): Observable<Category> {
    return this.destroy(image, `management/icon`);
  }

  public uploadIcon(category: Category, file: File): Observable<any> {
    const data = this.buildFileData(category, file);
    // eslint-disable-next-line no-underscore-dangle
    this.setCsrf = category._csrf;
    return this.upload(data, 'upload');
  }

  private buildFileData(category: Category, file: File): FormData {
    if (category && file && file.type === 'image/svg+xml') {
      const formData = new FormData();
      formData.append('catAdId', `${category.id}`);
      // eslint-disable-next-line no-underscore-dangle
      formData.append('_csrf', category._csrf);
      formData.append('filename', file, file?.name);
      return formData;
    }
  }
}
