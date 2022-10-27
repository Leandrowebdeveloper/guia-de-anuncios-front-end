import { HelpsService } from 'src/app/services/helps/helps.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { User } from 'src/app/interface';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from './login/service';
import { RecoverService } from './recover/service';
import { RegisterService } from './register/service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';

@Injectable()
export class SystemAccessService {
  private $activeRoute: string = 'login' || 'recover' || 'register';
  constructor(
    public http: HttpClient,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private authService: AuthService,
    private helpsService: HelpsService,
    private loginService: LoginService,
    private recoverService: RecoverService,
    private registerService: RegisterService
  ) {}

  public get activeRoute(): string {
    return this.$activeRoute;
  }
  public set activeRoute(value: string) {
    this.$activeRoute = value;
  }

  public passwordRecover(user: User): Observable<User> {
    return this.recoverService.create(user);
  }

  public sendLoginData(user: User): Observable<User> {
    this.setStayConnected(user.stayConnected);
    return this.loginService.create(user);
  }

  public register(user: User): Observable<User> {
    return this.registerService.register(user);
  }

  public async loading(message: string): Promise<HTMLIonLoadingElement> {
    return await this.loadingService.show(message);
  }

  public setStayConnected(value: boolean) {
    this.loginService.stayConnected = value;
  }

  /********************************************************
   ******* MESSAGENS DE RETORNO DA CHAMADA HTTP ***********
   ********************************************************/
  public async success(
    user: User,
    loading: Promise<HTMLIonLoadingElement>,
    subscribe: Subscription
  ) {
    this.isLogin(user);
    await this.goToUserPage();
    await this.messageService.disable(loading, subscribe);
    this.messageService.success(user.message);
  }

  public error(
    error: HttpErrorResponse,
    loading: Promise<HTMLIonLoadingElement>,
    subscribe: Subscription
  ) {
    return this.messageService.error(error, loading, subscribe);
  }

  private isLogin(user: User): void {
    if (this.activeRoute === 'login') {
      this.helpsService.delay(
        () => this.loginService.storesTokenDatabaseOrSession(user),
        2500
      );
    }
  }

  private async goToUserPage(): Promise<number> {
    switch (this.activeRoute) {
      case 'login':
        return this.authRoute();
      case 'recover':
        return this.recoverService.goToLoginPage();
      case 'register':
        return this.registerService.goToLoginPage();
    }
  }

  private authRoute(): number | PromiseLike<number> {
    return this.helpsService.delay(
      async () => await this.authService.unauthenticatedUserAllowLoginRoute(),
      2500
    );
  }
}
