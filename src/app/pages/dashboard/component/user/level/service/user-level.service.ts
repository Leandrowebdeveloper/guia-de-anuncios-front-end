import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from 'src/app/interface';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class UserLevelService extends HttpService<
  Required<Pick<User, '_csrf' | 'slug' | 'password' | 'level'>>
> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private usersService: AdminUsersService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public set setLevel(value: '1' | '2') {
    this.usersService.getUsers.level = value;
    this.usersService.setUsers = this.usersService.getUsers;
  }

  public level(
    user: Required<Pick<User, '_csrf' | 'slug' | 'password' | 'level'>>
  ): Observable<Required<User>> {
    return this.patch(user, 'management/level').pipe(
      tap((user_: Required<User>): '1' | '2' => (this.setLevel = user_?.level))
    );
  }
}
