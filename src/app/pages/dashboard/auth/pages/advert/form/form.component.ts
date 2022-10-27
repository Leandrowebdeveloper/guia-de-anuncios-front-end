import { AuthAdvertService } from 'src/app/pages/dashboard/auth/pages/advert/service/advert.service';
import {
  Advert,
  Address,
  Citie,
  Contact,
  SocialNetwork,
} from 'src/app/interface/index';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { AdvertUtilities } from 'src/app/utilities/advert/advert-utilities.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() advert!: Advert;
  @Input() address!: Address;
  @Input() citie!: Citie;
  @Input() contact!: Citie;
  @Input() socialNetwork!: SocialNetwork;
  @Input() action!: string;
  @Input() label!: string;

  public attrButtonPage: AttrButton[];
  public attrButton: AttrButton;

  public config: object;
  private form: FormGroup;
  private write: Subscription;
  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    private authAdvertService: AuthAdvertService,
    private advertUtilities: AdvertUtilities
  ) {}

  ngOnInit(): void {
    this.getData();
    this.setButton();
  }

  public importForm(event: FormGroup): FormGroup {
    return (this.form = event);
  }

  public onSubmit(event: FormGroup): Subscription {
    switch (this.action) {
      case 'socialNetwork':
        return this.socialNetworks(event);
      case 'contact':
        return this.contacts(event);
      case 'citie':
        return this.cities(event);
      case 'updateAdvert':
        return this.updateAdvert(event);
      case 'address':
        return this.addresses(event);
      case 'createAdvert':
        return this.createAdvert(event);
    }
  }

  // Create Advert
  private createAdvert(event: FormGroup): Subscription {
    const loading = this.authAdvertService.showLoading('Criando anúncio...');
    return (this.write = this.authAdvertService
      .createAdvert(event.value)
      .subscribe(
        (advert: Advert) => this.messsage(advert.message, loading),
        (error: HttpErrorResponse) =>
          this.authAdvertService.error(error, loading, this.write)
      ));
  }

  // Update Advert
  private updateAdvert(event: FormGroup): Subscription {
    const loading = this.authAdvertService.showLoading('Alterando anúncio...');
    return (this.write = this.authAdvertService
      .updateAdvert(event.value)
      .subscribe(
        (advert: Advert) => this.messsage(advert.message, loading),
        (error: HttpErrorResponse) =>
          this.authAdvertService.error(error, loading, this.write)
      ));
  }

  private addresses(event: FormGroup): Subscription {
    let message: string;
    if (this.address?.advertId) {
      event.value.advertId = this.address?.advertId;
      message = 'Editando endereço...';
    } else {
      message = 'Cadastrando endereço...';
    }
    const loading = this.authAdvertService.showLoading(message);
    return (this.write = this.authAdvertService.address(event.value).subscribe(
      (address: Address) => this.messsage(address.message, loading),
      (error: HttpErrorResponse) =>
        this.authAdvertService.error(error, loading, this.write)
    ));
  }

  private isCity(value: string) {
    const type = [
      'São Luiz dos Montes Belos',
      'Firminópolis',
      'Aurilândia',
      'Sanclerlândia',
      'Turvânia',
      'Córrego do Ouro',
    ];
    return !type.includes(value);
  }

  private cities(event: FormGroup): Subscription {
    let message: string;
    if (this.isCity(event.value.city)) {
      return;
    }
    if (this.citie?.advertId) {
      event.value.advertId = this.citie?.advertId;
      message = 'Editando cidade...';
    } else {
      message = 'Cadastrando cidade...';
    }
    const loading = this.authAdvertService.showLoading(message);
    return (this.write = this.authAdvertService.citie(event.value).subscribe(
      (citie: Citie) => this.messsage(citie.message, loading),
      (error: HttpErrorResponse) =>
        this.authAdvertService.error(error, loading, this.write)
    ));
  }

  private contacts(event: FormGroup): Subscription {
    let message: string;
    if (this.contact?.advertId) {
      event.value.advertId = this.contact?.advertId;
      message = 'Editando contatos...';
    } else {
      message = 'Cadastrando contatos...';
    }
    const loading = this.authAdvertService.showLoading(message);
    return (this.write = this.authAdvertService.contact(event.value).subscribe(
      (contact: Contact) => this.messsage(contact.message, loading),
      (error: HttpErrorResponse) =>
        this.authAdvertService.error(error, loading, this.write)
    ));
  }

  private socialNetworks(event: FormGroup): Subscription {
    let message: string;
    if (this.socialNetwork?.advertId) {
      event.value.advertId = this.socialNetwork?.advertId;
      message = 'Editando rede social...';
    } else {
      message = 'Cadastrando rede social...';
    }
    const loading = this.authAdvertService.showLoading(message);
    return (this.write = this.authAdvertService
      .socialNetwork(event.value)
      .subscribe(
        (socialNetwork: SocialNetwork) =>
          this.messsage(socialNetwork.message, loading),
        (error: HttpErrorResponse) =>
          this.authAdvertService.error(error, loading, this.write)
      ));
  }

  private messsage(
    message: string,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.authAdvertService.message(message, loading, this.write);
  }

  private setButton(): void {
    this.attrButton = this.advertUtilities.setButton(this.action);
  }

  private getData(): void {
    if (this.advert) {
      this.config = { ...this.advert };
    }
    if (this.address) {
      this.config = { ...this.address };
    }
    if (this.citie) {
      this.config = { ...this.citie };
    }
    if (this.contact) {
      this.config = { ...this.contact };
    }
    if (this.socialNetwork) {
      this.config = { ...this.socialNetwork };
    }
  }
}
