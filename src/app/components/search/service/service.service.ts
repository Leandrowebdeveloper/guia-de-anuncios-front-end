import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserSearch } from 'src/app/interface';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    public result = new EventEmitter<any[]>(undefined);
    private search$ = new BehaviorSubject<UserSearch>(undefined);
    constructor() {
        this.setSearchBy = 'firstName';
    }

    public get getSearchBy(): Observable<UserSearch> {
        return this.search$.asObservable();
    }

    public get search() {
        return this.result.asObservable();
    }

    public set search(value: any) {
        this.result.emit(value);
    }

    public set setSearchBy(searchBy: UserSearch) {
        this.search$.next(searchBy);
    }
}
