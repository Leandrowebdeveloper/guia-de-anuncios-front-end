import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class EmailService extends HttpService<
  Pick<User, '_csrf' | 'email' | 'slug' | 'password' | 'message'>
> {
  constructor(
    http: HttpClient,
    public override storageService: StorageService
  ) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public email(
    user: Pick<User, '_csrf' | 'email' | 'slug' | 'password' | 'message'>
  ): Observable<
    Pick<User, '_csrf' | 'email' | 'slug' | 'password' | 'message'>
  > {
    return this.patch(user, 'management/email');
  }
}
