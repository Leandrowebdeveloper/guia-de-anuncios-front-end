import { HttpErrorResponse } from '@angular/common/http';
import { OnInit, OnDestroy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Address, Announcement, User } from 'src/app/interface';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { AnnouncementFormAddressComponent } from './form/form.component';
import { AddressService } from './service/address.service';

@Component({
  selector: 'app-address-announcement-component',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AnnouncementAddressComponent implements OnInit, OnDestroy {
  @Input() announcement!: Pick<
    Announcement,
    | '_csrf'
    | 'id'
    | 'address'
    | 'category'
    | 'categoryAnnouncement'
    | 'citie'
    | 'title'
  > | void;

  @Input() user!: Pick<User, 'level'> | void;

  private $delete!: Subscription;
  private $update!: Subscription;
  constructor(
    private modalController: ModalController,
    private addressService: AddressService,
    private alertController: AlertController,
    private loadingService: LoadingService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.update();
  }

  ngOnDestroy(): void {
    this.$update.unsubscribe();
  }

  public async openForm(): Promise<void> {
    if (this.user?.level === '2') {
      await this.address();
    }
  }

  public async openFormAdmin(): Promise<void> {
    await this.address();
  }

  public async address(): Promise<void> {
    if (this.announcement) {
      let label = this.getLabel(this.announcement);
      let address = this.getAddress(this.announcement);

      const modal = await this.modalController.create({
        component: AnnouncementFormAddressComponent,
        cssClass: 'modal-wrapper',
        componentProps: {
          label,
          address,
        },
      });
      return await modal.present();
    }
  }

  private getLabel(announcement: Pick<Announcement, 'address'>) {
    if (announcement?.address) {
      return 'Editar endereço';
    } else {
      return 'Cadastrar endereço';
    }
  }

  private getAddress(
    announcement: Pick<Announcement, '_csrf' | 'id' | 'address'>
  ) {
    let address: Address;
    const _csrf = announcement?._csrf;
    if (announcement?.address) {
      address = { ...announcement?.address, _csrf };
    } else {
      address = {
        _csrf,
        allotment: null,
        block: null,
        complement: null,
        district: null,
        street: null,
        numberr: null,
        zip_code: null,
        announcementId: announcement?.id ? announcement?.id : null,
      };
    }

    address.zip_code = this.zipCode();
    address.zip_code = this.addressService.mask(address);
    return address;
  }

  private zipCode(): number {
    const key = this.getCitie();
    const city: any = {
      'São Luiz dos Montes Belos': 76100000,
      Firminópolis: 76105000,
      Aurilândia: 76120000,
      Sanclerlândia: 76160000,
      Turvânia: 76110000,
      'Córrego do Ouro': 76145000,
    };
    return city[`${key}`];
  }

  private getCitie(): string | void {
    if (
      this.announcement &&
      this.announcement !== undefined &&
      this.announcement !== null &&
      this.announcement?.citie !== undefined &&
      this.announcement?.citie !== null &&
      this.announcement?.citie?.city !== undefined &&
      this.announcement?.citie?.city !== null
    ) {
      return this.announcement.citie.city;
    }
  }

  public async destroy(): Promise<void> {
    if (this.announcement?.address) {
      const alert = await this.alertController.create({
        header: 'Excluir endereço',
        subHeader: this.announcement?.title,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {},
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: (event) => {
              const data: Address & { password: string } = {
                ...event,
                _csrf: this.announcement?._csrf,
                id: this.announcement?.address?.id,
              };
              return this.delete(data);
            },
          },
        ],
        inputs: [
          {
            name: 'password',
            type: 'password',
            placeholder: 'Senha',
            min: 8,
            max: 16,
          },
        ],
      });

      await alert.present();
    }
  }

  private delete(address: Address & { password: string }): Subscription | void {
    if (this.announcement?.address) {
      const loading = this.loadingService.show('Excluindo endereço...');
      return (this.$delete = this.addressService.delete(address).subscribe({
        next: (address_: Pick<Address, 'message'>) => {
          this.messsage(address_, loading);
          if (this.announcement) this.announcement.address = null;
        },
        error: (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.$delete),
      }));
    }
  }

  private messsage(
    address: Pick<Address, 'message'>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> | void {
    if (address?.message) {
      return this.messageService.success(
        address?.message,
        loading,
        this.$delete
      );
    }
  }

  private update(): Subscription {
    return (this.$update = this.addressService.getAddressEvent.subscribe({
      next: (address: Address | null) => {
        if (this.announcement?.id === address?.announcementId) {
          if (this.announcement) this.announcement.address = address;
        }
      },
    }));
  }
}
