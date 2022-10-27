import { HelpsService } from 'src/app/services/helps/helps.service';
import { PhotoService } from '../services/photo/photo.service';
import { AvatarService } from '../services/avatar/image.service';
import { HttpResponse, Image, LocalFile, User } from 'src/app/interface';
import { Component, Input, OnInit } from '@angular/core';

import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/utilities/message/message.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-galery-component',
  templateUrl: './galery-component.html',
  styleUrls: ['./galery-component.scss'],
})
export class UserGaleryComponent implements OnInit {
  @Input() user!: User;
  public spinner: number;
  public images: LocalFile[] = [];

  public avatar: Image;
  private upload: Subscription;
  private destroy: Subscription;

  private icon = './../../../assets/avatar.svg';

  constructor(
    private photoService: PhotoService,
    private authService: AuthService,
    private AvatarService: AvatarService,
    private helpsService: HelpsService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loadFiles();
  }

  public loadFiles(): void {
    this.photoService.loadFiles();
    this.setImages();
    this.isAvatar();
  }

  public emptyImage(): void {
    this.user.image.url = null;
    this.user.image.filename = null;
  }

  public async startUpload(file: LocalFile, index: any): Promise<void> {
    this.startLoading(index);
    const response = await fetch(file?.data);
    const blob = await response.blob();
    const formData = this.buildDataForm(blob, file);
    this.uploadData(formData);
  }

  public async deleteImage(
    file: LocalFile,
    index: number
  ): Promise<void | Subscription> {
    this.images.splice(index, 1);
    return await this.photoService.deleteFile(file);
  }

  public async uploadData(formData: FormData): Promise<Subscription> {
    // eslint-disable-next-line no-underscore-dangle
    this.authService.setCsrf = this.getcsrf();
    return this.sendFile(formData);
  }

  public destroyAvatar(): Subscription {
    return (this.destroy = this.AvatarService
      // eslint-disable-next-line no-underscore-dangle
      .avatarUserDestroy(this.avatar)
      .subscribe(
        () => {
          this.emptyImage();
          this.isAvatar();
        },
        (error) => this.messageService.error(error, null, this.destroy),
        () => this.helpsService.delay(() => this.destroy.unsubscribe(), 1500)
      ));
  }

  public async selectImage() {
    return this.photoService.selectImage().then((res: boolean) => {
      if (res) {
        this.setImages();
      }
    });
  }

  private setImages() {
    this.images = PhotoService.images;
  }

  private startLoading(index: any) {
    this.spinner = index;
  }

  private stopLoading() {
    this.spinner = null;
  }

  private buildDataForm(blob: Blob, file: LocalFile): FormData {
    const formData = new FormData();
    formData.append('slug', this.getSlug());
    // eslint-disable-next-line no-underscore-dangle
    formData.append('_csrf', this.getcsrf());
    formData.append('filename', blob, file?.name);
    return formData;
  }

  private sendFile(
    formData: FormData
  ): Subscription | PromiseLike<Subscription> {
    if (this.photoService.isPageUser()) {
      return (this.upload = this.authService
        .upload('upload', formData)
        .subscribe(
          (response: any) => this.success(response, response, this.upload),
          (error: HttpErrorResponse) =>
            this.messageService.error(error, null, this.upload)
        ));
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
      const image = body as unknown as Image;
      this.update(image, subscription);
    }
  }

  private update(avatar: Image, subscription: Subscription): void {
    this.helpsService.delay(() => {
      this.setAvatar(avatar);
      this.stopLoading();
      this.isAvatar();
      this.authService.avatar = this.user?.image;
    }, 2500);
    this.messageService.success(
      'Imagem alterada com sucesso.',
      null,
      subscription,
      3000
    );
  }

  private setAvatar(avatar: Image): void {
    const { filename, url } = this.AvatarService.setAuthAvatar(avatar);
    this.user.image.filename = filename;
    this.user.image.url = url;
  }

  private getcsrf(): string {
    // eslint-disable-next-line no-underscore-dangle
    return this.user?._csrf;
  }

  private getSlug(): string {
    // eslint-disable-next-line no-underscore-dangle
    return this.user?.slug;
  }

  private isAvatar(): void {
    if (this.user) {
      this.avatar = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        userId: this.user?.image?.userId,
        filename: this.user?.image?.filename || null,
        url: this.user?.image?.url || this.icon,
        // eslint-disable-next-line no-underscore-dangle
        _csrf: this.user._csrf,
      };
    }
  }
}
