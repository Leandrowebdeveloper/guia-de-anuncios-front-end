import { HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User, HttpResponse, Image } from 'src/app/interface';
import { MessageService } from 'src/app/utilities/message/message.service';
import { ToastService } from 'src/app/utilities/toast/toast.service';
import { AvatarService } from './service/image.service';
import { ImageService } from 'src/app/services/image/image.service';
import { Photo } from '@capacitor/camera';

@Component({
  selector: 'app-avatar-component',
  templateUrl: './avatar-component.html',
  styleUrls: ['./avatar-component.scss'],
})
export class AvatarComponent {
  @Input() user!: Pick<User, 'id' | 'image' | '_csrf' | 'blockade'> | void;
  public btnPlatform!: boolean;
  public isMobile!: boolean;
  private $upload!: Subscription;
  private $delete!: Subscription;

  constructor(
    private avatarService: AvatarService,
    private alertController: AlertController,
    private toastService: ToastService,
    private messageService: MessageService,
    private imageService: ImageService
  ) {}

  public async action(user: Pick<User, 'image' | '_csrf'>) {
    const { image } = user;
    if (image && user._csrf) {
      image._csrf = user._csrf;
    }
    if (image?.filename) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'Você pretende excluir está foto ou substituir?',
        buttons: [
          {
            text: 'excluir',
            handler: () =>
              (this.$delete = this.avatarService
                .delete(image)
                .subscribe(() =>
                  setTimeout(() => this.$delete.unsubscribe(), 2000)
                )),
          },
          {
            text: 'substituir',
            handler: async () => await this.startPhoto(),
          },
        ],
      });

      return await alert.present();
    }
    return await this.startPhoto();
  }

  private async startPhoto(): Promise<void> {
    const photo = await this.imageService.addPhoto();
    if (photo) {
      const dataFile = await this.imageService.readAsBase64(photo);
      this.upload(dataFile);
    }
  }

  public async upload(file: { file: Blob; fileName: string }): Promise<void> {
    if (this.user) {
      const loading = await this.toastService.loading(
        'Transferindo imagen',
        'top'
      );
      this.avatarService.setCsrf = this.user?._csrf;
      this.$upload = this.avatarService
        .upload(this.build(file, this.user))
        .subscribe({
          next: (response: any) => this.success(response, response, loading),
          error: (error: HttpErrorResponse) => {
            loading.dismiss();
            this.messageService.error(error, undefined, undefined);
          },
        });
    }
  }

  private async success(
    httpHeaderResponse: HttpHeaderResponse,
    httpResponse: HttpResponse,
    loading: HTMLIonToastElement
  ): Promise<void> {
    if (httpHeaderResponse.ok && httpHeaderResponse.status === 200) {
      return this.complete(httpResponse, loading);
    }
  }

  private complete(
    httpResponse: HttpResponse,
    loading: HTMLIonToastElement
  ): void {
    const { body } = httpResponse;
    if (body) {
      const image = body as unknown as Image;
      this.update(image, loading);
    }
  }

  private update(image: Image, loading: HTMLIonToastElement) {
    this.avatarService.setAuthAvatar(image);
    loading.dismiss();
    if (image) {
      this.$upload.unsubscribe();
    }
  }

  private build(
    data: { file: Blob; fileName: string },
    user: Pick<User, '_csrf' | 'id'>
  ): FormData {
    const { file, fileName } = data;
    const formData = new FormData();
    formData.append('userId', String(user?.id));
    formData.append('_csrf', user?._csrf);
    formData.append('filename', file, fileName);
    return formData;
  }
}
