import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private category = new BehaviorSubject<Category[]>([]);

  public get getCategories(): Category[] {
    return this.category?.value;
  }

  public set setCategories(value: Category[]) {
    this.category.next(value);
  }

  public asObservable(): Observable<Category[]> {
    return this.category.asObservable();
  }
}
