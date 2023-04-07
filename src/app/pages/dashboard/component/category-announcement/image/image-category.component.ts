import { Subscription } from 'rxjs';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category, HttpResponse, Image } from 'src/app/interface';
import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { MessageService } from 'src/app/utilities/message/message.service';
import { ImageCategoryService } from './service/image-category.service';

@Component({
  selector: 'app-image-category-component',
  templateUrl: './image-category.component.html',
  styleUrls: ['./image-category.component.scss'],
})
export class ImageCategoryComponent {
  @Input() category!: Category | void;
  private $upload!: Subscription;
  private $deleteIcon!: Subscription;
  private form!: FormGroup;
  constructor(
    private imageCategoryService: ImageCategoryService,
    private messageService: MessageService
  ) {}

  public sendFile(input: HTMLInputElement): Subscription | void {
    if (input?.files && input.files[0].type === 'image/svg+xml') {
      const file = this.buildDataUpload();
      if (file)
        return (this.$upload = this.imageCategoryService
          .uploadIcon(file, input.files[0])
          .subscribe({
            next: (response: any) =>
              this.success(response, response, this.$upload),
            error: (error: HttpErrorResponse) =>
              this.messageService.error(error, undefined, this.$upload),
          }));
    }
  }

  private buildDataUpload(): Required<
    Pick<Image & { catAdId: number }, 'catAdId' | '_csrf'>
  > | void {
    if (this.category)
      return {
        catAdId: this.category.id,
        _csrf: this.category._csrf,
      };
  }

  public loadFile(file: HTMLInputElement): void {
    return file.click();
  }

  public deleteIcon(): Subscription | void {
    if (this.category) {
      this.category.image._csrf = this.category?._csrf;
      const image: Required<
        Pick<
          Image & {
            catAdId: number;
          },
          'catAdId' | '_csrf' | 'filename' | 'url'
        >
      > = {
        ...this.category.image,
      };
      return (this.$deleteIcon = this.imageCategoryService
        .deleteIcon(image)
        .subscribe({
          next: (
            image_: Required<
              Pick<
                Image & {
                  catAdId: number;
                },
                'catAdId' | '_csrf' | 'filename' | 'url'
              >
            >
          ) =>
            image_ &&
            this.update(
              image_,
              'Icone excluido com sucesso.',
              this.$deleteIcon
            ),
        }));
    }
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
      const image = body as unknown as Required<
        Pick<
          Image & { catAdId: number },
          'catAdId' | '_csrf' | 'filename' | 'url'
        >
      >;
      this.update(image, 'Icone adicionado com sucesso.', subscription);
    }
  }

  private update(
    icon: Required<
      Pick<
        Image & { catAdId: number },
        'catAdId' | '_csrf' | 'filename' | 'url'
      >
    >,
    message: string,
    subscription: Subscription
  ): void {
    this.setIcon(icon);
    this.messageService.success(message, undefined, subscription, 2000);
  }

  private setIcon(
    icon: Required<
      Pick<
        Image & { catAdId: number },
        'catAdId' | '_csrf' | 'filename' | 'url'
      >
    >
  ): void {
    this.imageCategoryService.setIcon = icon;
  }
}
