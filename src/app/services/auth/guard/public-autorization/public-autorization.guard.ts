import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root',
})
export class PublicAutorizationGuard {
  private isLoggedIn!: boolean;
  private $isLoggedIn!: Subscription;
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(): Promise<boolean> | boolean {
    if (this.isLoggedIn) {
      return this.router.navigate(['/inicio']);
    }
    return true;
  }
  canLoad(): boolean {
    this.$isLoggedIn = this.authService.loggedInAsObservable.subscribe({
      next: (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
        setTimeout(() => this.$isLoggedIn.unsubscribe(), 2500);
      },
    });
    return true;
  }
}
