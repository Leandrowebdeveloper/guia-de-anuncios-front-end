import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Category } from 'src/app/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryService } from '../../services/category.service';

@Injectable()
export class CategoryManagementResolver implements Resolve<Category> {
  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Category> {
    const { id } = route.params;
    return this.categoryService.requirement(`management/${id}`).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        this.router.navigate(['/erro']);
        return EMPTY;
      })
    );
  }
}
