import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class EmailService extends HttpService<
  Required<Pick<User, '_csrf' | 'email' | 'slug' | 'password'>>
> {
  constructor(http: HttpClient, public storageService: StorageService) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public email(
    user: Required<Pick<User, '_csrf' | 'email' | 'slug' | 'password'>>
  ): Observable<
    Required<Pick<User, '_csrf' | 'email' | 'slug' | 'password'>> | number[]
  > {
    return this.patch(user, 'management/email');
  }
}
