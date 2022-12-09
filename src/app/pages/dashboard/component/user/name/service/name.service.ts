import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BreadcrumbsService } from 'src/app/header/breadcrumbs/service/breadcrumbs.service';
import { User } from 'src/app/interface';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class NameService extends HttpService<User> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private location: Location,
    private breadcrumbsService: BreadcrumbsService,
    private usersService: AdminUsersService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public set setName(user: User) {
    this.usersService.getUsers.firstName = user?.firstName;
    this.usersService.getUsers.lastName = user?.lastName;
    this.usersService.getUsers.slug = user?.slug;
    this.usersService.getUsers.name = user?.name;
    this.usersService.setUsers = this.usersService.getUsers;
  }

  public name(user: User): Observable<User | number[]> {
    return this.patch(user, 'management/name').pipe(
      tap((user_: User) => {
        this.setName = user_;
        this.updateUsersUrl(user_);
      })
    );
  }

  public updateUsersUrl(user: User): void {
    const url = `/painel-de-controle/admin/usuario/${user?.slug}`;
    this.breadcrumbsService.setEvent(url);
    this.location.replaceState(url);
  }
}
