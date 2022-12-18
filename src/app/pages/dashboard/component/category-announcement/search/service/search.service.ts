import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Search } from 'src/app/interface';

@Injectable()
export class SearchCategoryAnnouncementService {
  public result = new EventEmitter<any[]>(undefined);
  private search$ = new BehaviorSubject<Search>(undefined);
  constructor() {
    this.setSearchBy = 'name';
  }

  public get getSearchBy(): Observable<Search> {
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
