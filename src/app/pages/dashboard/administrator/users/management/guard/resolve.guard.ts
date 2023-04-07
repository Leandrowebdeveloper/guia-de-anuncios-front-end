import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { User } from 'src/app/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminUsersService } from '../../services/admin-users.service';

@Injectable()
export class UserManagementResolver {
  constructor(
    private router: Router,
    private usersService: AdminUsersService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const { id } = route.params;
    return this.usersService.requirement(`management/${id}`).pipe(
      tap((user: User) => (user.password = '')),
      catchError((error: HttpErrorResponse): Observable<never> => {
        this.router.navigate(['/erro']);
        return EMPTY;
      })
    );
  }
}
