import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Address, Announcement } from 'src/app/interface';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-address-component',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  @Input() announcement!: Announcement;
  constructor(private modalController: ModalController) {}

  ngOnInit(): void {}

  public async address(): Promise<void> {
    const announcement: Announcement = this.announcement;
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
        // eslint-disable-next-line @typescript-eslint/naming-convention
        zip_code: null,
        announcementId: announcement?.id,
      };
      label = 'Cadastrar endereço';
    }

    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        label,
        address,
      },
    });
    return await modal.present();
  }
}
