import { ModalController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Component, Input } from '@angular/core';
import { User, UserMessage } from 'src/app/interface';
import { MessageService } from 'src/app/utilities/message/message.service';
import { FormSendUserMessageComponent } from '../userMessage/form/form.component';
import { UserMessageService } from '../userMessage/service/user-message.service';

@Component({
  selector: 'app-message-user-component',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class UserMessageComponent {
  @Input() user!: User;
  @Input() isAdmin!: boolean;
  private $close: Subscription;
  constructor(
    private userMessageService: UserMessageService,
    private messageService: MessageService,
    private modalController: ModalController
  ) {}

  public close(index: number, message: UserMessage): Subscription {
    this.setCsrf(message);
    return (this.$close = this.userMessageService.close(message).subscribe(
      (userMessage: UserMessage) => this.success(index, userMessage),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, null, this.$close)
    ));
  }

  public async update(index: number): Promise<void> {
    const message = this.user.userMessage[index];

    const { _csrf, id } = this.user;

    const modal = await this.modalController.create({
      component: FormSendUserMessageComponent,
      componentProps: {
        label: 'Editar menssagem',
        user: { id, _csrf, userMessage: [message] },
      },
    });
    return await modal.present();
  }

  private setCsrf(message: UserMessage) {
    // eslint-disable-next-line no-underscore-dangle
    message._csrf = this.user?._csrf;
  }

  private success(index: number, userMesssage: UserMessage) {
    if (userMesssage?.message) {
      this.user.userMessage.splice(index, 1);
      this.$close.unsubscribe();
    }
  }
}
