import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { tap } from 'rxjs/operators';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';

@Injectable()
export class UserDestroyService extends HttpService<User> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private usersService: AdminUsersService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public delete(user: User): Observable<User> {
    return this.destroy(user, `management/`).pipe(
      tap((user_: User) =>
        setTimeout(() => this.usersService.deleted.emit(user_), 3600)
      )
    );
  }
}
