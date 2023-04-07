import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchCategory } from 'src/app/interface';

@Injectable()
export class SearchCategoryAnnouncementService {
  public result = new EventEmitter<any[]>(undefined);
  private search$ = new BehaviorSubject<SearchCategory | void>(undefined);
  constructor() {
    this.setSearchCategoryBy = 'name';
  }

  public get getSearchCategoryBy(): Observable<SearchCategory | void> {
    return this.search$.asObservable();
  }

  public get search() {
    return this.result.asObservable();
  }

  public set search(value: any) {
    this.result.emit(value);
  }

  public set setSearchCategoryBy(searchBy: SearchCategory) {
    this.search$.next(searchBy);
  }
}
