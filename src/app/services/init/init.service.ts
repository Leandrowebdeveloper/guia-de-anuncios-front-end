import { Advert } from './../../interface/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Observable } from 'rxjs';

import { Category, User } from 'src/app/interface';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
/**
 * @class InitService
 * @extends HttpService<User[] & Category[] & Advert[]>
 */
export class InitService extends HttpService<User[] & Category[] & Advert[]> {
  constructor(public http: HttpClient, public storageService: StorageService) {
    super(http, storageService);
    this.setApi = `init`;
  }

  public boot(): Observable<User[] & Category[] & Advert[]> {
    return this.findAll();
  }
}
