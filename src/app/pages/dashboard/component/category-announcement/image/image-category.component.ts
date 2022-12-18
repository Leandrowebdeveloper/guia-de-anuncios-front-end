import { Subscription } from 'rxjs';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category, Image as Icon, HttpResponse } from 'src/app/interface';
import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { MessageService } from 'src/app/utilities/message/message.service';
import { ImageCategoryService } from './service/image-category.service';

@Component({
  selector: 'app-image-category-component',
  templateUrl: './image-category.component.html',
  styleUrls: ['./image-category.component.scss'],
})
export class ImageCategoryComponent {
  @Input() category!: Category;
  private $upload: Subscription;
  private $deleteIcon: Subscription;
  private form: FormGroup;
  constructor(
    private imageCategoryService: ImageCategoryService,
    private messageService: MessageService
  ) {}

  public sendFile(input: HTMLInputElement): Subscription {
    const FILE = input.files[0];
    if (FILE.type === 'image/svg+xml') {
      return (this.$upload = this.imageCategoryService
        .uploadIcon(this.category, FILE)
        .subscribe(
          (response: any) => this.success(response, response, this.$upload),
          (error: HttpErrorResponse) =>
            this.messageService.error(error, null, this.$upload)
        ));
    }
  }

  public loadFile(file: HTMLInputElement): void {
    return file.click();
  }

  public deleteIcon(image: Icon, csrf: string): Subscription {
    // eslint-disable-next-line no-underscore-dangle
    image._csrf = csrf;
    return (this.$deleteIcon = this.imageCategoryService
      .deleteIcon(image)
      .subscribe((image_: Icon) =>
        this.messageDeleteIcon(image_, this.$deleteIcon)
      ));
  }

  private success(
    httpHeaderResponse: HttpHeaderResponse,
    httpResponse: HttpResponse,
    subscription: Subscription
  ): void {
    if (httpHeaderResponse.ok && httpHeaderResponse.status === 200) {
      return this.complete(httpResponse, subscription);
    }
  }

  private complete(
    httpResponse: HttpResponse,
    subscription: Subscription
  ): void {
    const { body } = httpResponse;
    if (body) {
      const image = body as unknown as Icon;
      this.update(image, subscription);
    }
  }

  private update(icon: Icon, subscription: Subscription): void {
    this.setIcon(icon);
    this.messageService.success(
      'Icone adicionado com sucesso.',
      null,
      subscription,
      2000
    );
  }

  private messageDeleteIcon(icon: Icon, subscription: Subscription): void {
    this.setIcon(icon);
    this.messageService.success(
      'Icone excluido com sucesso.',
      null,
      subscription,
      1000
    );
  }

  private setIcon(image: Icon): void {
    this.imageCategoryService.setIcon = image;
  }
}
