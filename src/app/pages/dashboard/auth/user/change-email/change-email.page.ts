import { Observable, Subject, EMPTY } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.page.html',
  styleUrls: ['./change-email.page.scss'],
})
export class ChangeEmailPage implements OnInit {
  public location!: string[];
  public error!: string;
  public user$!: Observable<User>;
  public error$ = new Subject<boolean>();
  private user!: User;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getUser();
    this.changeEmail();
    this.getLocation();
    this.filterUrl();
  }

  public getLocation(): void {
    if (this.authService.getSlug) {
      this.location = [
        '/painel-de-controle',
        'admin',
        'usuario',
        this.authService.getSlug,
      ];
    }
  }

  private filterUrl(): void {
    if (this.authService.getLevel === '2') {
      this.location.splice(1, 1);
    }
  }

  private getUser(): void {
    this.user = this.activatedRoute.snapshot.data['changeEmail'];
  }

  private changeEmail(): Observable<User> | void {
    if (this.user) {
      const { token, slug } = this.user;
      return (this.user$ = this.authService
        .emailIsValidToChange({ token, slug })
        .pipe(
          tap((user: User) => this.success(user)),
          catchError((error: HttpErrorResponse) => this.setErrors(error))
        ));
    }
  }

  private success(user: User): void {
    this.authService.setEmail = user;
  }

  private setErrors(error: HttpErrorResponse): Observable<never> {
    this.error = error?.error;
    this.error$.next(true);
    return EMPTY;
  }
}
