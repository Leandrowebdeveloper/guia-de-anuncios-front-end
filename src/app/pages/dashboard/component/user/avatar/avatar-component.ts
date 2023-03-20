import { HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  AlertController,
  ActionSheetController,
  Platform,
} from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User, HttpResponse, Image } from 'src/app/interface';
import { MessageService } from 'src/app/utilities/message/message.service';
import { ToastService } from 'src/app/utilities/toast/toast.service';
import { AvatarService } from './service/image.service';

@Component({
  selector: 'app-avatar-component',
  templateUrl: './avatar-component.html',
  styleUrls: ['./avatar-component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() user!: Required<Pick<User, 'id' | 'image' | '_csrf' | 'blockade'>>;
  public btnPlatform: boolean;
  public isMobile: boolean;
  private upload: Subscription;
  private $delete: Subscription;

  constructor(
    private avatarService: AvatarService,
    private alertController: AlertController,
    private plt: Platform,
    private toastService: ToastService,
    private actionSheetController: ActionSheetController,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.plt.ready().then(() => this.togglePLatform());
  }

  public async action(
    user: Required<Pick<User, 'image' | '_csrf'>>,
    files: HTMLElement,
    file: HTMLElement
  ) {
    const { image } = user;
    // eslint-disable-next-line no-underscore-dangle
    image._csrf = user._csrf;
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
            handler: () =>
              this.isMobile ? this.selectImage(files, file) : files.click(),
          },
        ],
      });

      return await alert.present();
    }
    return this.isMobile ? this.selectImage(files, file) : file.click();
  }

  public async selectImage(
    files: HTMLElement,
    file: HTMLElement
  ): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: 'Selecionar fonte da imagem',
      buttons: [
        {
          text: 'Carregar da biblioteca',
          icon: 'images',
          handler: () => files.click(),
        },
        {
          text: 'Usar Camera',
          icon: 'camera',
          handler: () => file.click(),
        },
        {
          text: 'Cancelar',
          icon: 'close-circle',
          role: 'cancel',
          handler: () => actionSheet.dismiss(),
        },
      ],
    });
    await actionSheet.present();
  }

  public sendFile(
    input: HTMLInputElement,
    user: Pick<User, '_csrf' | 'id'>
  ): boolean {
    if (input.files.length === 0) {
      return false;
    }
    const loading = this.toastService.loading('Transferindo imagen', 'top');
    // eslint-disable-next-line no-underscore-dangle
    this.avatarService.setCsrf = user?._csrf;
    this.upload = this.avatarService
      .upload(this.build(input.files[0], user))
      .subscribe({
        next: (response: any) => this.success(response, response, loading),
        error: (error: HttpErrorResponse) =>
          this.messageService.error(error, null, this.upload),
      });
  }

  private async success(
    httpHeaderResponse: HttpHeaderResponse,
    httpResponse: HttpResponse,
    loading: Promise<HTMLIonToastElement>
  ): Promise<void> {
    if (httpHeaderResponse.ok && httpHeaderResponse.status === 200) {
      return this.complete(httpResponse, loading);
    }
  }

  private complete(
    httpResponse: HttpResponse,
    loading: Promise<HTMLIonToastElement>
  ): void {
    const { body } = httpResponse;
    if (body) {
      const image = body as unknown as Image;
      this.update(image, loading);
    }
  }

  private async update(image: Image, loading: Promise<HTMLIonToastElement>) {
    this.avatarService.setAuthAvatar(image);
    (await loading).dismiss();
    if (image) {
      this.upload.unsubscribe();
    }
  }

  private togglePLatform(): boolean {
    return (this.isMobile = this.plt.is('mobile'));
  }

  private build(
    file: File,
    user: Required<Pick<User, '_csrf' | 'id'>>
  ): FormData {
    const formData = new FormData();
    formData.append('userId', String(user?.id));
    // eslint-disable-next-line no-underscore-dangle
    formData.append('_csrf', user?._csrf);
    formData.append('filename', file, file?.name);
    return formData;
  }
}