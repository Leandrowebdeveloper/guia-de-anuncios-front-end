import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Messages, User } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { tap } from 'rxjs/operators';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';
import { UserBlockade } from '../interface';
import { MessagesService } from '../../../messages/service/messages.service';

@Injectable()
export class UserBlockadeService extends HttpService<
  Pick<User, UserBlockade | 'message'>
> {
  constructor(
    http: HttpClient,
    public override storageService: StorageService,
    private usersService: AdminUsersService,
    private userMessageService: MessagesService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public set setBlockade(value: boolean) {
    if (value && this.usersService.getUsers) {
      this.usersService.getUsers.blockade = value;
      this.usersService.setUsers = this.usersService.getUsers;
    }
  }

  public blockade(
    user: Pick<User, UserBlockade | 'id' | 'message'>
  ): Observable<Pick<User, UserBlockade | 'message'>> {
    if (user && user?.id) {
      return this.patch(user, 'management/blockade').pipe(
        tap((data: Pick<User, UserBlockade | 'message'>) => {
          this.setBlockade = data?.blockade;
          this.userMessageService.setUserMessage =
            data.messages as unknown as Messages;
        })
      );
    }
    return this.create(user, 'management/blockade').pipe(
      tap((data: Required<Pick<User, UserBlockade | 'message'>>) => {
        this.setBlockade = data?.blockade;
        this.userMessageService.setUserMessage =
          data.messages as unknown as Messages;
      })
    );
  }
}
