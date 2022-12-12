import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UserMessage } from 'src/app/interface';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';

@Injectable()
export class UserMessageService extends HttpService<UserMessage> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private usersService: AdminUsersService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public set setUserMessage(value: UserMessage) {
    const count: number = this.usersService.getUsers.userMessage.length;
    const i = this.usersService.getUsers.userMessage.findIndex(
      (item) => item?.id === value?.id
    );
    if (i === -1) {
      if (count > 0) {
        this.usersService.getUsers.userMessage.unshift(value);
      } else {
        this.usersService.getUsers.userMessage = [value];
      }
    } else {
      this.usersService.getUsers.userMessage.splice(i, 1, value);
    }
    this.usersService.setUsers = this.usersService.getUsers;
  }

  public send(
    message: Required<UserMessage>
  ): Observable<UserMessage | number[]> {
    if (message?.id) {
      return this.patch(message, 'management/message').pipe(
        tap((message_: UserMessage) => (this.setUserMessage = message_))
      );
    }
    return this.create(message, 'management/message').pipe(
      tap((message_: UserMessage) => (this.setUserMessage = message_))
    );
  }

  public close(message: UserMessage): Observable<UserMessage> {
    return this.destroy(message, 'management/message');
  }
}
