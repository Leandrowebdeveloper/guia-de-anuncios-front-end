import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { User } from 'src/app/interface';
import { LoginAdminService } from '../services/login-admin/login-admin.service';

@Injectable()
export class SystemAccessAdminResolver implements Resolve<User> {
  constructor(
    private loginAdminService: LoginAdminService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.loginAdminService.requirement().pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        this.router.parseUrl('/404');
        return EMPTY;
      })
    );
  }
}
