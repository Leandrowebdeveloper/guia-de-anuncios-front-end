import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Address } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ManagementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable({
  providedIn: 'root',
})
export class AddressService extends HttpService<Address> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private managementService: ManagementService
  ) {
    super(http, storageService);
    this.setApi = `auth-announcement/address`;
  }

  public set setAddress(address: Address) {
    this.managementService.getAnnouncement.address = address;
    this.managementService.setAnnouncement =
      this.managementService.getAnnouncement;
  }

  public address(address: Address): Observable<Address | number[]> {
    if (address?.id) {
      return this.patch(address).pipe(
        tap((address_: Address) => (this.setAddress = address_))
      );
    } else {
      return this.create(address).pipe(
        tap((address_: Address) => (this.setAddress = address_))
      );
    }
  }
}
