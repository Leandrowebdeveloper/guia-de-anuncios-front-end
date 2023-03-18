import { MessagesService } from '../service/messages.service';
import { ModalController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { User, Messages, Announcement } from 'src/app/interface';
import { MessageService } from 'src/app/utilities/message/message.service';
import { FormSendMessagesComponent } from '../form/form.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-card-message-component',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class UserCardMessageComponent implements OnInit {
  @Input() user!: Pick<User, 'name' | '_csrf' | 'id' | 'messages'>;
  @Input() announcement!: Pick<
    Announcement,
    'title' | '_csrf' | 'id' | 'messages'
  >;
  public messages: Messages[];
  public isButton: boolean;
  private $close: Subscription;
  constructor(
    private userMessageService: MessagesService,
    private messageService: MessageService,
    private modalController: ModalController,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.init();
    this.isButton = this.authService.getLevel === '1';
  }

  public close(index: number, message: Pick<Messages, 'id'>): Subscription {
    const dataDel = {
      _csrf: this.setCsrf(),
      id: message?.id,
    } as Messages;
    return (this.$close = this.userMessageService.close(dataDel).subscribe({
      next: (messages: Messages) => this.success(index),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, null, this.$close),
    }));
  }

  public async update(index: number): Promise<void> {
    const modal = await this.modalController.create({
      component: FormSendMessagesComponent,
      componentProps: {
        label: 'Editar menssagem',
        data: this.buildDataForm(index),
      },
    });
    return await modal.present();
  }

  private buildDataForm(index: number): {
    messages: Messages[];
    _csrf: string;
    id: number;
  } {
    if (this.user) {
      const { _csrf, id, messages } = this.user;
      return { _csrf, id, messages };
    } else {
      const { _csrf, id, messages } = this.announcement;
      return { _csrf, id, messages };
    }
  }

  private setCsrf() {
    // eslint-disable-next-line no-underscore-dangle
    return this.user?._csrf || this.announcement._csrf;
  }

  private success(index: number) {
    if (this.messages.length > 0) {
      this.messages.splice(index, 1);
      this.$close.unsubscribe();
    }
  }

  private init(): void {
    if (this.user) {
      this.messages = this.user?.messages;
    } else {
      this.messages = this.announcement.messages;
    }
  }
}
