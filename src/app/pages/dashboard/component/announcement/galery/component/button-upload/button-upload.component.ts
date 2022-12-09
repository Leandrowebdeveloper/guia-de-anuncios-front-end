import { MessageService } from 'src/app/utilities/message/message.service';
import { Subscription } from 'rxjs';
import { DataUpload, Galery, HttpResponse, Plan } from 'src/app/interface';
import { HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import {
  ActionSheetController,
  ModalController,
  Platform,
} from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from 'src/app/utilities/toast/toast.service';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';
import { GaleryAnnouncementService } from '../../service/galery.service';
import { PresentPlanComponent } from 'src/app/components/present-plan/present-plan.component';
import { ModalService } from 'src/app/components/present-plan/animations/modal.service';

@Component({
  selector: 'app-galery-button-upload',
  templateUrl: './button-upload.component.html',
  styleUrls: ['./button-upload.component.scss'],
})
export class GaleryButtonUploadComponent implements OnInit {
  @Input() data!: DataUpload;
  @Input() plan!: Plan;
  public isMobile: boolean;

  private upload: Subscription;

  constructor(
    private plt: Platform,
    private actionSheetController: ActionSheetController,
    private galeryAnnouncementService: GaleryAnnouncementService,
    private messageService: MessageService,
    private managementService: ManagementAnnouncementService,
    private toastService: ToastService,
    private modalController: ModalController,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.plt.ready().then(() => this.togglePLatform());
  }

  public async loadFile(file: HTMLElement) {
    if (this.plan?.type === 'free') {
      const modal = await this.modalController.create({
        component: PresentPlanComponent,
        enterAnimation: this.modalService.enterAnimation,
        leaveAnimation: this.modalService.leaveAnimation,
      });
      return await modal.present();
    }
    file.click();
  }

  public sendFile(input: HTMLInputElement) {
    if (input.files.length === 0) {
      return false;
    }
    const loading = this.toastService.loading('Transferindo imagen', 'top');
    this.setCsrf();
    const count = input.files.length;
    for (let i = 0; i < count; i++) {
      this.upload = this.galeryAnnouncementService
        .upload(this.build(input.files[i]), 'upload')
        .subscribe(
          (response: any) => this.success(response, response, loading),
          (error: HttpErrorResponse) =>
            this.messageService.error(error, null, undefined)
        );
    }
  }

  public async selectImage(file: HTMLElement, files: HTMLElement) {
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

  private async success(
    httpHeaderResponse: HttpHeaderResponse,
    httpResponse: HttpResponse,
    loading: Promise<HTMLIonToastElement>
  ) {
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
      const image = body as unknown as Galery;
      this.update(image, loading);
    }
  }

  private async update(image: Galery, loading: Promise<HTMLIonToastElement>) {
    this.managementService.addItemGalery = image;
    (await loading).dismiss();
    if (image) {
      this.upload.unsubscribe();
    }
  }

  private togglePLatform(): boolean {
    return (this.isMobile = this.plt.is('mobile'));
  }

  private build(file: File): FormData {
    const formData = new FormData();
    formData.append('announcementId', String(this.data?.id));
    // eslint-disable-next-line no-underscore-dangle
    formData.append('_csrf', this.data?._csrf);
    formData.append('filename', file, file?.name);
    return formData;
  }

  private setCsrf() {
    // eslint-disable-next-line no-underscore-dangle
    this.galeryAnnouncementService.setCsrf = this.data._csrf;
  }
}
