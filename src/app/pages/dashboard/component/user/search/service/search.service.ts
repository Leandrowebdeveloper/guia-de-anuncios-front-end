import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Search } from 'src/app/interface';

@Injectable()
export class SearchUserService {
  public result = new EventEmitter<any[]>(undefined);
  private search$ = new BehaviorSubject<Search | void>(undefined);
  constructor() {
    this.setSearchBy = 'firstName';
  }

  public get getSearchBy(): Observable<Search | void> {
    return this.search$.asObservable();
  }

  public get search() {
    return this.result.asObservable();
  }

  public set search(value: any) {
    this.result.emit(value);
  }

  public set setSearchBy(searchBy: Search) {
    this.search$.next(searchBy);
  }
}
