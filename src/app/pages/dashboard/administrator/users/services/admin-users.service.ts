import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { BreadcrumbsService } from 'src/app/header/breadcrumbs/service/breadcrumbs.service';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersService extends HttpService<User> {
  public deleted = new EventEmitter<User>(undefined);
  private users = new BehaviorSubject<User>(undefined);
  constructor(
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

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  public restore(user: User): Observable<User | number[]> {
    return this.patch(user, 'management/restore');
  }

  public searchBy(searchBy: object): Observable<User[]> {
    return this.search(`management/search`, searchBy);
  }

  public dropd(user: User): Observable<User> {
    return this.destroy(user, `management/drop`);
  }

  public updateUsersUrl(user: User): void {
    const url = `/painel-de-controle/admin/usuario/${user?.slug}`;
    this.breadcrumbsService.setEvent(url);
    this.location.replaceState(url);
  }
}
