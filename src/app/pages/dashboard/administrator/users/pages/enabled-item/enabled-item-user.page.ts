import { tap, delay, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, Subscription, EMPTY } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { User, Search } from 'src/app/interface';
import { AdminUsersService } from '../../services/admin-users.service';
import { HelpsService } from 'src/app/services/helps/helps.service';
import {
  InfiniteScrollCustomEvent,
  Platform,
  SearchbarCustomEvent,
} from '@ionic/angular';
import { SearchUserService } from 'src/app/pages/dashboard/component/user/search/service/search.service';

export type EnabledItemUser =
  | 'name'
  | 'plan'
  | 'image'
  | 'level'
  | 'slug'
  | 'state'
  | 'blockade'
  | 'id'
  | 'createdAt'
  | 'updatedAt';

@Component({
  selector: 'app-enabled-item-user',
  templateUrl: './enabled-item-user.page.html',
  styleUrls: ['./enabled-item-user.page.scss', '../../users.page.scss'],
})
export class EnabledItemUserPage implements OnInit, OnDestroy {
  public users$: Observable<Pick<User, EnabledItemUser>[]>;
  public users: Pick<User, EnabledItemUser>[];
  public error = new Subject<boolean>();
  public endListUser = true;

  public sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  public menssage: boolean;
  public isMobile: boolean;

  private $users: Subscription;
  private $search: Subscription;
  private $searchBy: Subscription;
  private $update: Subscription;
  private $delete: Subscription;

  private limit = 12;
  private offset = 0;
  private page = 1;
  private searchBy: object;

  constructor(
    private adminUsersService: AdminUsersService,
    private helpService: HelpsService,
    private searchUserService: SearchUserService,
    private plt: Platform
  ) {}

  private get getSearchBy(): object {
    return this.searchBy;
  }

  private set setSearchBy(value: Search) {
    const build = JSON.parse(`{ "${value}":"null" }`);
    this.searchBy = build;
  }

  ngOnInit() {
    this.findUsers();
    this.initSearchBy();
    this.plt.ready().then(() => {
      this.isMobile = this.plt.is('mobile');
    });
    this.update();
    this.delete();
  }

  ngOnDestroy(): void {
    this.$searchBy.unsubscribe();
    this.$update.unsubscribe();
    this.$delete.unsubscribe();
  }

  /*********************************************************************************** */
  public refresher(event: any): void {
    this.findUsers();
    event.target.complete();
  }

  public hideMenssage() {
    this.menssage = true;
  }

  /************************************************************************************ */
  public search(event: SearchbarCustomEvent): Subscription {
    if (event?.target?.value.length >= 3) {
      const data = this.setDataSearch(event?.target?.value);
      return (this.$search = this.adminUsersService.searchBy(data).subscribe({
        next: (user: Pick<User, EnabledItemUser>[]) => {
          this.searchUserService.search = user;
          setTimeout(() => this.$search.unsubscribe(), 2000);
        },
      }));
    }
  }

  public findMoreUsers(event: any): Subscription {
    this.calculatePagination();
    return (this.$users = this.adminUsersService
      .index(`management/`, { limit: this.limit, offset: this.offset })
      .subscribe({
        next: (user: Pick<User, EnabledItemUser>[]) =>
          this.success(event, user),
        error: (error: HttpErrorResponse) => this.error.next(true),
        complete: () => this.helpService.delay(this.$users.unsubscribe(), 2000),
      }));
  }

  private orderBy(search: Search): void {
    if (!this.users) {
      return;
    }
  }

  private initSearchBy(): void {
    this.$searchBy = this.searchUserService.getSearchBy.subscribe({
      next: (filter: Search) => {
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
      },
    });
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

  private findUsers(): Observable<Pick<User, EnabledItemUser>[]> {
    return (this.users$ = this.adminUsersService
      .index(`management/`, { limit: this.limit, offset: this.offset })
      .pipe(
        delay(300),
        tap((user: Pick<User, EnabledItemUser>[]) => {
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

  private success(
    event: InfiniteScrollCustomEvent,
    user: Pick<User, EnabledItemUser>[]
  ): void {
    this.setMoreData(user);
    this.updateScrollEvent(event, user);
    return;
  }

  private updateScrollEvent(
    event: InfiniteScrollCustomEvent,
    user: Pick<User, EnabledItemUser>[]
  ): void {
    event.target.complete();
    if (user.length < 8) {
      this.endListUser = false;
      event.target.disabled = true;
    }
    return;
  }

  private setMoreData(user: Pick<User, EnabledItemUser>[]): void {
    return user.forEach((item: User) => this.users.push(item));
  }

  private delete(): Subscription {
    return (this.$delete = this.adminUsersService.deleteObservable.subscribe({
      next: (user: Pick<User, 'id'>) => {
        if (user) {
          const i = this.users.findIndex(
            (item: Pick<User, 'id'>) => item?.id === user?.id
          );
          this.users.splice(i, 1);
        }
      },
    }));
  }

  private update(): void {
    this.$update = this.adminUsersService.userObservable.subscribe({
      next: (user: User) => {
        if (user && this.users?.length > 0) {
          this.setUser(user);
        }
      },
    });
  }

  private setUser(user: User) {
    const i = this.users.findIndex((item: User) => item?.id === user?.id);
    const response: Pick<User, EnabledItemUser> = this.filter(user);
    this.users.splice(i, 1, response);
  }

  private filter(user: User): Pick<User, EnabledItemUser> {
    return {
      name: user?.name,
      plan: user?.plan,
      image: user?.image,
      level: user?.level,
      slug: user?.slug,
      state: user?.state,
      blockade: user?.blockade,
      id: user?.id,
      createdAt: user?.createdAt,
      updatedAt: user?.updatedAt,
    };
  }
}
