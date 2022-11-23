import { Component, Input, OnInit } from '@angular/core';
import { Announcement, Contact } from 'src/app/interface';
import { ModalController } from '@ionic/angular';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-contant-component',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.scss'],
})
export class ContantComponent implements OnInit {
  @Input() announcement!: Announcement;
  constructor(private modalController: ModalController) {}

  ngOnInit(): void {}

  public async contacts(): Promise<void> {
    const announcement: Announcement = this.announcement;
    let contact: Contact;
    let label: string;
    if (announcement?.contact) {
      contact = announcement?.contact;
      // eslint-disable-next-line no-underscore-dangle
      contact._csrf = announcement?._csrf;
      label = 'Editar contatos';
    } else {
      contact = {
        // eslint-disable-next-line no-underscore-dangle
        _csrf: announcement?._csrf,
        mobilePhone: null,
        phone: null,
        whatsapp: null,
        announcementId: announcement?.id,
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
}
