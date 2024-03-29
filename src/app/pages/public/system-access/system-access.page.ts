import { ModuleDarkService } from './../../../services/module-dark/module-dark.service';
import { SystemAccessService } from './services/system-access.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { OnComponentDeactivate } from 'src/app/components/form/guard/deactivate.guard';
import { RequisitionLimit, User } from 'src/app/interface';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import attrButton from 'src/app/utilities/functions';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { Platform, isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-system-access',
  templateUrl: './system-access.page.html',
  styleUrls: [
    './system-access.page.scss',
    './../activate-account/activate-account.page.scss',
  ],
})
export class SystemAccessPage implements OnInit, OnComponentDeactivate {
  public desable!: boolean;
  public time!: string;
  public config!: User;
  public attrButton!: AttrButton;
  public isMobile!: boolean;
  public route!: string;
  public dark$ = new Observable<{ isDark: boolean }>();
  private form!: FormGroup;
  private urlTree!: boolean;
  private systemAccess!: Subscription;
  private requiriment!: RequisitionLimit;

  constructor(
    private activatedRoute: ActivatedRoute,
    private systemAccessService: SystemAccessService,
    private helpsService: HelpsService,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private moduleDarkService: ModuleDarkService,
    private plt: Platform
  ) {}

  ngOnInit() {
    this.activeRoute();
    this.setConfig();
    this.hasDesable();
    this.initAttrButton();
    this.initDark();
    this.isPlt();
  }

  private isPlt() {
    this.isMobile = this.plt.is('mobile');
  }

  private initDark(): void {
    this.dark$ = this.moduleDarkService.darkAsObservable();
  }

  public activeRoute(): void {
    if (this.activatedRoute.snapshot.parent?.routeConfig?.path) {
      this.route = this.activatedRoute.snapshot.parent?.routeConfig?.path;
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    if (this.authorizeRoute()) {
      return this.authorizeRoute();
    } else if (this.canAuthorizeTheRoute()) {
      return this.canDeactivatedConfirmAlert();
    }
    return true;
  }

  public onSubmit(event: FormGroup): Subscription | void {
    switch (this.route) {
      case 'entrar':
        return this.login(event);
      case 'recuperar-senha':
        return this.recover(event);
      case 'cadastrar':
        return this.register(event);
    }
  }

  public importForm(event: FormGroup): FormGroup {
    return (this.form = event);
  }

  public setDesable(event: boolean): void {
    this.desable = event;
  }

  public getTimeLeftToUnlock(): void {
    this.time = this.requiriment?.delay;
  }

  public disableCanDeactivate(user: User): boolean | null {
    if (user.auth) {
      return (this.urlTree = user.auth);
    }
    return null;
  }

  public formUpdate(): void {
    this.helpsService.delay(() => {
      this.helpsService.correctFormGroupValueRecalculatingStatusControlsAndErrorMessages(
        this.form,
        this.config
      );
    }, 2500);
  }

  private initAttrButton(): void {
    switch (this.route) {
      case 'entrar':
        this.attrButton = attrButton[0];
        break;
      case 'recuperar-senha':
        this.attrButton = attrButton[1];
        break;
      case 'cadastrar':
        this.attrButton = attrButton[2];
        break;
    }
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

  private login(event: FormGroup): Subscription {
    this.setRouter('login');
    const loading = this.loadingService.show('Acessar o sistema...');
    return (this.systemAccess = this.systemAccessService
      .sendLoginData(event.value)
      .subscribe({
        next: (auth: User) => this.success(auth, loading),
        error: (error: HttpErrorResponse) => this.error(error, loading),
      }));
  }

  private register(event: FormGroup): Subscription {
    this.setRouter('register');
    const loading = this.loadingService.show('Cadastrando usuário...');
    return (this.systemAccess = this.systemAccessService
      .register(event.value)
      .subscribe({
        next: (user: User) => this.success(user, loading),
        error: (error: HttpErrorResponse) => this.error(error, loading),
      }));
  }

  private recover(event: FormGroup): Subscription {
    this.setRouter('recover');
    const loading = this.loadingService.show('Recuperando senha...');
    return (this.systemAccess = this.systemAccessService
      .passwordRecover(event.value)
      .subscribe({
        next: (user: User) => this.success(user, loading),
        error: (error: HttpErrorResponse) => this.error(error, loading),
      }));
  }

  // private showLoading(message: string): Promise<HTMLIonLoadingElement> {
  //   return this.systemAccessService.loading(message);
  // }

  private success(user: User, loading: Promise<HTMLIonLoadingElement>) {
    this.disableCanDeactivate(user);
    this.formUpdate();
    this.systemAccessService.isLogin(user);
    this.systemAccessService.goToUserPage();
    return this.messageService.success(
      user.message,
      loading,
      this.systemAccess
    );
  }

  private error(
    error: HttpErrorResponse,
    loading: Promise<HTMLIonLoadingElement>
  ) {
    this.requisitionLimit(error);
    return this.systemAccessService.error(error, loading, this.systemAccess);
  }

  private requisitionLimit(error: HttpErrorResponse): void {
    if (error.status === 403) {
      this.helpsService.delay(() => {
        this.setError(error);
        this.hasDesable();
        this.formUpdate();
      }, 2500);
    }
  }

  private setError(error: HttpErrorResponse): void {
    this.requiriment = error?.error;
  }

  private setConfig(): any {
    this.addConfig();
    this.addRequirement();
  }

  private addRequirement() {
    this.requiriment = this.config?.requisitionLimit;
  }

  private addConfig() {
    this.config = this.activatedRoute.snapshot.data['systemAccess'];
  }

  private hasDesable(): void {
    this.getDesable();
    if (this.desable) {
      this.getTimeLeftToUnlock();
    }
  }

  private getDesable(): void {
    if (this.requiriment) {
      this.addDesable();
    }
  }

  private addDesable(): void {
    this.desable = this.isDesabled();
  }

  private isDesabled(): boolean {
    return this.requiriment.count >= 3;
  }

  private setRouter(route: 'login' | 'recover' | 'register') {
    this.systemAccessService.activeRoute = route;
  }
}
