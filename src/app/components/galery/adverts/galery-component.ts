import {
  createAnimation,
  IonAccordion,
  IonAccordionGroup,
  IonFab,
  ItemReorderEventDetail,
} from '@ionic/angular';
import { AuthAdvertService } from 'src/app/pages/dashboard/auth/pages/advert/service/advert.service';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { PhotoService } from '../services/photo/photo.service';
import { Galery, HttpResponse, LocalFile } from 'src/app/interface';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/utilities/message/message.service';
import { GaleryService } from '../services/galery/galery.service';

@Component({
  selector: 'app-galery-component',
  templateUrl: 'galery-component.html',
  styleUrls: ['galery-component.scss'],
})
export class AdvertGaleryComponent implements OnInit {
  @ViewChild(IonAccordionGroup, { static: true })
  accordionGroup: IonAccordionGroup;
  @Input()
  galery!: Galery[];
  public spinner: number;
  public imagesStorage: LocalFile[] = [];

  public image: Galery;
  public isButton: boolean;
  public fade = false;
  public isOrder = false;
  private upload: Subscription;
  private destroy: Subscription;
  private accordion: Subscription;
  private $order: Subscription;

  constructor(
    private photoService: PhotoService,
    private authAdvertService: AuthAdvertService,
    private galeryService: GaleryService,
    private helpsService: HelpsService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loadFiles();
  }

  ionViewDidEnter() {
    this.animateList('ion-reorder ion-item');
    this.animateList('.item-local');
  }

  public loadFiles(): void {
    this.photoService.loadFiles();
    this.setImages();
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
    this.imagesStorage.splice(index, 1);
    return await this.photoService.deleteFile(file);
  }

  public async uploadData(formData: FormData): Promise<Subscription> {
    // eslint-disable-next-line no-underscore-dangle
    this.authAdvertService.setCsrf = this.getcsrf();
    return this.sendFile(formData);
  }

  public destroyGalery(galery: Galery, index: number): Subscription {
    // eslint-disable-next-line no-underscore-dangle
    galery._csrf = this.getcsrf();
    return (this.destroy = this.galeryService
      // eslint-disable-next-line no-underscore-dangle
      .galeryDestroy(galery)
      .subscribe(
        (galery_: Galery) => {
          this.authAdvertService.deleteItemGalery(index);
          this.messageService.success(
            galery_.message,
            null,
            this.destroy,
            1000
          );
        },
        (error) => this.messageService.error(error, null, this.destroy),
        () => this.helpsService.delay(() => this.destroy.unsubscribe(), 1500)
      ));
  }

  public async selectImage(): Promise<void> {
    return this.photoService.selectImage().then((res: boolean) => {
      if (res) {
        this.setImages();
      }
    });
  }

  public onOff(): void {
    this.accordion = this.accordionGroup.ionChange.subscribe(
      (e: CustomEvent) => {
        if (e.detail.value === 'second') {
          this.animateList('ion-reorder ion-item');
          this.animateList('.item-local');
          this.isButton = true;
        } else {
          this.animateList('ion-reorder ion-item');
          this.animateList('.item-local');
          this.isButton = false;
        }
        setTimeout(() => this.accordion.unsubscribe(), 350);
        return;
      }
    );
  }

  public toggleAccordion() {
    const nativeEl = this.accordionGroup;
    nativeEl.value = 'second';
    this.isButton = true;
    this.isOrder = false;
  }

  public doReorder(ev: any): void {
    if (ev) {
      this.galery = ev.detail.complete(this.galery);
    }
  }

  public saveOrder(): void {
    const loading = this.authAdvertService.showLoading('Ordenar galeria...');
    const result: number[] = this.galery.map((item: Galery) => item.id);
    if (result.length > 0) {
      const galery: Galery = {
        order: result,
        advertId: this.getId(),
        // eslint-disable-next-line no-underscore-dangle
        _csrf: this.getcsrf(),
      };
      this.$order = this.authAdvertService.order(galery).subscribe(
        (galery_: Galery) => {
          setTimeout(() => {
            this.isOrder = false;
            this.galery = galery_ as unknown as Galery[];
          }, 3500);
          this.authAdvertService.message(
            'Galeria ordenada com sucesso.',
            loading,
            this.$order
          );
        },
        (error: HttpErrorResponse) =>
          this.authAdvertService.error(error, loading, this.$order)
      );
    }
  }

  public orderList(): void {
    this.isOrder = !this.isOrder;
  }

  private setImages(): void {
    this.imagesStorage = PhotoService.images;
  }

  private startLoading(index: any): void {
    this.spinner = index;
  }

  private stopLoading(): void {
    this.spinner = null;
  }

  private buildDataForm(blob: Blob, file: LocalFile): FormData {
    const formData = new FormData();
    formData.append('advertId', String(this.getId()));
    // eslint-disable-next-line no-underscore-dangle
    formData.append('_csrf', this.getcsrf());
    formData.append('filename', blob, file?.name);
    return formData;
  }

  private sendFile(
    formData: FormData
  ): Subscription | PromiseLike<Subscription> {
    return (this.upload = this.authAdvertService
      .upload('upload', formData)
      .subscribe(
        (response: any) => this.success(response, response, this.upload),
        (error: HttpErrorResponse) =>
          this.messageService.error(error, null, this.upload)
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
      const image = body as unknown as Galery;
      this.update(image, subscription);
    }
  }

  private update(image: Galery, subscription: Subscription): void {
    this.helpsService.delay(() => {
      this.stopLoading();
      setTimeout(() => (this.fade = !this.fade), 50);
      this.authAdvertService.setItemGalery = image;
    }, 2500);
    this.showFirstAccordion();
    this.showMessage(subscription);
  }

  private showMessage(subscription: Subscription): Promise<number> {
    return this.messageService.success(
      'Imagem adicionada com sucesso.',
      null,
      subscription,
      3000
    );
  }

  private showFirstAccordion(): void {
    setTimeout(() => {
      const nativeEl = this.accordionGroup;
      nativeEl.value = 'first';
      this.isButton = false;
    }, 2000);
  }

  private getcsrf(): string {
    // eslint-disable-next-line no-underscore-dangle
    return this.authAdvertService.getAdvert._csrf;
  }

  private getId(): number {
    // eslint-disable-next-line no-underscore-dangle
    return this.authAdvertService.getAdvert.id;
  }

  private animateList(selector, duration = 500, delayBetweenItems = 320): void {
    const animationArray: Animation[] = [];
    const elemArray = document.querySelectorAll(selector);
    for (let i = 0; i <= elemArray.length; i++) {
      // console.log('aqui: ', elemArray[i]);
      const animation: any = createAnimation('')
        .addElement(elemArray[i])
        .easing('cubic-bezier(0, 0.55, 0.45, 1)')
        .duration(duration)
        .delay(i * delayBetweenItems)
        .fromTo('opacity', '0', '1')
        .fromTo('width', '0', '100%');
      animationArray.push(animation);
    }
    animationArray.forEach((animation_: Animation) => {
      animation_.play();
    });
  }
}
