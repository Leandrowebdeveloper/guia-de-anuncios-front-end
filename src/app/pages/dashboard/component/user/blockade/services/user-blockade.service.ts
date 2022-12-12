import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserMessage } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { tap } from 'rxjs/operators';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';
import { UserBlockade } from '../interface';
import { UserMessageService } from '../../user-message/service/user-message.service';

@Injectable()
export class UserBlockadeService extends HttpService<
  Required<Pick<User, UserBlockade>>
> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private usersService: AdminUsersService,
    private userMessageService: UserMessageService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public set setBlockade(value: boolean) {
    this.usersService.getUsers.blockade = value;
    this.usersService.setUsers = this.usersService.getUsers;
  }

  public blockade(
    user: Required<Pick<User, UserBlockade | 'id'>>
  ): Observable<Required<Pick<User, UserBlockade>> | number[]> {
    if (user?.id) {
      return this.patch(user, 'management/blockade').pipe(
        tap((data: Required<Pick<User, UserBlockade | 'message'>>) => {
          this.setBlockade = data?.blockade;
          this.userMessageService.setUserMessage =
            data.userMessage as unknown as UserMessage;
        })
      );
    }
    return this.create(user, 'management/blockade').pipe(
      tap((data: Required<Pick<User, UserBlockade | 'message'>>) => {
        this.setBlockade = data?.blockade;
        this.userMessageService.setUserMessage =
          data.userMessage as unknown as UserMessage;
      })
    );
  }
}
