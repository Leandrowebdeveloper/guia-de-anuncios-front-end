import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchAnnouncement } from 'src/app/interface';

@Injectable()
export class SearchAnnouncementService {
  public result = new EventEmitter<any[]>(undefined);
  private search$ = new BehaviorSubject<SearchAnnouncement>(undefined);

  constructor() {
    this.setSearchBy = 'title';
  }

  public get getSearchBy(): Observable<SearchAnnouncement> {
    return this.search$.asObservable();
  }

  public get search() {
    return this.result.asObservable();
  }

  public set search(value: any) {
    this.result.emit(value);
  }

  public set setSearchBy(searchBy: SearchAnnouncement) {
    this.search$.next(searchBy);
  }
}
