import { AuthService } from './../../../../services/auth/auth.service';
import { FormSendMessagesComponent } from './form/form.component';
import { Announcement, User } from 'src/app/interface';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-messages-component',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class SendMessagesComponent implements OnInit {
  @Input() user!: Required<Pick<User, '_csrf' | 'id'>>;
  @Input() announcement!: Required<Pick<Announcement, '_csrf' | 'id'>>;
  public isButton: boolean;
  constructor(
    private modalController: ModalController,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isButton = this.authService.getLevel === '1';
  }

  public async open(): Promise<void> {
    let data: {
      messages: [
        {
          userId: number | null;
          announcementId: number | null;
          description: string;
          type: string;
          response: false;
        }
      ];
      _csrf: string;
    };
    if (this.user) {
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
        label: 'Enviar menssagem',
        data,
      },
    });
    return await modal.present();
  }
}
