import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

import { HttpService } from 'src/app/services/http/http.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { User } from 'src/app/interface';

@Injectable()
export class LoginAdminService extends HttpService<User> {
  public readonly attrButton: AttrButton = {
    route: '/entrar',
    icon: 'log-in',
    label: 'Entrar',
    aria: 'Acessar o sistema.',
    title: 'Acessar o sistema.',
  };
  private $stayConnected!: boolean;
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    private messageService: MessageService,
    private authService: AuthService,
    private helpsService: HelpsService
  ) {
    super(http, storageService);
    this.setApi = `login-admin`;
  }

  public get stayConnected() {
    return this.$stayConnected;
  }

  public set stayConnected(value: boolean) {
    this.$stayConnected = value;
  }

  public storesTokenDatabaseOrSession(user: User): void {
    if (this.stayConnected) {
      return this.setUserAndTokenInDatabase(user);
    }
    return this.setUserAndTokenInSession(user);
  }

  public isLogin(user: User): void {
    this.helpsService.delay(
      () => this.storesTokenDatabaseOrSession(user),
      2500
    );
  }

  public sendLoginData(user: User): Observable<User> {
    this.stayConnected = user.stayConnected ? true : false;
    return this.create(user);
  }

  public error(
    error: HttpErrorResponse,
    loading: Promise<HTMLIonLoadingElement>,
    subscribe: Subscription
  ) {
    return this.messageService.error(error, loading, subscribe);
  }

  public async goToUserPage(): Promise<number> {
    return this.helpsService.delay(
      async () => await this.authService.unauthenticatedUserAllowLoginRoute(),
      2500
    );
  }

  private setTokenSession(user: User): void {
    return sessionStorage.setItem('token', user?.token);
  }

  private async setTokenDatabase(user: User): Promise<void> {
    return await this.storageService.setAuthUserToken(user);
  }

  private setAuthUser(user: User): User {
    this.authService.setUser = user;
    return (this.authService.setIsLoggedIn = user);
  }

  private setUserAndTokenInSession(user: User): void {
    this.setAuthUser(user);
    this.setTokenSession(user);
    this.storageService.setAuthToken = user?.token;
  }

  private setUserAndTokenInDatabase(user: User): void {
    this.setAuthUser(user);
    this.setTokenDatabase(user);
    this.storageService.setAuthToken = user?.token;
  }
}
