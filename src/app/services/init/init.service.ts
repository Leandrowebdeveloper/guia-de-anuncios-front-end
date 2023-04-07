import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Observable } from 'rxjs';

import { Category, User } from 'src/app/interface';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class InitService extends HttpService<{
  user: User;
  category: Category[];
}> {
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService
  ) {
    super(http, storageService);
    this.setApi = `init`;
  }

  public boot(): Observable<{ user: User; category: Category[] }> {
    return this.findAll();
  }
}
