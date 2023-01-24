import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Address, Announcement } from 'src/app/interface';
import { FormAddressAnnouncementComponent } from './form/form.component';
import { AddressService } from './service/address.service';

@Component({
  selector: 'app-address-announcement-component',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressAnnouncementComponent {
  @Input() announcement!: Pick<
    Announcement,
    '_csrf' | 'id' | 'address' | 'category' | 'blockade'
  >;

  constructor(
    private modalController: ModalController,
    private addressService: AddressService
  ) {}

  public async address(
    announcement: Pick<Announcement, '_csrf' | 'id' | 'address'>
  ): Promise<void> {
    let address: Address;
    let label: string;
    if (announcement?.address) {
      address = announcement?.address;
      address.zip_code = this.addressService.mask(address);
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

    const modal = await this.modalController.create({
      component: FormAddressAnnouncementComponent,
      componentProps: {
        label,
        address,
      },
    });
    return await modal.present();
  }
}
