import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private icons = new BehaviorSubject<Category>(undefined);
  constructor() {}

  public get getIcons(): Category {
    return this.icons.value;
  }

  public set setIcons(value: Category) {
    this.icons.next(value);
  }

  public asObservable(): Observable<Category> {
    return this.icons.asObservable();
  }
}
