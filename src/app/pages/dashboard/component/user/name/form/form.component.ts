import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

import { User } from 'src/app/interface';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { NameService } from '../service/name.service';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { UserName } from '../interface';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormUserNameComponent implements OnInit {
  @Input() user!: Required<Pick<User, UserName>>;
  @Input() label!: string;
  @Input() isAuth!: boolean;

  public attrButton: AttrButton = {
    route: '/name',
    icon: 'cloud-upload',
    label: 'Salvar',

    aria: 'Salvar nome e sobrenome.',
    title: 'Salvar nome e sobrenome.',
  };

  public config!: object;
  private form!: FormGroup;
  private $name!: Subscription;
  constructor(
    private nameService: NameService,
    private helpService: HelpsService,
    private modalController: ModalController,
    private authService: AuthService,
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
    return this.name(event);
  }

  private name(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Salvando nome...');
    if (this.isAuth) {
      return (this.$name = this.authService.name(event.value).subscribe({
        next: (user: User) => this.messsage(user, loading),
        error: (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.$name),
      }));
    }
    return (this.$name = this.nameService.name(event.value).subscribe({
      next: (user: Pick<User, UserName | 'name' | 'message'>) =>
        this.messsage(user, loading),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.$name),
    }));
  }

  private messsage(
    user: Required<Pick<User, UserName | 'message'>>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(user?.message, loading, this.$name);
  }

  private getData(): void {
    this.config = { ...this.user };
  }
}
