import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { User } from 'src/app/interface';
import { RedefinePasswordService } from '../services/redefine-password.service';

@Injectable()
export class RedefinePasswordResolver {
  constructor(
    private router: Router,
    private redefineService: RedefinePasswordService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot & { params: { redefinePassword?: string } }
  ): Observable<User> | UrlTree {
    if (route.params?.redefinePassword) {
      return this.redefineService
        .requirement(route.params?.redefinePassword)
        .pipe(
          catchError((error): Observable<never> => {
            this.router.parseUrl('/404');
            return EMPTY;
          })
        );
    }
    return this.router.parseUrl('/');
  }
}
