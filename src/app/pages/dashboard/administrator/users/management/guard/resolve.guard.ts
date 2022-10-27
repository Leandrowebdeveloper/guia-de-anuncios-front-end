import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { User } from 'src/app/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersService } from '../../services/users.service';

@Injectable()
export class UserManagementResolver implements Resolve<User> {
  constructor(private router: Router, private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const { id } = route.params;
    return this.usersService.requirement(`management/${id}`).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        this.router.navigate(['/erro']);
        return EMPTY;
      })
    );
  }
}
