import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { User } from 'src/app/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { UserDestroyService } from '../service/user-destroy.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormUserDestroyComponent implements OnInit {
  @Input() user!: User;
  @Input() label!: string;
  @Input() isAuth!: boolean;
  public attrButton: AttrButton = {
    route: '/destroy',
    icon: 'trash',
    label: 'Excluir usuário',
    fill: false,
    aria: 'Excluir usuário.',
    title: 'Excluir usuário.',
  };

  public config: object;
  private form: FormGroup;
  private write: Subscription;
  constructor(
    private userDestroyService: UserDestroyService,
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
    return this.destroy(event);
  }

  private destroy(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Alterando senha...');
    event.value.slug = this.user?.slug;
    if (this.isAuth) {
      return (this.write = this.authService.delete(event.value).subscribe(
        (user: User) => this.messsage(user, loading),
        (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.write)
      ));
    }
    return (this.write = this.userDestroyService.delete(event.value).subscribe(
      (user: User) => this.messsage(user, loading),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.write)
    ));
  }

  private messsage(
    user: User,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(user?.message, loading, this.write);
  }

  private getData(): void {
    this.config = { ...this.user };
  }
}
