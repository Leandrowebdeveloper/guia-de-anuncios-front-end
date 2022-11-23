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

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() user!: User;
  @Input() label!: string;

  public attrButton: AttrButton = {
    route: '/email',
    icon: 'mail',
    label: 'Enviar',
    fill: false,
    aria: 'Enviar novo email.',
    title: 'Enviar novo email.',
  };

  public config: object;
  private form: FormGroup;
  private write: Subscription;
  constructor(
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
    return this.email(event);
  }

  private email(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Alterando email...');
    event.value.slug = this.authService.getSlug;
    return (this.write = this.authService.email(event.value).subscribe(
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
