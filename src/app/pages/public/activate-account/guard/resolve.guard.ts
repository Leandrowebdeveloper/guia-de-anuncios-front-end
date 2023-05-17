import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';

@Injectable()
export class ActivateAccountResolver {
  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): string | UrlTree {
    const { token } = route.params;
    if (token && typeof token === 'string') {
      return token;
    }
    return this.router.parseUrl('/');
  }
}
