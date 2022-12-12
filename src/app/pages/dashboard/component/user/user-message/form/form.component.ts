import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { User, UserMessage } from 'src/app/interface';
import { UserMessageService } from '../service/user-message.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormSendUserMessageComponent implements OnInit {
  @Input() user!: Required<Pick<User, '_csrf' | 'id' | 'userMessage'>>;
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
    private userMessageService: UserMessageService,
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
    event.value.userId = this.user?.userMessage[0]?.userId;
    event.value.id = this.user?.userMessage[0]?.id;

    console.log(event.value);

    return (this.write = this.userMessageService.send(event.value).subscribe(
      (userMessage: UserMessage) => this.messsage(userMessage, loading),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.write)
    ));
  }

  private messsage(
    userMesssage: UserMessage,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(
      userMesssage?.message,
      loading,
      this.write
    );
  }

  private getData(): void {
    const { _csrf, userMessage } = this.user;
    this.config = { _csrf, password: null, ...userMessage[0] };
  }
}
