import {
  Address,
  Citie,
  Contact,
  SocialNetwork,
  Category,
  Advert,
  Coordinate,
  CategoryAdvert,
} from 'src/app/interface/index';
import { AlertService } from 'src/app//utilities/alert/alert.service';
import { FormComponent } from './form/form.component';
import { ModalController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthAdvertService } from './service/advert.service';
import { AdvertGaleryComponent } from 'src/app/components/galery/adverts/galery-component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HomeService } from 'src/app/pages/public/home/services/home.service';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.page.html',
  styleUrls: ['./advert.page.scss'],
})
export class AdvertPage implements OnInit {
  public advert$: Observable<Advert>;
  public category$: Observable<Category[]>;
  private form: FormGroup;
  private write: Subscription;

  constructor(
    private fb: FormBuilder,
    private authAdvertService: AuthAdvertService,
    private authService: AuthService,
    private modalController: ModalController,
    private alertService: AlertService,
    private categoryService: HomeService
  ) {}

  ngOnInit() {
    this.getAdvert();
    this.getCategory();
  }

  public selectCategory(e: any, categoryAdvert: CategoryAdvert): Subscription {
    this.form = this.fb.group({
      id: categoryAdvert?.id || undefined,
      advertId: this.authAdvertService.getAdvert.id,
      catAdId: e.detail.value,
      _csrf: this.authService.getCsrf,
    });
    const message: string = categoryAdvert?.id
      ? 'Editando categoria...'
      : 'Cadastrando categoria...';
    const loading = this.authAdvertService.showLoading(message);
    return (this.write = this.authAdvertService
      .category(this.form.value)
      .subscribe(
        (categoryAdvert_: CategoryAdvert) =>
          this.authAdvertService.message(
            categoryAdvert_?.message,
            loading,
            this.write,
            2000
          ),
        (error: HttpErrorResponse) =>
          this.authAdvertService.error(error, null, this.write)
      ));
  }

  public async selectImages(advert: Advert): Promise<void> {
    const { galery } = advert;
    const modal = await this.modalController.create({
      component: AdvertGaleryComponent,
      componentProps: {
        galery,
      },
    });
    return await modal.present();
  }

  //State
  public state(advert: Advert): Subscription {
    const { id, _csrf } = advert;
    this.form = this.fb.group({ id, _csrf });
    return (this.write = this.authAdvertService
      .state(this.form.value)
      .subscribe(
        (advert_: Advert) =>
          this.authAdvertService.message(
            advert_.message,
            null,
            this.write,
            350
          ),
        (error: HttpErrorResponse) =>
          this.authAdvertService.error(error, null, this.write)
      ));
  }

