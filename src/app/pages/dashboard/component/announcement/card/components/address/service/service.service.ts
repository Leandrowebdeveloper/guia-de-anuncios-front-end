import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Observable } from 'rxjs';
import { AddressService } from '../../../../address/service/address.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class DeleteAddressService extends HttpService<
  Pick<Address & { password: string }, '_csrf' | 'id' | 'password' | 'message'>
> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private addressService: AddressService
  ) {
    super(http, storageService);
    this.setApi = `admin-announcement/address`;
  }

  public delete(
    address: Pick<Address & { password: string }, '_csrf' | 'id' | 'password'>
  ): Observable<
    Pick<
      Address & {
        password: string;
      },
      '_csrf' | 'id' | 'password' | 'message'
    >
  > {
    return this.destroy(address).pipe(
      tap(() => (this.addressService.setAddress = null))
    );
  }
}
