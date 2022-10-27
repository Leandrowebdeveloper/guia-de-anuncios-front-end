import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Image, User } from 'src/app/interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BreadcrumbsService } from 'src/app/header/breadcrumbs/service/breadcrumbs.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends HttpService<User> {
  public drop = new EventEmitter<User>(undefined);
  public deleted = new EventEmitter<User>(undefined);
  private users = new BehaviorSubject<User>(undefined);
  constructor(
    private messageService: MessageService,
    private loadingService: LoadingService,
    http: HttpClient,
    public storageService: StorageService,
    private location: Location,
    private breadcrumbsService: BreadcrumbsService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public get userObservable(): Observable<User> {
    return this.users.asObservable();
  }

  public get getUsers(): User {
    return this.users.value;
  }

  public set setUsers(value: User) {
    this.users.next(value);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public get avatar(): Image {
    return this.users.value?.image;
  }

  public set avatar(value: Image) {
    this.users.value.image = value;
    this.users.next(this.users.value);
  }

  public set setState(value: boolean) {
    this.users.value.state = value;
    this.users.next(this.users.value);
  }

  public set setUpdatedAt(value: string) {
    this.users.value.updatedAt = value;
    this.users.next(this.users.value);
  }

  public set setBlockade(value: boolean) {
    this.users.value.blockade = value;
    this.users.next(this.users.value);
  }

  public set setLevel(value: string) {
    if (value === '1' || value === '2') {
      this.users.value.level = value;
      this.users.next(this.users.value);
    }
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public get getSlug() {
    return this.getUsers?.slug;
  }

  public set setSlug(user: User) {
    this.users.value.slug = user?.slug;
    this.setUsers = this.users?.value;
  }

  public set setDelete(user: User) {
    this.users.value.deletedAt = user?.deletedAt;
    this.setUsers = this.users?.value;
  }

  public async showLoading(message: string): Promise<HTMLIonLoadingElement> {
    return await this.loadingService.show(message);
  }

  public name(user: User): Observable<User | number[]> {
    return this.patch(user, 'management/name').pipe(
      tap((user_: User) => {
        this.users.value.firstName = user_?.firstName;
        this.users.value.lastName = user_?.lastName;
        this.users.value.slug = user_?.slug;
        this.users.value.name = user_?.name;
        this.setUsers = this.users.value;
        this.updateUsersUrl(this.users.value);
      })
    );
  }

  public restore(user: User): Observable<User | number[]> {
    return this.patch(user, 'management/restore').pipe(
      tap((user_: User) => setTimeout(() => this.drop.emit(user_), 4000))
    );
  }

  public searchBy(searchBy: object): Observable<User[]> {
    return this.search(`management/search`, searchBy);
  }

  public password(user: User): Observable<User | number[]> {
    return this.patch(user, 'management/password');
  }

  public state(user: User): Observable<User | number[]> {
    return this.patch(user, 'management/state').pipe(
      tap((user_: User) => {
        this.setState = user_?.state;
        this.setUpdatedAt = user_?.updatedAt;
      })
    );
  }

  public blockade(user: User): Observable<User | number[]> {
    return this.patch(user, 'management/blockade').pipe(
      tap((user_: User) => (this.setBlockade = user_?.blockade))
    );
  }

  public level(user: User): Observable<User | number[]> {
    return this.patch(user, 'management/level').pipe(
      tap((user_: User) => (this.setLevel = user_?.level))
    );
  }

  public delete(user: User): Observable<User> {
    return this.destroy(user, `management/`).pipe(
      tap((user_: User) => setTimeout(() => this.deleted.emit(user_), 3600))
    );
  }

  public dropd(user: User): Observable<User> {
    return this.destroy(user, `management/drop`).pipe(
      tap((user_: User) => setTimeout(() => this.drop.emit(user_), 3600))
    );
  }

  public email(user: User): Observable<User | number[]> {
    return this.patch(user, 'management/email');
  }

  public async message(
    user: User,
    loading: Promise<HTMLIonLoadingElement>,
    subscribe?: Subscription,
    time?: number
  ): Promise<number> {
    return await this.messageService.success(
      user?.message,
      loading,
      subscribe,
      time
    );
  }

  public async error(
    error: HttpErrorResponse,
    loading: Promise<HTMLIonLoadingElement>,
    subscribe: Subscription
  ) {
    return this.messageService.error(error, loading, subscribe);
  }

  public updateUsersUrl(user: User): void {
    const url = `/painel-de-controle/admin/manutencao/usuario/${user?.slug}`;
    this.breadcrumbsService.setEvent(url);
    this.location.replaceState(url);
  }
}
