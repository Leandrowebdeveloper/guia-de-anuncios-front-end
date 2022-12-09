import { tap, delay, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, Subscription, EMPTY } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { User, UserSearch } from 'src/app/interface';
import { AdminUsersService } from '../../services/admin-users.service';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { SearchService } from 'src/app/components/search/service/service.service';
import {
  InfiniteScrollCustomEvent,
  Platform,
  SearchbarCustomEvent,
} from '@ionic/angular';

@Component({
  selector: 'app-enabled-item-user',
  templateUrl: './enabled-item-user.page.html',
  styleUrls: ['./enabled-item-user.page.scss', '../../users.page.scss'],
})
export class EnabledItemUserPage implements OnInit, OnDestroy {
  public users$: Observable<User[]>;
  public users: User[];
  public error = new Subject<boolean>();
  public endListUser = true;

  public sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  public menssage: boolean;
  public isMobile: boolean;

  private $users: Subscription;
  private $search: Subscription;
  private $searchBy: Subscription;

  private limit = 12;
  private offset = 0;
  private page = 1;
  private searchBy: object;

  constructor(
    private usersService: AdminUsersService,
    private helpService: HelpsService,
    private searchService: SearchService,
    private plt: Platform
  ) {}

  private get getSearchBy(): object {
    return this.searchBy;
  }

  private set setSearchBy(value: UserSearch) {
    const build = JSON.parse(`{ "${value}":"null" }`);
    this.searchBy = build;
  }

  ngOnInit() {
    this.findUsers();
    this.initSearchBy();
    this.plt.ready().then(() => {
      this.isMobile = this.plt.is('mobile');
    });
  }

  ngOnDestroy(): void {
    this.$searchBy.unsubscribe();
  }

  public refresher(event: any): void {
    this.findUsers();
    event.target.complete();
  }

  public hideMenssage() {
    this.menssage = true;
  }

  public search(event: SearchbarCustomEvent): Subscription {
    if (event?.target?.value.length >= 3) {
      const data = this.setDataSearch(event?.target?.value);
      return (this.$search = this.usersService
        .searchBy(data)
        .subscribe((user: User[]) => {
          this.searchService.search = user;
          setTimeout(() => this.$search.unsubscribe(), 2000);
        }));
    }
  }

  public findMoreUsers(event: any): Subscription {
    this.calculatePagination();
    return (this.$users = this.usersService
      .index(`management/`, { limit: this.limit, offset: this.offset })
      .subscribe(
        (user: User[]) => this.success(event, user),
        (error: HttpErrorResponse) => this.error.next(true),
        () => this.helpService.delay(this.$users.unsubscribe(), 2000)
      ));
  }

  private orderBy(search: UserSearch): void {
    if (!this.users) {
      return;
    }
    switch (search) {
      case 'name':
        this.users.sort((a, b) => a?.name < b?.name && -1);
        break;
      case 'createdAt':
        this.users.sort((a, b) => a?.createdAt > b?.createdAt && -1);
        break;
      case 'updatedAt':
        this.users.sort((a, b) => a?.updatedAt > b?.updatedAt && -1);
        break;
      case 'blockade':
        this.users.sort((a, b) => a?.blockade > b?.blockade && -1);
        break;
      case 'state':
        this.users.sort((a, b) => a?.state > b?.state && -1);
        break;
    }
  }

  private initSearchBy(): void {
    this.$searchBy = this.searchService.getSearchBy.subscribe(
      (filter: UserSearch) => {
        if (
          filter === 'firstName' ||
          filter === 'lastName' ||
          filter === 'email'
        ) {
          this.setSearchBy = filter;
        } else {
          this.setSearchBy = 'firstName';
          this.orderBy(filter);
        }
      }
    );
  }

  private setDataSearch(value: string): object {
    let data: object;
    if (this.getSearchBy) {
      this.searchBuild(value);
      data = this.getSearchBy;
    } else {
      data = { firstName: value };
    }
    return data;
  }

  private searchBuild(value: string) {
    const key = Object.keys(this.getSearchBy)[0];
    this.getSearchBy[key] = value;
  }

  private findUsers(): Observable<User[]> {
    return (this.users$ = this.usersService
      .index(`management/`, { limit: this.limit, offset: this.offset })
      .pipe(
        delay(300),
        tap((user: User[]) => {
          setTimeout(() => (this.menssage = false), 300);
          return (this.users = user);
        }),
        catchError((error: HttpErrorResponse) => {
          setTimeout(() => (this.menssage = false), 300);
          this.error.next(true);
          return EMPTY;
        })
      ));
  }

  private calculatePagination(): void {
    this.page += 1;
    this.offset = (this.page - 1) * this.limit;
    return;
  }

  private success(event: InfiniteScrollCustomEvent, user: User[]): void {
    this.setMoreData(user);
    this.updateScrollEvent(event, user);
    return;
  }

  private updateScrollEvent(
    event: InfiniteScrollCustomEvent,
    user: User[]
  ): void {
    event.target.complete();
    if (user.length < 8) {
      this.endListUser = false;
      event.target.disabled = true;
    }
    return;
  }

  private setMoreData(user: User[]): void {
    return user.forEach((item: User) => this.users.push(item));
  }
}
