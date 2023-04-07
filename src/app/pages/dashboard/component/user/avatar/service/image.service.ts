import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image, User } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AdminUsersService } from 'src/app/pages/dashboard/administrator/users/services/admin-users.service';

@Injectable()
export class AvatarService extends HttpService<Image> {
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    private authService: AuthService,
    private adminUserService: AdminUsersService
  ) {
    super(http, storageService);
    this.setApi = 'avatar';
  }

  public get getUser(): Observable<void | User> {
    return this.authService.userObservable;
  }

  public get avatar(): any {
    if (
      this.adminUserService?.getUsers &&
      this.adminUserService?.getUsers?.image
    ) {
      return this.adminUserService.getUsers.image;
    }
  }

  public set avatar(value: Image) {
    if (this.adminUserService.getUsers) {
      this.adminUserService.getUsers.image = value;
      this.adminUserService.setUsers = this.adminUserService.getUsers;
    }
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  public delete(avatar: Image): Observable<number | Image> {
    return this.destroy(avatar).pipe(
      tap((image: Image) => this.setAuthAvatar(image))
    );
  }

  public setAuthAvatar(avatar: Image): void {
    this.avatar = avatar;
    this.authService.avatar = avatar;
  }
}
