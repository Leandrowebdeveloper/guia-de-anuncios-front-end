import { Address } from 'src/app/interface/index';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { AddressService } from '../service/address.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class AnnouncementFormAddressComponent implements OnInit {
  @Input() address!: Required<Address>;
  @Input() label!: string;

  public attrButton: AttrButton = {
    route: '/address',
    icon: 'cloud-upload',
    label: 'Salvar',
    fill: false,
    aria: 'Salvar endereço.',
    title: 'Salvar endereço.',
  };

  public config: object;
  private form: FormGroup;
  private $address: Subscription;
  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    public messageService: MessageService,
    private addressService: AddressService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  public importForm(event: FormGroup): FormGroup {
    return (this.form = event);
  }

  public onSubmit(event: FormGroup) {
    return this.addresses(event);
  }

  private addresses(event: FormGroup): Subscription {
    let message: string;
    if (this.address?.id) {
      event.value.id = this.address?.id;
      message = 'Editando endereço...';
    } else {
      event.value.announcementId = this.address?.announcementId;
      message = 'Cadastrando endereço...';
    }
    const loading = this.loadingService.show(message);
    return this.send(event, loading);
  }

  private send(
    event: FormGroup,
    loading: Promise<HTMLIonLoadingElement>
  ): Subscription {
    return (this.$address = this.addressService.address(event.value).subscribe({
      next: (address: Pick<Address, 'message'>) =>
        this.messsage(address?.message, loading),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.$address),
    }));
  }

  private async messsage(
    message: string,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return await this.messageService.success(message, loading, this.$address);
  }

  private getData(): void {
    this.config = { ...this.address };
  }
}