  //update advert
  public async updateAdvert(advert: Advert): Promise<void> {
    const { _csrf, title, description, id } = advert;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'updateAdvert',
        label: 'Editar anúncio',
        advert: { _csrf, title, description, id },
      },
    });
    return await modal.present();
  }

  //Create advert
  public async createAdvert(): Promise<void> {
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'createAdvert',
        label: 'Cadastrar anúncio',
        advert: {
          _csrf: this.authService.getCsrf,
          title: null,
          description: null,
        },
      },
    });
    return await modal.present();
  }

  // address
  public async address(advert: Advert): Promise<void> {
    let address: Address;
    let label: string;
    if (advert?.address) {
      address = advert.address;
      // eslint-disable-next-line no-underscore-dangle
      address._csrf = this.authService.getCsrf;
      label = 'Editar endereço';
    } else {
      address = {
        _csrf: this.authService.getCsrf,
        allotment: null,
        block: null,
        complement: null,
        district: null,
        street: null,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        zip_code: null,
      };
      label = 'Cadastrar endereço';
    }

    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'address',
        label,
        address,
      },
    });
    return await modal.present();
  }

  // Cidade
  public async cities(advert: Advert): Promise<void> {
    let citie: Citie;
    let label: string;
    if (advert?.citie) {
      citie = advert.citie;
      // eslint-disable-next-line no-underscore-dangle
      citie._csrf = this.authService.getCsrf;
      label = 'Editar cidade';
    } else {
      citie = {
        _csrf: this.authService.getCsrf,
        city: null,
        uf: null,
      };
      label = 'Cadastrar cidade';
    }

    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'citie',
        label,
        citie,
      },
    });
    return await modal.present();
  }

  // Contato
  public async contacts(advert: Advert): Promise<void> {
    let contact: Contact;
    let label: string;
    if (advert?.contact) {
      contact = advert.contact;
      // eslint-disable-next-line no-underscore-dangle
      contact._csrf = this.authService.getCsrf;
      label = 'Editar contatos';
    } else {
      contact = {
        _csrf: this.authService.getCsrf,
        mobilePhone: null,
        phone: null,
        whatsapp: null,
      };
      label = 'Cadastrar contatos';
    }

    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'contact',
        label,
        contact,
      },
    });
    return await modal.present();
  }

  // Rede social
  public async socialNetwork(advert: Advert): Promise<void> {
    let socialNetwork: SocialNetwork;
    let label: string;
    if (advert?.socialNetwork) {
      socialNetwork = advert.socialNetwork;
      // eslint-disable-next-line no-underscore-dangle
      socialNetwork._csrf = this.authService.getCsrf;
      label = 'Editar rede social';
    } else {
      socialNetwork = {
        _csrf: this.authService.getCsrf,
        facebook: null,
        instagran: null,
      };
      label = 'Cadastrar rede social';
    }

    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'socialNetwork',
        label,
        socialNetwork,
      },
    });
    return await modal.present();
  }

  // Coordenadas
  public async coordinates(advert: Advert): Promise<Subscription> {
    const position = await this.getCoordinate();
    if (position instanceof GeolocationPosition) {
      return this.addCoordinate(advert, position);
    } else if (position instanceof GeolocationPositionError) {
      this.showError(position);
    } else {
      this.alertService.alert('Ateção', position.message);
    }
  }

  private addCoordinate(
    advert: Advert,
    position: GeolocationPosition
  ): Subscription {
    const message: string = advert.coordinate?.advertId
      ? 'Editando mapa...'
      : 'Cadastrando mapa...';
    const loading = this.authAdvertService.showLoading(message);
    this.form = this.fb.group({
      advertId: advert?.coordinate?.advertId,
      latitude: String(position.coords.latitude),
      longitude: String(position.coords.longitude),
      _csrf: this.authService.getCsrf,
    });
    return (this.write = this.authAdvertService
      .coordinate(this.form.value)
      .subscribe(
        (coordinate_: Coordinate) =>
          this.authAdvertService.message(
            coordinate_.message,
            loading,
            this.write,
            2000
          ),
        (error: HttpErrorResponse) =>
          this.authAdvertService.error(error, null, this.write)
      ));
  }

  private async getCoordinate(): Promise<
    GeolocationPosition | GeolocationPositionError | Error
  > {
    return await new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => resolve(position),
          (error: GeolocationPositionError) => reject(error)
        );
      } else {
        reject(
          new Error('A geolocalização não é suportada por este navegador.')
        );
      }
    });
  }

  private async showError(error: GeolocationPositionError): Promise<void> {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.alertService.alert(
          'Ateção',
          'O usuário negou a solicitação de geolocalização.'
        );
        break;
      case error.POSITION_UNAVAILABLE:
        this.alertService.alert(
          'Ateção',
          'As informações de localização não estão disponíveis.'
        );
        break;
      case error.TIMEOUT:
        this.alertService.alert(
          'Ateção',
          'A solicitação para obter a localização do usuário expirou.'
        );
        break;
      default:
        this.alertService.alert('Ateção', 'Ocorreu um erro desconhecido.');
        break;
    }
  }

  private getCategory(): void {
    this.category$ = this.categoryService.asObservable();
  }

  private getAdvert(): void {
    this.advert$ = this.authAdvertService.advertObservable;
  }
}
