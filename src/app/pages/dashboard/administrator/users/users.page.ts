import { HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, tap } from 'rxjs/operators';
import { UsersService } from './services/users.service';
import { User, UserSearch } from 'src/app/interface';
import { Observable, EMPTY, Subject, Subscription, of } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  InfiniteScrollCustomEvent,
  IonContent,
  ModalController,
  NavController,
  SearchbarCustomEvent,
} from '@ionic/angular';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { SearchService } from 'src/app/components/search/service/service.service';
import { Router } from '@angular/router';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss'],
})
export class UsersPage implements OnInit, OnDestroy {
  // @ViewChild(IonInfiniteScroll, { static: true })
  // infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  public users$: Observable<User[]>;
  public users: User[];
  public usersDrop$: Observable<User[]>;
  public usersDrop: User[];
  public error = new Subject<boolean>();
  public endListUser = true;

  public fab = false;

  public sizeSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  public toggleListUser: boolean;

  public menssage: boolean;

  private $users: Subscription;
  private $search: Subscription;
  private $searchBy: Subscription;
  private $drop: Subscription;
  private $dropd: Subscription;

  private limit = 12;
  private offset = 0;
  private page = 1;
  private searchBy: object;

  constructor(
    private usersService: UsersService,
    private helpService: HelpsService,
    private searchService: SearchService,
    private route: Router,
    private modalController: ModalController,
    private navCtrl: NavController
  ) {}

  private get getSearchBy(): object {
    return this.searchBy;
  }

  private set setSearchBy(value: UserSearch) {
    const build = JSON.parse(`{ "${value}":"null" }`);
    this.searchBy = build;
  }

  ngOnInit() {
    this.getUrl();
    this.findUsers();
    this.update();
    this.initSearchBy();
    this.drop();
    this.deleted();
  }

  ngOnDestroy(): void {
    this.$searchBy.unsubscribe();
    this.$users.unsubscribe();
    this.$drop.unsubscribe();
    this.$dropd.unsubscribe();
  }

  public refresher(event: any): void {
    this.findUsers();
    event.target.complete();
  }

  public hideMenssage() {
    this.menssage = true;
  }

  public logScrolling(event: any): void {
    if (event.detail.scrollTop > 500) {
      this.fab = true;
    } else {
      this.fab = false;
    }
  }

  public toTop(): Promise<void> {
    return this.content.scrollToTop(1000);
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
    const url = this.toggleListUser ? 'deleted' : '';
    return (this.$users = this.usersService
      .index(`management/${url}`, { limit: this.limit, offset: this.offset })
      .subscribe(
        (user: User[]) => this.success(event, user),
        (error: HttpErrorResponse) => this.error.next(true),
        () => this.helpService.delay(this.$users.unsubscribe(), 2000)
      ));
  }

  public async restore(user: User): Promise<void> {
    const { _csrf, password, slug } = user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'restore',
        label: 'Restaurar',
        user: {
          _csrf,
          password,
          slug,
        },
      },
    });
    return await modal.present();
  }

  // Destroy
  public async destroy(user: User): Promise<void> {
    const { _csrf, password, slug } = user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'drop',
        label: 'Excluir',
        user: {
          _csrf,
          password,
          slug,
        },
      },
    });
    return await modal.present();
  }

  private getUrl(): void {
    this.toggleListUser =
      this.route.routerState.snapshot.url.includes('excluidos');
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
    const url = this.toggleListUser && 'deleted';
    if (url) {
      return (this.usersDrop$ = this.usersService
        .index(`management/${url}`, { limit: this.limit, offset: this.offset })
        .pipe(
          tap((user: User[]) => {
            setTimeout(() => (this.menssage = false), 300);
            return (this.usersDrop = user);
          }),
          delay(300),
          catchError((error: HttpErrorResponse) => {
            setTimeout(() => (this.menssage = false), 300);
            this.error.next(true);
            return EMPTY;
          })
        ));
    }
    return (this.users$ = this.usersService
      .index(`management/`, { limit: this.limit, offset: this.offset })
      .pipe(
        tap((user: User[]) => {
          setTimeout(() => (this.menssage = false), 300);
          return (this.users = user);
        }),
        delay(500),
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
    // this.setMoreData(user);
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
    if (this.toggleListUser) {
      return user.forEach((item: User) => this.usersDrop.push(item));
    }
    return user.forEach((item: User) => this.users.push(item));
  }

  private update(): Subscription {
    return (this.$users = this.usersService.userObservable.subscribe(
      (user: User) => {
        if (user) {
          const i = this.getIndexUserCurrent(user);
          this.switchBetweenAddAndUpdate(user, i);
        }
      }
    ));
  }

  private getIndexUserCurrent(user: User): number {
    if (this.users) {
      const index = this.users.findIndex(
        (item: User) => item?.slug === user?.slug
      );
      return index;
    }
  }

  private getIndexUserDropCurrent(user: User): number {
    if (this.usersDrop) {
      const index = this.usersDrop.findIndex(
        (item: User) => item?.slug === user?.slug
      );
      return index;
    }
  }

  private switchBetweenAddAndUpdate(user: User, i: number): void {
    if (this.users) {
      this.users.splice(i, 1, user);
    }
  }

  private drop(): void {
    this.$drop = this.usersService.drop.subscribe((user: User) => {
      if (user && this.toggleListUser) {
        this.usersDrop.splice(this.getIndexUserDropCurrent(user), 1);
      }
    });
  }

  private deleted(): void {
    this.$dropd = this.usersService.deleted.subscribe((user: User) => {
      if (user && this.users) {
        const result: User[] = this.users.splice(
          this.getIndexUserCurrent(user),
          1
        );
        if (result.length > 0) {
          return this.navCtrl.navigateBack([
            '/painel-de-controle',
            'admin',
            'usuarios',
          ]);
        }
      }
    });
  }
}
