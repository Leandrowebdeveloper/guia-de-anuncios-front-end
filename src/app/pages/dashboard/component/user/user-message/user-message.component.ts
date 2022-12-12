import { FormSendUserMessageComponent } from './form/form.component';
import { User } from 'src/app/interface';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-message-component',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.scss'],
})
export class SendUserMessageComponent {
  @Input() user!: Required<Pick<User, '_csrf' | 'id' | 'blockade'>>;
  constructor(private modalController: ModalController) {}

  public async open(): Promise<void> {
    const { _csrf, id } = this.user;
    const modal = await this.modalController.create({
      component: FormSendUserMessageComponent,
      componentProps: {
        label: 'Cadastrar menssagem',
        user: {
          _csrf,
          userMessage: [
            { userId: id, description: null, type: null, response: false },
          ],
        },
      },
    });
    return await modal.present();
  }
}
