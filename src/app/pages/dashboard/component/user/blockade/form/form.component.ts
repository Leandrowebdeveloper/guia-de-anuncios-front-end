import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { User, Messages } from 'src/app/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { UserBlockade } from '../interface';
import { UserBlockadeService } from '../services/user-blockade.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormUserBlockadeComponent implements OnInit {
  @Input() user!: Required<Pick<User, UserBlockade>>;
  @Input() label!: string;
  @Input() isAuth!: boolean;
  public attrButton: AttrButton = {
    route: '/blockade',
    icon: 'stop',
    label: 'Bloquear usuário',

    aria: 'Bloquear usuário.',
    title: 'Bloquear usuário.',
  };

  public config!: object;
  private form!: FormGroup;
  private write!: Subscription;
  private id: number | undefined;

  constructor(
    private userBlockadeService: UserBlockadeService,
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
    return this.blockade(event);
  }

  private blockade(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Bloquear usuário...');
    event.value.slug = this.user?.slug;
    event.value.id = this.id;
    return (this.write = this.userBlockadeService
      .blockade(event.value)
      .subscribe({
        next: (user: Required<Pick<User, UserBlockade | 'message'>>) =>
          this.messsage(user, loading),
        error: (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.write),
      }));
  }

  private messsage(
    user: Required<Pick<User, 'message'>>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(user?.message, loading, this.write);
  }

  private getData(): void {
    const { blockade, _csrf, messages } = this.user;
    if (messages.length > 0) {
      const i = messages.findIndex((item) => item?.type === 'danger');
      if (i === -1) {
        this.config = {
          _csrf,
          blockade,
          password: null,
          type: null,
          description: null,
          response: false,
        };
      } else {
        const { type, description, id, response } = messages[i];
        this.id = id;
        this.config = {
          _csrf,
          blockade,
          password: null,
          type,
          description,
          response,
        };
      }
    } else {
      this.config = {
        _csrf,
        blockade: null,
        password: null,
        type: null,
        description: null,
        response: false,
      };
    }
  }
}
