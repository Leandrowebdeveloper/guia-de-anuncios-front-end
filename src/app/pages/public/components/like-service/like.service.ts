import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class LikeService extends HttpService<Like> {
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService
  ) {
    super(http, storageService);
    this.setApi = `announcement`;
  }

  public createLike(data: Like): Observable<Like> {
    return this.create(data, 'like');
  }

  public updateLike(data: Like): Observable<Like> {
    return this.patch(data, 'like');
  }
}
