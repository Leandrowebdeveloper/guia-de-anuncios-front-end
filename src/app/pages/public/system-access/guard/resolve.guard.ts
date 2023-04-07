import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { LoginService } from '../services/login/login.service';
import { RecoverService } from '../services/recover/service';
import { RegisterService } from '../services/register/service';
import { User } from 'src/app/interface';

@Injectable()
export class SystemAccessResolver {
  constructor(
    private recoverService: RecoverService,
    private loginService: LoginService,
    private registerService: RegisterService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> | undefined {
    const router = this.activeRoute(route);
    switch (router) {
      case 'entrar/admin':
        return this.loginService.requirement().pipe(
          catchError((): Observable<never> => {
            this.router.parseUrl('/404');
            return EMPTY;
          })
        );
      case 'entrar':
        return this.loginService.requirement().pipe(
          catchError((): Observable<never> => {
            this.router.parseUrl('/404');
            return EMPTY;
          })
        );
      case 'recuperar-senha':
        return this.recoverService.requirement().pipe(
          catchError((): Observable<never> => {
            this.router.parseUrl('/404');
            return EMPTY;
          })
        );
      case 'cadastrar':
        return this.registerService.requirement().pipe(
          catchError((): Observable<never> => {
            this.router.parseUrl('/404');
            return EMPTY;
          })
        );
      default:
        return undefined;
    }
  }

  private activeRoute(route: ActivatedRouteSnapshot): string | undefined {
    return route?.parent?.routeConfig?.path;
  }
}
