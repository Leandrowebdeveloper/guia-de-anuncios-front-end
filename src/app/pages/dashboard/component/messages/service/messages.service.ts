import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Messages } from 'src/app/interface';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable()
export class MessagesService extends HttpService<Messages> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private usersService: AdminUsersService,
    private managementAnnouncementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `messages`;
  }

  public set setUserMessage(value: Messages) {
    const count: number = this.usersService.getUsers.messages.length;
    const i = this.usersService.getUsers.messages.findIndex(
      (item) => item?.id === value?.id
    );
    if (i === -1) {
      if (count > 0) {
        this.usersService.getUsers.messages.unshift(value);
      } else {
        this.usersService.getUsers.messages = [value];
      }
    } else {
      this.usersService.getUsers.messages.splice(i, 1, value);
    }
    this.usersService.setUsers = this.usersService.getUsers;
  }

  public send(
    message: Required<Messages>,
    action: 'users' | 'announcement'
  ): Observable<Messages | number[]> {
    if (message?.id) {
      return this.patch(message, 'management').pipe(
        tap((message_: Messages) => {
          if (action === 'users') {
            return (this.setUserMessage = message_);
          }
          if (action === 'announcement') {
            return (this.managementAnnouncementService.setAnnouncementMessage =
              message_);
          }
        })
      );
    }
    delete message.id;
    return this.create(message, 'management').pipe(
      tap((message_: Messages) => {
        if (action === 'users') {
          return (this.setUserMessage = message_);
        }
        if (action === 'announcement') {
          return (this.managementAnnouncementService.setAnnouncementMessage =
            message_);
        }
      })
    );
  }

  public close(message: Messages): Observable<Messages> {
    return this.destroy(message, 'management');
  }
}
