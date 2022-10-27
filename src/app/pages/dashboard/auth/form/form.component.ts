import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { User } from 'src/app/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { UserUtilities } from 'src/app/utilities/user/user-utilities.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() user!: User;
  @Input() action!: string;
  @Input() label!: string;

  public attrButtonPage: AttrButton[];
  public attrButton: AttrButton;

  public config: object;
  private form: FormGroup;
  private write: Subscription;
  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    private authService: AuthService,
    private userUtilities: UserUtilities
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
      case 'passwordCreate':
        return this.passwordCreate(event);
      case 'destroy':
        return this.destroy(event);
      case 'name':
        return this.name(event);
      case 'email':
        return this.email(event);
    }
  }

  // Destroy
  private destroy(event: FormGroup): Subscription {
    const loading = this.authService.showLoading('Alterando senha...');
    event.value.slug = this.authService.getSlug;
    return (this.write = this.authService.delete(event.value).subscribe(
      (user: User) => this.messsage(user, loading),
      (error: HttpErrorResponse) =>
        this.authService.error(error, loading, this.write)
    ));
  }

  // Name
  private name(event: FormGroup): Subscription {
    const loading = this.authService.showLoading('Alterando nome...');
    return (this.write = this.authService.name(event.value).subscribe(
      (user: User) => this.messsage(user, loading),
      (error: HttpErrorResponse) =>
        this.authService.error(error, loading, this.write)
    ));
  }

  // Email
  private email(event: FormGroup): Subscription {
    const loading = this.authService.showLoading('Alterando email...');
    event.value.slug = this.authService.getSlug;
    return (this.write = this.authService.email(event.value).subscribe(
      (user: User) => this.messsage(user, loading),
      (error: HttpErrorResponse) =>
        this.authService.error(error, loading, this.write)
    ));
  }

  // Password
  private password(event: FormGroup): Subscription {
    const loading = this.authService.showLoading('Alterando senha...');
    event.value.slug = this.authService.getSlug;
    return (this.write = this.authService.password(event.value).subscribe(
      (user: User) => this.messsage(user, loading),
      (error: HttpErrorResponse) =>
        this.authService.error(error, loading, this.write)
    ));
  }

  private passwordCreate(event: FormGroup): Subscription {
    const loading = this.authService.showLoading('Alterando senha...');
    event.value.slug = this.authService.getSlug;
    return (this.write = this.authService.passwordCreate(event.value).subscribe(
      (user: User) => this.messsage(user, loading),
      (error: HttpErrorResponse) =>
        this.authService.error(error, loading, this.write)
    ));
  }

  private messsage(
    user: User,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.authService.message(user, loading, this.write);
  }

  private setButton(): void {
    this.attrButton = this.userUtilities.setButton(this.action);
  }

  private getData(): void {
    this.config = { ...this.user };
  }
}
