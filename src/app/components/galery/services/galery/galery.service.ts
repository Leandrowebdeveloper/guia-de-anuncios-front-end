import { catchError, tap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Galery } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AuthAdvertService } from 'src/app/pages/dashboard/auth/pages/advert/service/advert.service';

@Injectable({
  providedIn: 'root',
})
export class GaleryService extends HttpService<Galery> {
  constructor(public http: HttpClient, public storageService: StorageService) {
    super(http, storageService);
    this.setApi = `auth-advert`;
  }

  public galeryDestroy(galery: Galery): Observable<number | Galery> {
    return this.destroy(galery, 'galery');
  }
}
