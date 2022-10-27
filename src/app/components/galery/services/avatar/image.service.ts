import { catchError, tap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UsersService } from 'src/app/pages/dashboard/administrator/users/services/users.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AvatarService extends HttpService<Image> {
  constructor(
    public http: HttpClient,
    public storageService: StorageService,
    private authService: AuthService,
    private usersService: UsersService
  ) {
    super(http, storageService);
    this.setApi = `images`;
  }

  public avatarUsersDestroy(avatar: Image): Observable<number | Image> {
    return this.destroy(avatar, 'avatar').pipe(
      tap((image: Image) => this.setUsersAvatar(image)),
      catchError((error) => EMPTY)
    );
  }

  public avatarUserDestroy(avatar: Image): Observable<number | Image> {
    return this.destroy(avatar, 'avatar').pipe(
      tap((image: Image) => this.setAuthAvatar(image)),
      catchError((error) => EMPTY)
    );
  }

  public setUsersAvatar(result: Image): Image {
    const avatar: Image = result;
    this.usersService.avatar = avatar;
    return avatar;
  }

  public setAuthAvatar(result: Image): Image {
    const avatar: Image = result;
    this.authService.avatar = avatar;
    return avatar;
  }
}
