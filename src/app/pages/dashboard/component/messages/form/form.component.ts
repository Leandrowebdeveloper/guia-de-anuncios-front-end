import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { User, Messages, Announcement } from 'src/app/interface';
import { MessagesService } from '../service/messages.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormSendMessagesComponent implements OnInit {
  @Input() data!: Required<
    Pick<User | Announcement, '_csrf' | 'id' | 'messages'>
  >;
  @Input() label!: string;
  @Input() isAuth!: boolean;

  public attrButton: AttrButton = {
    route: '/message',
    icon: 'cloud-upload',
    label: 'Salvar',
    fill: false,
    aria: 'Salvar menssagem.',
    title: 'Salvar menssagem.',
  };

  public config: object;
  private form: FormGroup;
  private write: Subscription;
  constructor(
    private messagesService: MessagesService,
    private helpService: HelpsService,
    private modalController: ModalController,
    private loadingService: LoadingService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  public importForm(event: FormGroup): FormGroup {
    return (this.form = event);
  }

  public onSubmit(event: FormGroup): Subscription {
    return this.saveMessage(event);
  }

  private saveMessage(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Salvando menssagem...');
    let action: 'users' | 'announcement';
    if (this.data?.messages[0]?.userId) {
      event.value.userId = this.data?.messages[0]?.userId;
      event.value.id = this.data?.messages[0]?.id;
      action = 'users';
    } else {
      action = 'announcement';
      event.value.announcementId = this.data?.messages[0]?.announcementId;
    }

    return (this.write = this.messagesService
      .send(event.value, action)
      .subscribe(
        (messages: Messages) => this.messsage(messages, loading),
        (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.write)
      ));
  }

  private messsage(
    response: Messages,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(response?.message, loading, this.write);
  }

  private getData(): void {
    const { _csrf, messages } = this.data;
    this.config = { _csrf, password: null, ...messages[0] };
  }
}
