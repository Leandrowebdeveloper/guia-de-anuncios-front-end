import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { BreadcrumbsService } from 'src/app/header/breadcrumbs/service/breadcrumbs.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersService extends HttpService<User> {
  private deleted = new EventEmitter<Pick<User, 'id'>>(undefined);
  private users = new BehaviorSubject<User | void>(undefined);
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    private authService: AuthService,
    private location: Location,
    private breadcrumbsService: BreadcrumbsService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public get deleteObservable(): Observable<Pick<User, 'id'>> {
    return this.deleted.asObservable();
  }

  public get userObservable(): Observable<User | void> {
    return this.users && this.users.asObservable();
  }

  public get getUsers(): User | void {
    return this.users?.value;
  }

  private get getCsrf(): string {
    if (this.authService.getUser) {
      return this.authService.getUser._csrf;
    } else {
      return '';
    }
  }

  public set setDelete(user: Pick<User, 'id'>) {
    this.deleted.emit(user);
  }

  public set setUsers(value: User) {
    this.users.next(value);
  }

  public restore(
    user: Pick<User, 'password' | '_csrf' | 'slug'>
  ): Observable<User> {
    user._csrf = this.getCsrf;
    return this.patch(user as User, 'management/restore');
  }

  public searchBy(searchBy: object): Observable<User[]> {
    return this.search(`management/search`, searchBy);
  }

  public dropd(user: User): Observable<User> {
    user._csrf = this.getCsrf;
    return this.destroy(user, `management/drop`);
  }

  public updateUsersUrl(user: Pick<User, 'slug'>): void {
    const url = `/painel-de-controle/admin/usuario/${user?.slug}`;
    this.breadcrumbsService.setEvent(url);
    this.location.replaceState(url);
  }
}
