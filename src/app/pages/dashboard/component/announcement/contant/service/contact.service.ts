import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ManagementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService extends HttpService<Contact> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private managementService: ManagementService
  ) {
    super(http, storageService);
    this.setApi = `auth-announcement/contact`;
  }

  public set setContact(contact: Contact) {
    this.managementService.getAnnouncement.contact = contact;
    this.managementService.setAnnouncement =
      this.managementService.getAnnouncement;
  }

  public contact(contact: Contact): Observable<Contact | number[]> {
    if (contact?.id) {
      return this.patch(contact).pipe(
        tap((contact_: Contact) => (this.setContact = contact_))
      );
    } else {
      return this.create(contact).pipe(
        tap((contact_: Contact) => (this.setContact = contact_))
      );
    }
  }
}
