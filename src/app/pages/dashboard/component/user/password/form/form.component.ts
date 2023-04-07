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
import { AdminPasswordService } from '../service/password.service';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { UserPassword } from '../interface';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormUserPasswordComponent implements OnInit {
  @Input() user!: Required<
    Pick<User & { passwordCurrent: string }, UserPassword>
  >;
  @Input() action!: string;
  @Input() label!: string;
  @Input() isAuth!: boolean;

  public attrButton: AttrButton = {
    route: '/new-password',
    icon: 'key',
    label: 'Salvar',

    aria: 'Salvar senha.',
    title: 'Salvar senha.',
  };

  public config!: object;
  private form!: FormGroup;
  private $password!: Subscription;
  constructor(
    private adminPasswordService: AdminPasswordService,
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
    return this.password(event);
  }

  private password(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Armazenar senha...');
    event.value.slug = this.user?.slug;
    if (this.isAuth) {
      return (this.$password = this.authService
        .password(event.value)
        .subscribe({
          next: (user: User) => this.messsage(user, loading),
          error: (error: HttpErrorResponse) =>
            this.messageService.error(error, loading, this.$password),
        }));
    }
    return (this.$password = this.adminPasswordService
      .password(event.value)
      .subscribe({
        next: (
          user: Required<
            Pick<
              User & { passwordCurrent: string },
              UserPassword | 'isPassword' | 'message'
            >
          >
        ) => this.messsage(user, loading),
        error: (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.$password),
      }));
  }

  private messsage(
    user: Required<Pick<User, 'message'>>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(user?.message, loading, this.$password);
  }

  private getData(): void {
    this.config = { ...this.user };
  }
}
