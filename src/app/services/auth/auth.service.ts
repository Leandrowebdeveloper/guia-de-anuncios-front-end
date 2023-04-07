import { Image, User } from 'src/app/interface';
import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../http/http.service';
import { HelpsService } from '../helps/helps.service';
import { StorageService } from '../storage/storage.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends HttpService<User> {
  private $isLoggedIn = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<User | void>(undefined);

  constructor(
    http: HttpClient,
    public override storageService: StorageService,
    private helpsService: HelpsService,
    private router: Router,
    private navCtrl: NavController
  ) {
    super(http, storageService);
    this.setUrlApi();
  }

  public get getPLan() {
    return this.getUser?.plan;
  }

  public get getCsrf(): string | void {
    if (this.user?.value?._csrf) {
      return this.user?.value?._csrf;
    }
  }

  public get userObservable(): Observable<User | void> {
    return this.user && this.user.asObservable();
  }

  public get getUser(): User | void {
    return this.user?.value;
  }

  public set setUser(user: User) {
    if (user) {
      this.user.next(user);
    }
  }

  public get getSlug() {
    return this.getUser?.slug;
  }

  public set setSlug(user: User) {
    if (user && this.user.value) {
      this.user.value.slug = user?.slug;
      this.setUser = this.user?.value;
    }
  }

  public set setBlockade(value: boolean) {
    if (value && this.user.value) {
      this.user.value.blockade = value;
      this.setUser = this.user?.value;
    }
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  public get avatar(): any {
    if (this.getUser && this.getUser?.image) {
      return this.getUser.image;
    }
  }

  public set avatar(image: Image) {
    if (image && this.user.value) {
      this.user.value.image = image;
      this.setUser = this.user.value;
    }
  }

  public get getLevel() {
    return this.getUser?.level;
  }

  public get getEmail() {
    return this.getUser?.email;
  }

  public set setEmail(user: User) {
    if (user && this.user.value) {
      this.user.value.email = user?.email;
      this.setUser = this.user.value;
    }
  }

  public set setIsPassword(value: boolean) {
    if (value && this.user.value) {
      this.user.value.isPassword = value;
      this.setUser = this.user.value;
    }
  }

  public setUrlApi() {
    return (this.setApi = `auth`);
  }

  public name(user: User): Observable<User> {
    return this.patch(user, 'name').pipe(
      tap((user_: User) => {
        if (this.user.value) {
          this.user.value.firstName = user_?.firstName;
          this.user.value.lastName = user_?.lastName;
          this.user.value.slug = user_?.slug;
          this.user.value.name = user_?.name;
          this.setUser = this.user.value;
        }
      })
    );
  }

  public email(user: User): Observable<User> {
    return this.patch(user, 'email');
  }

  public emailIsValidToChange(
    params: Required<{ token: string; slug: string }>
  ) {
    return this.findOne(`change-email/`, params).pipe(
      tap((user_: User) => {
        this.setEmail = user_;
      })
    );
  }

  public password(user: User): Observable<User> {
    return this.patch(user, 'password').pipe(
      tap((user_: User) => (this.setIsPassword = user_?.isPassword))
    );
  }

  public delete(user: User): Observable<User> {
    return this.destroy(user).pipe(
      tap((user_: User) => {
        this.setIsLoggedIn = user_;
        this.setUser = user_;
        this.clearsSessionAndDatabaseStorage();
        return this.goToLoginPage();
      })
    );
  }

  private clearsSessionAndDatabaseStorage(): void {
    this.removeTokenStorageSession();
    this.removeTokenStorageDatabase();
  }

  private removeTokenStorageSession(): void {
    return sessionStorage.removeItem('token');
  }

  private removeTokenStorageDatabase(): void {
    return this.storageService.clean();
  }

  private async goToLoginPage(): Promise<number> {
    return this.helpsService.delay(
      async () => await this.navCtrl.navigateForward('/entrar'),
      2500
    );
  }

  /*****************************************
   ***********                 *************
   *****************************************/

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public get loggedInAsObservable(): Observable<boolean> {
    return this.$isLoggedIn.asObservable();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public get isLoggedIn() {
    return this.$isLoggedIn.value;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public set isLoggedIn(value: boolean) {
    this.$isLoggedIn.next(value);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public set setIsLoggedIn(user: User) {
    if (user) {
      this.isLoggedIn = user?.auth;
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public unauthenticatedUserAllowLoginRoute(): Promise<boolean> {
    const url = this.router.url;
    if (this.isLoggedIn && url.toLowerCase() === '/entrar') {
      return this.navCtrl.navigateForward('/painel-de-controle');
    } else {
      return this.navCtrl.navigateForward('/painel-de-controle/admin');
    }
  }
}
