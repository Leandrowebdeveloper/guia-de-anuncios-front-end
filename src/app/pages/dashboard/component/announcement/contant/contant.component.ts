import { Component, Input, OnInit } from '@angular/core';
import { Announcement, Contact } from 'src/app/interface';
import { ModalController } from '@ionic/angular';
import { FormContactAnnouncementComponent } from './form/form.component';

@Component({
  selector: 'app-contant-announcement-component',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.scss'],
})
export class ContactAnnouncementComponent implements OnInit {
  @Input() announcement!: Pick<
    Announcement,
    '_csrf' | 'id' | 'contact' | 'categoryAnnouncement' | 'blockade'
  >;

  constructor(private modalController: ModalController) {}

  ngOnInit(): void {}

  public async contacts(
    announcement: Pick<
      Announcement,
      '_csrf' | 'id' | 'contact' | 'categoryAnnouncement' | 'blockade'
    >
  ): Promise<void> {
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
      component: FormContactAnnouncementComponent,
      componentProps: {
        action: 'contact',
        label,
        contact,
      },
    });
    return await modal.present();
  }
}
