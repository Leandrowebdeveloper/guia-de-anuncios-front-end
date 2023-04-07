import { CategoryService } from 'src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Image } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class ImageCategoryService extends HttpService<
  Required<
    Pick<Image & { catAdId: number }, 'catAdId' | '_csrf' | 'filename' | 'url'>
  >
> {
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    private categoryService: CategoryService
  ) {
    super(http, storageService);
    this.setApi = `category`;
  }

  public set setIcon(
    value: Required<
      Pick<
        Image & { catAdId: number },
        'catAdId' | '_csrf' | 'filename' | 'url'
      >
    >
  ) {
    if (this.categoryService.getCategory) {
      this.categoryService.getCategory.image = value;
      this.categoryService.setCategory = this.categoryService.getCategory;
    }
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  public deleteIcon(
    image: Required<
      Pick<
        Image & { catAdId: number },
        'catAdId' | '_csrf' | 'filename' | 'url'
      >
    >
  ): Observable<
    Required<
      Pick<
        Image & { catAdId: number },
        'catAdId' | '_csrf' | 'filename' | 'url'
      >
    >
  > {
    return this.destroy(image, `management/icon`);
  }

  public uploadIcon(
    image: Required<Pick<Image & { catAdId: number }, 'catAdId' | '_csrf'>>,
    file: File
  ): Observable<any> | any {
    const data = this.buildFileData(image, file);
    if (data && image._csrf) {
      this.loadCsrf(image);
      return this.upload(data, 'upload');
    }
  }

  private loadCsrf(
    image: Required<Pick<Image & { catAdId: number }, 'catAdId' | '_csrf'>>
  ) {
    this.setCsrf = image._csrf;
  }

  private buildFileData(
    image: Required<Pick<Image & { catAdId: number }, 'catAdId' | '_csrf'>>,
    file: File
  ): FormData | void {
    if (image && file && file.type === 'image/svg+xml') {
      const formData = new FormData();
      formData.append('catAdId', `${image.catAdId}`);
      image._csrf && formData.append('_csrf', image._csrf);
      formData.append('filename', file, file?.name);
      return formData;
    }
  }
}
