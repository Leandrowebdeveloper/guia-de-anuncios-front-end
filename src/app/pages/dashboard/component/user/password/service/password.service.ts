import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from 'src/app/interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { HttpService } from 'src/app/services/http/http.service';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';
import { UserPassword } from '../interface';

@Injectable()
export class AdminPasswordService extends HttpService<
  Required<
    Pick<
      User & { passwordCurrent: string },
      UserPassword | 'isPassword' | 'message'
    >
  >
> {
  constructor(
    http: HttpClient,
    public override storageService: StorageService,
    private usersService: AdminUsersService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  private set setIsPassword(value: boolean) {
    if (value && this.usersService.getUsers) {
      this.usersService.getUsers.isPassword = value;
      this.usersService.setUsers = this.usersService.getUsers;
    }
  }

  public password(
    user: Required<
      Pick<
        User & { passwordCurrent: string },
        UserPassword | 'isPassword' | 'message'
      >
    >
  ) {
    return this.patch(user, 'management/password').pipe(
      tap(
        (
          user_: Required<
            Pick<
              User & { passwordCurrent: string },
              UserPassword | 'isPassword' | 'message'
            >
          >
        ): boolean => (this.setIsPassword = user_?.isPassword)
      )
    );
  }
}
