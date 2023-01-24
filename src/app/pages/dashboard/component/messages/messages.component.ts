import { FormSendMessagesComponent } from './form/form.component';
import { Announcement, User } from 'src/app/interface';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-messages-component',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class SendMessagesComponent {
  @Input() action!: 'users' | 'announcement';
  @Input() user!: Required<Pick<User, '_csrf' | 'id'>>;
  @Input() announcement!: Required<Pick<Announcement, '_csrf' | 'id'>>;
  constructor(private modalController: ModalController) {}

  public async open(): Promise<void> {
    let data: any;
    if (this.action === 'users') {
      const { _csrf, id } = this.user;
      data = {
        _csrf,
        messages: [
          {
            userId: id,
            announcementId: null,
            description: null,
            type: null,
            response: false,
          },
        ],
      };
    } else {
      const { _csrf, id } = this.announcement;
      data = {
        _csrf,
        messages: [
          {
            userId: null,
            announcementId: id,
            description: null,
            type: null,
            response: false,
          },
        ],
      };
    }
    const modal = await this.modalController.create({
      component: FormSendMessagesComponent,
      componentProps: {
        label: 'Cadastrar menssagem',
        user: { ...data },
      },
    });
    return await modal.present();
  }
}
