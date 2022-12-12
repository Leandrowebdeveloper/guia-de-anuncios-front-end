import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from 'src/app/interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';
import { UserState } from '../interface';

@Injectable()
export class StateService extends HttpService<Required<Pick<User, UserState>>> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private usersService: AdminUsersService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public set setState(user: Required<Pick<User, 'state' | 'updatedAt'>>) {
    this.usersService.getUsers.state = user?.state;
    this.usersService.getUsers.updatedAt = user?.updatedAt;
    this.usersService.setUsers = this.usersService.getUsers;
  }

  public state(
    user: Required<Pick<User, UserState>>
  ): Observable<User | number[]> {
    return this.patch(user, 'management/state').pipe(
      tap((user_: User) => {
        this.setState = user_;
      })
    );
  }
}
