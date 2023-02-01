import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';

@Injectable()
export class AvatarService extends HttpService<Image> {
  constructor(
    public http: HttpClient,
    public storageService: StorageService,
    private authService: AuthService,
    private usersService: AdminUsersService
  ) {
    super(http, storageService);
    this.setApi = '/api/avatar';
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public get avatar(): Image {
    return this.usersService.getUsers?.image;
  }

  public set avatar(value: Required<Image>) {
    this.usersService.getUsers.image = value;
    this.usersService.setUsers = this.usersService.getUsers;
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  public delete(avatar: Required<Image>): Observable<number | Image> {
    return this.destroy(avatar).pipe(
      tap((image: Image) => this.setAuthAvatar(image))
    );
  }

  public setAuthAvatar(avatar: Required<Image>): void {
    if (this.avatar?.userId === avatar?.userId) {
      this.avatar = avatar;
    }
    if (this.authService?.avatar?.userId === avatar?.userId) {
      this.authService.avatar = avatar;
    }
  }
}
