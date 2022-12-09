import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/app/interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable()
export class AdminPasswordService extends HttpService<User> {
  constructor(http: HttpClient, public storageService: StorageService) {
    super(http, storageService);
    this.setApi = `admin`;
  }

  public password(user: User): Observable<User | number[]> {
    return this.patch(user, 'management/password');
  }
}
