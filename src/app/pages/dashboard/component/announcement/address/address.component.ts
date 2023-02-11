import { OnInit } from '@angular/core';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Address, Announcement, City } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AnnouncementFormAddressComponent } from './form/form.component';
import { AddressService } from './service/address.service';

@Component({
  selector: 'app-address-announcement-component',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AnnouncementAddressComponent implements OnInit {
  @Input() announcement!: Pick<
    Announcement,
    '_csrf' | 'id' | 'address' | 'category' | 'categoryAnnouncement' | 'citie'
  >;

  public isAdmin: boolean;
  constructor(
    private modalController: ModalController,
    private addressService: AddressService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.isAdmin = this.authService.getLevel === '1';
  }

  public async address(
    announcement: Pick<Announcement, '_csrf' | 'id' | 'address'>
  ): Promise<void> {
    let address: Address;
    let label: string;
    if (announcement?.address) {
      address = announcement?.address;
      // eslint-disable-next-line no-underscore-dangle
      address._csrf = announcement?._csrf;
      label = 'Editar endereço';
    } else {
      address = {
        // eslint-disable-next-line no-underscore-dangle
        _csrf: announcement?._csrf,
        allotment: null,
        block: null,
        complement: null,
        district: null,
        street: null,
        numberr: null,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        zip_code: null,
        announcementId: announcement?.id,
      };
      label = 'Cadastrar endereço';
    }

    address.zip_code = this.zipCode();
    address.zip_code = this.addressService.mask(address);

    const modal = await this.modalController.create({
      component: AnnouncementFormAddressComponent,
      componentProps: {
        label,
        address,
      },
    });
    return await modal.present();
  }

  public zipCode(): number {
    const city: City = {
      'São Luiz dos Montes Belos': 76100000,
      Firminópolis: 76105000,
      Aurilândia: 76120000,
      Sanclerlândia: 76160000,
      Turvânia: 76110000,
      'Córrego do Ouro': 76145000,
    };
    return city[this.announcement?.citie?.city];
  }
}
