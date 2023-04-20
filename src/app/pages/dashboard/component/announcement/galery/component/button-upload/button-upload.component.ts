import { MessageService } from 'src/app/utilities/message/message.service';
import { Subscription } from 'rxjs';
import {
  Announcement,
  DataUpload,
  Galery,
  HttpResponse,
} from 'src/app/interface';
import { HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { Component, Input } from '@angular/core';
import { ToastService } from 'src/app/utilities/toast/toast.service';
import { GaleryAnnouncementService } from '../../service/galery.service';
import { PresentPlanComponent } from 'src/app/components/present-plan/present-plan.component';
import { ModalService } from 'src/app/components/present-plan/animations/modal.service';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-galery-button-upload',
  templateUrl: './button-upload.component.html',
  styleUrls: ['./button-upload.component.scss'],
})
export class GaleryButtonUploadComponent {
  @Input() announcement!: Pick<Announcement, '_csrf' | 'id' | 'plan'>;
  public isMobile!: boolean;

  private $upload!: Subscription;

  constructor(
    private galeryAnnouncementService: GaleryAnnouncementService,
    private messageService: MessageService,
    private toastService: ToastService,
    private modalController: ModalController,
    private modalService: ModalService,
    private imageService: ImageService
  ) {}

  public async loadFile(): Promise<void> {
    if (this.announcement && this.announcement.plan?.type === 'free') {
      const modal = await this.modalController.create({
        component: PresentPlanComponent,
        cssClass: 'modal-wrapper',
        componentProps: {
          announcement: this.announcement,
        },
        enterAnimation: this.modalService.enterAnimation,
        leaveAnimation: this.modalService.leaveAnimation,
      });
      return await modal.present();
    }
    return await this.startPhoto();
  }

  private async startPhoto(): Promise<void> {
    const photo = await this.imageService.addPhoto();
    if (photo) {
      const dataFile = await this.imageService.readAsBase64(photo);
      await this.upload(dataFile);
    }
  }

  public async upload(dataFile: {
    file: Blob;
    fileName: string;
  }): Promise<void> {
    const data = {
      id: this.announcement?.id,
      _csrf: this.announcement?._csrf,
    } as Required<DataUpload>;

    const loading = await this.toastService.loading(
      'Transferindo imagem',
      'top',
      'images'
    );
    this.$upload = this.galeryAnnouncementService
      .sendFiles(dataFile, data)
      .subscribe({
        next: (response: any) => this.success(response, response, loading),
        error: (error: HttpErrorResponse) => {
          loading.dismiss();
          this.messageService.error(error, undefined, this.$upload);
        },
      });
  }

  private async success(
    httpHeaderResponse: HttpHeaderResponse,
    httpResponse: HttpResponse,
    loading: HTMLIonToastElement
  ) {
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
      const image = body as unknown as Galery;
      this.update(image, loading);
    }
  }

  private async update(
    image: Galery,
    loading: HTMLIonToastElement
  ): Promise<void> {
    this.galeryAnnouncementService.setGalery = image;
    loading.dismiss();
    if (image) {
      this.$upload.unsubscribe();
    }
  }
}
