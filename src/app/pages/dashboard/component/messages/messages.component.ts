import { AuthService } from './../../../../services/auth/auth.service';
import { FormSendMessagesComponent } from './form/form.component';
import { Announcement, User } from 'src/app/interface';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
export interface DataMessage {
  messages: [
    {
      userId: number | null;
      announcementId: number | null;
      description: string | null;
      type: string | null;
      response: false;
    }
  ];
  _csrf: string;
}

@Component({
  selector: 'app-messages-component',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class SendMessagesComponent {
  @Input() announcement!: Pick<Announcement, '_csrf' | 'id'> | void;
  @Input() user!: Pick<User, '_csrf' | 'id' | 'level'> | void;
  constructor(private modalController: ModalController) {}

  public async open(): Promise<void> {
    let data: DataMessage | void = this.getDataMessage();
    const modal = await this.modalController.create({
      component: FormSendMessagesComponent,
      componentProps: {
        label: 'Enviar menssagem',
        data,
      },
    });
    return await modal.present();
  }

  private getDataMessage(): DataMessage | void {
    if (this.user) {
      const { _csrf, id } = this.user;
      return {
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
      if (this.announcement) {
        const { _csrf, id } = this.announcement;
        if (_csrf && id) {
          return {
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
      }
    }
  }
}
