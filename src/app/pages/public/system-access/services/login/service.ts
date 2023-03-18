import { User } from 'src/app/interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class LoginService extends HttpService<User> {
  private $stayConnected: boolean;
  constructor(
    public http: HttpClient,
    public storageService: StorageService,
    private authService: AuthService
  ) {
    super(http, storageService);
    this.setApi = `login`;
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

  private setTokenSession(user: User): void {
    return sessionStorage.setItem('token', user?.token);
  }

  private async setTokenDatabase(user: User): Promise<void> {
    return await this.storageService.setAuthUserToken(user);
  }

  private setAuthUser(user: User): User {
    this.authService.setUser = user;
    this.authService.setUrlApi();
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
