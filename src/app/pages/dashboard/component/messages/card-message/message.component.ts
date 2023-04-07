import { ModalController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

import { User, Messages, Announcement } from 'src/app/interface';
import { MessageService } from 'src/app/utilities/message/message.service';
import { FormSendMessagesComponent } from '../form/form.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MessagesService } from '../service/messages.service';

@Component({
  selector: 'app-card-message-component',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class UserCardMessageComponent implements OnInit {
  @Input() user?: Pick<User, 'name' | '_csrf' | 'id' | 'messages'> | void;
  @Input() announcement?: Pick<
    Announcement,
    'title' | '_csrf' | 'id' | 'messages'
  > | void;

  public isAdmin!: boolean;
  public messages!: Messages[];
  private $close!: Subscription;
  constructor(
    private userMessageService: MessagesService,
    private messageService: MessageService,
    private modalController: ModalController,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.init();
    this.hasAdmin();
  }

  private hasAdmin() {
    const is = this.authService.getLevel === '1' ? true : false;
    if (is) this.isAdmin = is;
  }

  public close(index: number, message: Pick<Messages, 'id'>): Subscription {
    const dataDel = {
      _csrf: this.setCsrf(),
      id: message?.id,
    } as Messages;
    return (this.$close = this.userMessageService.close(dataDel).subscribe({
      next: (messages: Messages) => this.success(index),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, undefined, this.$close),
    }));
  }

  public async update(index: number): Promise<void> {
    const modal = await this.modalController.create({
      component: FormSendMessagesComponent,
      componentProps: {
        label: 'Editar menssagem',
        data: this.buildDataForm(),
      },
    });
    return await modal.present();
  }

  private buildDataForm(): {
    messages: Messages[];
    _csrf: string;
    id: number;
  } | void {
    if (this.user) {
      const { _csrf, id, messages } = this.user;
      return { _csrf, id, messages };
    } else if (this.announcement) {
      const { _csrf, id, messages } = this.announcement;
      if (_csrf && id && messages) {
        return { _csrf, id, messages };
      }
    }
  }

  private setCsrf() {
    return this.user?._csrf || this.announcement?._csrf;
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
      if (this.announcement?.messages) {
        this.messages = this.announcement.messages;
      }
    }
  }
}
