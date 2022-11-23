import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { User } from 'src/app/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { UserUtilities } from 'src/app/utilities/user/user-utilities.service';
import { UsersService } from '../services/users.service';
import { MessageService } from 'src/app/utilities/message/message.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() user: User;
  @Input() action: string;
  @Input() label: string;

  public attrButtonPage: AttrButton[];
  public attrButton: AttrButton;

  public config: object;
  private form: FormGroup;
  private write: Subscription;
  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    private usersService: UsersService,
    private userUtilities: UserUtilities,
    private loadingService: LoadingService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.setButton();
  }

  public importForm(event: FormGroup): FormGroup {
    return (this.form = event);
  }

  public onSubmit(event: FormGroup): Subscription {
    switch (this.action) {
      case 'password':
        return this.password(event);
      case 'destroy':
        return this.destroy(event);
      case 'drop':
        return this.drop(event);
      case 'name':
        return this.name(event);
      case 'restore':
        return this.restore(event);
      case 'email':
        return this.email(event);
      case 'level':
        return this.level(event);
      case 'plan':
        return this.plan(event);
    }
  }

  // Destroy
  private destroy(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Excluindo usuário...');
    this.getSlug(event);
    return (this.write = this.usersService.delete(event.value).subscribe(
      (user: User) => this.messsage(user, loading),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.write)
    ));
  }

  // Destroy
  private drop(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Excluindo usuário...');
    this.getSlug(event);
    return (this.write = this.usersService.dropd(event.value).subscribe(
      (user: User) => this.messsage(user, loading),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.write)
    ));
  }

  private getSlug(event: FormGroup<any>) {
    if (!event.value.slug) {
      event.value.slug = this.usersService.getSlug;
    }
  }

  // Name
  private name(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Alterando nome...');
    return (this.write = this.usersService.name(event.value).subscribe(
      (user: User) => this.messsage(user, loading),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.write)
    ));
  }

  // Restore
  private restore(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Restaurar usuário...');
    return (this.write = this.usersService.restore(event.value).subscribe(
      (user: User) => this.messsage(user, loading),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.write)
    ));
  }

  // Email
  private email(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Alterando email...');
    event.value.slug = this.usersService.getSlug;
    return (this.write = this.usersService.email(event.value).subscribe(
      (user: User) => this.messsage(user, loading),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.write)
    ));
  }

  // Password
  private password(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Alterando senha...');
    event.value.slug = this.usersService.getSlug;
    return (this.write = this.usersService.password(event.value).subscribe(
      (user: User) => this.messsage(user, loading),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.write)
    ));
  }

  // Level
  private level(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Alterando nivel...');
    event.value.slug = this.usersService.getSlug;
    return (this.write = this.usersService.level(event.value).subscribe(
      (user: User) => this.messsage(user, loading),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.write)
    ));
  }

  // Level
  private plan(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Alterando plano...');
    event.value.slug = this.usersService.getSlug;
    return (this.write = this.usersService.plan(event.value).subscribe(
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

  private setButton(): void {
    this.attrButton = this.userUtilities.setButton(this.action);
  }

  private getData(): void {
    this.config = { ...this.user };
  }
}
