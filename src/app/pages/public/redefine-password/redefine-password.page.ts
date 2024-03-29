import { LoadingService } from './../../../utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { ActivatedRoute, UrlTree } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { RedefinePasswordService } from './services/redefine-password.service';
import { User } from 'src/app/interface';
import { FormGroup } from '@angular/forms';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { Subscription } from 'rxjs';
import { HelpsService } from 'src/app/services/helps/helps.service';

@Component({
  selector: 'app-redefine-password',
  templateUrl: './redefine-password.page.html',
  styleUrls: ['./redefine-password.page.scss'],
})
export class RedefinePasswordPage implements OnInit {
  public user!: User;
  public active!: boolean;
  public attrButton!: AttrButton;
  public message!: string;
  private form!: FormGroup;
  private urlTree!: boolean;
  private redefine!: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private helpsService: HelpsService,
    private redefinePasswordService: RedefinePasswordService,
    private messageService: MessageService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.setConfig();
    this.setAttrButton();
    this.isActived();
    this.setMessageLinkInvalid();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    if (this.authorizeRoute()) {
      return this.authorizeRoute();
    } else if (this.canAuthorizeTheRoute()) {
      return this.canDeactivatedConfirmAlert();
    }
    return true;
  }

  public importForm(event: FormGroup) {
    this.form = event;
  }

  public onSubmit(event: FormGroup) {
    const loading = this.loadingService.show('Recuperando senha...');
    return (this.redefine = this.redefinePasswordService
      .passwordRecover(event.value)
      .subscribe({
        next: (user: User) => this.success(user, loading),
        error: (error: HttpErrorResponse) => this.error(error, loading),
      }));
  }

  private setMessageLinkInvalid() {
    return (this.message = this.user?.message);
  }

  private isActived(): boolean {
    return (this.active = this.user?.active);
  }
  private disableCanDeactivate(): boolean {
    return (this.urlTree = true);
  }

  private authorizeRoute(): boolean {
    return this.urlTree;
  }

  private canAuthorizeTheRoute(): boolean {
    return this.helpsService.isAuthorizeTheRoute(this.form);
  }

  private canDeactivatedConfirmAlert() {
    return this.helpsService.messageAuthorizeTheRoute();
  }

  private success(user: User, loading: Promise<HTMLIonLoadingElement>) {
    this.disableCanDeactivate();
    this.formUpdate();
    this.redefinePasswordService.goToLoginPage();
    return this.messageService.success(user.message, loading, this.redefine);
  }

  private error(
    error: HttpErrorResponse,
    loading: Promise<HTMLIonLoadingElement>
  ): any {
    return this.redefinePasswordService.error(error, loading, this.redefine);
  }

  private formUpdate(): number {
    return this.helpsService.delay(
      () =>
        this.helpsService.correctFormGroupValueRecalculatingStatusControlsAndErrorMessages(
          this.form,
          this.user
        ),
      2000
    );
  }

  private setConfig(): void {
    this.user = this.activatedRoute.snapshot.data['redefinePassword'];
  }

  private setAttrButton(): void {
    this.attrButton = {
      route: 'redefinir-senha',
      icon: 'arrow-up-circle',
      label: 'Redefinir senha',

      aria: 'Redefinir senha.',
      title: 'Redefinir senha.',
    };
  }
}
