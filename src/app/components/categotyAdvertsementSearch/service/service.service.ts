import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategorySearch } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public result = new EventEmitter<any[]>(undefined);
  private search$ = new BehaviorSubject<CategorySearch>(undefined);
  constructor() {
    this.setSearchBy = 'name';
  }

  public get getSearchBy(): Observable<CategorySearch> {
    return this.search$.asObservable();
  }

  public get search() {
    return this.result.asObservable();
  }

  public set search(value: any) {
    this.result.emit(value);
  }

  public set setSearchBy(searchBy: CategorySearch) {
    this.search$.next(searchBy);
  }
}
