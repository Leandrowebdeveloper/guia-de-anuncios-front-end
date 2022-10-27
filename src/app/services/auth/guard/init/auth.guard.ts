import { catchError, tap } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Resolve,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

import { Advert, Category, User } from 'src/app/interface';
import { InitService } from 'src/app/services/init/init.service';
import { AuthService } from '../../auth.service';
import { HomeService } from 'src/app/pages/public/home/services/home.service';
import { AdvertService } from 'src/app/pages/dashboard/administrator/Advert/services/advert.service';
import { AuthAdvertService } from 'src/app/pages/dashboard/auth/pages/advert/service/advert.service';

@Injectable({
  providedIn: 'root',
})
/**
 * @class AuthGuardi
 */
export class AuthGuard
  implements CanLoad, CanActivate, Resolve<User[] & Category[] & Advert[]>
{
  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private init: InitService,
    private router: Router,
    private homeService: HomeService,
    private authAdvertService: AuthAdvertService
  ) {}

  canActivate(): UrlTree {
    return;
  }

  resolve(): Observable<User[] & Category[] & Advert[]> {
    return this.init.boot().pipe(
      tap((init: User[] & Category[] & Advert[]) => {
        this.homeService.setIcons = init[1];
        this.authAdvertService.setAdvert = init[2];
        this.confirmAuthenticationAndSetUser(init[0]);
      }),
      catchError(() => {
        this.router.navigate(['/erro']);
        return EMPTY;
      })
    );
  }

  async canLoad(): Promise<boolean> {
    await this.storageService.init();
    await this.storageService.isToken();
    this.authService.isLoggedIn = !!this.storageService.getToken;
    return true;
  }

  private confirmAuthenticationAndSetUser(user: User): void {
    this.confirmAuthorization(user);
    this.authService.setUrlApi();
    this.authService.setUser = user;
  }

  private confirmAuthorization(user: User): boolean | UrlTree {
    const url =
      user.level === '1' ? '/painel-de-controle/admin' : '/painel-de-controle';
    if (!user?.auth) {
      this.authService.isLoggedIn = false;
      this.storageService.destroy('token');
      return this.router.parseUrl('/entrar');
    }
    return this.router.parseUrl(url);
  }
}
