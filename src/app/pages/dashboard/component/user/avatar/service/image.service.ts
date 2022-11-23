import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AvatarService extends HttpService<Image> {
  constructor(
    public http: HttpClient,
    public storageService: StorageService,
    private authService: AuthService
  ) {
    super(http, storageService);
    this.setApi = `images`;
  }

  public delete(avatar: Image): Observable<number | Image> {
    return this.destroy(avatar, 'avatar').pipe(
      tap((image: Image) => this.setAuthAvatar(image))
    );
  }

  public setAuthAvatar(result: Image): Image {
    const avatar: Image = result;
    this.authService.avatar = avatar;
    return avatar;
  }
}
