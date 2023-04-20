import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class PagseguroService extends HttpService<{ [key: string]: any }> {
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService
  ) {
    super(http, storageService);
    this.setApi = `ckeckout`;
  }
  public getPagseguro(data: any): Observable<{ [key: string]: any }> {
    return this.create(data);
  }
}
