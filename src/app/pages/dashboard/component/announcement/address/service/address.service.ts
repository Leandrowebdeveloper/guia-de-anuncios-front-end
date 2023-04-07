import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { Address } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable()
export class AddressService extends HttpService<
  Address & { password: string }
> {
  private addressEvent = new EventEmitter<Address | null>(undefined);
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    private managementAnnouncementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `address`;
  }

  public get getAddressEvent() {
    return this.addressEvent.asObservable();
  }

  public set setAddress(address: Address | null) {
    if (this.managementAnnouncementService.getAnnouncement) {
      this.managementAnnouncementService.getAnnouncement.address = address;
      this.managementAnnouncementService.setAnnouncement =
        this.managementAnnouncementService.getAnnouncement;
    }
    this.addressEvent.emit(address);
  }

  public mask(address: Pick<Address, 'zip_code'>): string | null {
    if (typeof address.zip_code === 'number') {
      return String(address.zip_code).replace(
        /^(\d\d)(\d\d\d)(\d\d\d)/,
        '$1.$2-$3'
      );
    }
    return (
      address?.zip_code &&
      address.zip_code.replace(/^(\d\d)(\d\d\d)(\d\d\d)/, '$1.$2-$3')
    );
  }

  public address(address: Address & { password: string }): Observable<Address> {
    address.zip_code = Number(String(address?.zip_code).replace(/[\.\-]/g, ''));
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

  public delete(address: Address & { password: string }): Observable<
    Address & {
      password: string;
    }
  > {
    return this.destroy(address).pipe(
      tap((): null => (this.setAddress = null))
    );
  }
}
