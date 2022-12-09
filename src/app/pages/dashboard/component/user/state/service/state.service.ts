import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from 'src/app/interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';

@Injectable()
export class StateService extends HttpService<User> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private usersService: AdminUsersService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public set setState(value: boolean) {
    this.usersService.getUsers.state = value;
    this.usersService.setUsers = this.usersService.getUsers;
  }

  public set setUpdatedAt(value: string) {
    this.usersService.getUsers.updatedAt = value;
    this.usersService.setUsers = this.usersService.getUsers;
  }

  public state(user: User): Observable<User | number[]> {
    return this.patch(user, 'management/state').pipe(
      tap((user_: User) => {
        this.setState = user_?.state;
        this.setUpdatedAt = user_?.updatedAt;
      })
    );
  }
}
