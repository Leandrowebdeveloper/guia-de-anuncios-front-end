import { MessagesService } from './../../messages/service/messages.service';
import { ModalController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Component, Input } from '@angular/core';
import { User, Messages } from 'src/app/interface';
import { MessageService } from 'src/app/utilities/message/message.service';
import { FormSendMessagesComponent } from '../../messages/form/form.component';

@Component({
  selector: 'app-card-message-user-component',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class UserCardMessageComponent {
  @Input() user!: Required<Pick<User, 'name' | '_csrf' | 'id' | 'messages'>>;
  @Input() isAuth!: boolean;
  private $close: Subscription;
  constructor(
    private userMessageService: MessagesService,
    private messageService: MessageService,
    private modalController: ModalController
  ) {}

  public close(
    index: number,
    message: Pick<Messages, '_csrf' | 'id'>
  ): Subscription {
    this.setCsrf(message);
    const dataDel = {
      // eslint-disable-next-line no-underscore-dangle
      _csrf: message?._csrf,
      id: message?.id,
    } as Messages;
    return (this.$close = this.userMessageService.close(dataDel).subscribe(
      (messages: Messages) => this.success(index, messages),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, null, this.$close)
    ));
  }

  public async update(index: number): Promise<void> {
    const message = this.user.messages[index];

    const { _csrf, id } = this.user;

    const modal = await this.modalController.create({
      component: FormSendMessagesComponent,
      componentProps: {
        label: 'Editar menssagem',
        user: { id, _csrf, messages: [message] },
      },
    });
    return await modal.present();
  }

  private setCsrf(message: Pick<Messages, '_csrf'>) {
    // eslint-disable-next-line no-underscore-dangle
    message._csrf = this.user?._csrf;
  }

  private success(index: number, userMesssage: Pick<Messages, 'message'>) {
    if (userMesssage?.message) {
      this.user.messages.splice(index, 1);
      this.$close.unsubscribe();
    }
  }
}
