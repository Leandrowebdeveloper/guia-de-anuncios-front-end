import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { tap } from 'rxjs/operators';
import { AlertService } from 'src/app//utilities/alert/alert.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Advert,
  Citie,
  Address,
  Coordinate,
  Contact,
  SocialNetwork,
  OpeningHour,
  Galery,
  Category,
  CategoryAdvert,
} from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthAdvertService extends HttpService<Advert> {
  private advert = new BehaviorSubject<Advert>(undefined);
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    public messageService: MessageService,
    private alertService: AlertService,
    private loadingService: LoadingService
  ) {
    super(http, storageService);
    this.setApi = `auth-advert`;
  }

  public get advertObservable(): Observable<Advert> {
    return this.advert.asObservable();
  }

  public get getAdvert(): Advert {
    return this.advert.value;
  }

  public get getGalery(): Galery[] {
    return this.advert.value.galery;
  }

  public set setAdvert(value: Advert) {
    this.advert.next(value);
  }

  public set setState(value: boolean) {
    this.advert.value.state = value;
    this.setAdvert = this.advert.value;
  }

  public set setOpeningHour(value: OpeningHour) {
    this.advert.value.openingHour = value;
    this.setAdvert = this.advert.value;
  }

  public set setItemGalery(value: Galery) {
    this.advert.value.galery.push(value);
    this.setAdvert = this.advert.value;
  }

  public set setGalery(value: Galery[]) {
    this.advert.value.galery = value;
    this.setAdvert = this.advert.value;
  }

  public set setCategory(value: CategoryAdvert) {
    this.advert.value.categoryAdvert = value;
    this.setAdvert = this.advert.value;
  }

  public set setBlockade(value: boolean) {
    this.advert.value.blockade = value;
    this.setAdvert = this.advert?.value;
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  public deleteItemGalery(i: number) {
    this.advert.value.galery.splice(i, 1);
    this.setAdvert = this.advert.value;
  }

  public async message(
    message: string,
    loading: Promise<HTMLIonLoadingElement>,
    subscribe?: Subscription,
    time?: number
  ): Promise<number> {
    return await this.messageService.success(message, loading, subscribe, time);
  }

  public async error(
    error: HttpErrorResponse,
    loading: Promise<HTMLIonLoadingElement>,
    subscribe: Subscription
  ) {
    if (error.status === 403) {
      this.setBlockade = error.error.blockade;
      return this.alertService.alert('Atenção', error.error.message);
    }
    return this.messageService.error(error, loading, subscribe);
  }

  public category(category: CategoryAdvert): Observable<CategoryAdvert> {
    if (category.id) {
      return this.patch(category, 'category').pipe(
        tap((category_: CategoryAdvert) => {
          this.setCategory = category_;
        })
      );
    } else {
      return this.create(category, 'category').pipe(
        tap((category_: CategoryAdvert) => {
          this.setCategory = category_;
        })
      );
    }
  }

  public state(advert: Advert): Observable<Advert | number[]> {
    return this.patch(advert, 'state').pipe(
      tap((advert_: Advert) => {
        this.setState = advert_?.state;
      })
    );
  }

  public updateAdvert(advert: Advert): Observable<Advert> {
    return this.patch(advert, 'advert').pipe(
      tap((advert_: Advert) => {
        this.advert.value.title = advert_?.title;
        this.advert.value.description = advert_?.description;
        this.advert.value.slug = advert_?.slug;
        this.advert.value.updatedAt = advert_?.updatedAt;
        this.setAdvert = this.advert.value;
      })
    );
  }

  public createAdvert(advert: Advert): Observable<Advert> {
    return this.create(advert, 'advert').pipe(
      tap((advert_: Advert) => (this.setAdvert = advert_))
    );
  }

  public address(address: Address): Observable<Address> {
    if (address?.advertId) {
      return this.patch(address, 'address').pipe(
        tap((address_: Address) => {
          this.advert.value.address = address_;
          this.setAdvert = this.advert.value;
        })
      );
    } else {
      return this.create(address, 'address').pipe(
        tap((address_: Address) => {
          this.advert.value.address = address_;
          this.setAdvert = this.advert.value;
        })
      );
    }
  }

  public citie(citie: Citie): Observable<Citie> {
    if (citie?.advertId) {
      return this.patch(citie, 'citie').pipe(
        tap((citie_: Citie) => {
          this.advert.value.citie = citie_;
          this.setAdvert = this.advert.value;
        })
      );
    } else {
      return this.create(citie, 'citie').pipe(
        tap((citie_: Citie) => {
          this.advert.value.citie = citie_;
          this.setAdvert = this.advert.value;
        })
      );
    }
  }

  public contact(contact: Contact): Observable<Contact> {
    if (contact.advertId) {
      return this.patch(contact, 'contact').pipe(
        tap((contact_: Contact) => {
          this.advert.value.contact = contact_;
          this.setAdvert = this.advert.value;
        })
      );
    } else {
      return this.create(contact, 'contact').pipe(
        tap((contact_: Contact) => {
          this.advert.value.contact = contact_;
          this.setAdvert = this.advert.value;
        })
      );
    }
  }

  public coordinate(coordinate: Coordinate): Observable<Coordinate> {
    if (coordinate?.advertId) {
      return this.patch(coordinate, 'coordinate').pipe(
        tap((coordinate_: Coordinate) => {
          this.advert.value.coordinate = coordinate_;
          this.setAdvert = this.advert.value;
        })
      );
    } else {
      return this.create(coordinate, 'coordinate').pipe(
        tap((coordinate_: Coordinate) => {
          this.advert.value.coordinate = coordinate_;
          this.setAdvert = this.advert.value;
        })
      );
    }
  }

  public socialNetwork(
    socialNetwork: SocialNetwork
  ): Observable<SocialNetwork> {
    if (socialNetwork?.advertId) {
      return this.patch(socialNetwork, 'socialNetwork').pipe(
        tap((socialNetwork_: SocialNetwork) => {
          this.advert.value.socialNetwork = socialNetwork_;
          this.setAdvert = this.advert.value;
        })
      );
    } else {
      return this.create(socialNetwork, 'socialNetwork').pipe(
        tap((socialNetwork_: SocialNetwork) => {
          this.advert.value.socialNetwork = socialNetwork_;
          this.setAdvert = this.advert.value;
        })
      );
    }
  }

  public openingHour(openingHour: OpeningHour): Observable<OpeningHour> {
    if (openingHour?.advertId) {
      return this.patch(openingHour, 'openingHour').pipe(
        tap((openingHour_: OpeningHour) => {
          this.advert.value.openingHour = openingHour_;
          this.setAdvert = this.advert.value;
        })
      );
    } else {
      return this.create(openingHour, 'openingHour').pipe(
        tap((openingHour_: OpeningHour) => {
          this.advert.value.openingHour = openingHour_;
          this.setAdvert = this.advert.value;
        })
      );
    }
  }

  public order(galery: Galery): Observable<Galery> {
    return this.patch(galery, 'order').pipe(
      tap(
        (galery_: Galery) => (this.setGalery = galery_ as unknown as Galery[])
      )
    );
  }

  public async showLoading(message: string): Promise<HTMLIonLoadingElement> {
    return await this.loadingService.show(message);
  }
}
