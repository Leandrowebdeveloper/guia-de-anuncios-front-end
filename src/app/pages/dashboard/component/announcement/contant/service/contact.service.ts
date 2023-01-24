import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable()
export class ContactAnnouncementService extends HttpService<Contact> {
  private contactEvent = new EventEmitter<Contact>(undefined);
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private managementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `auth-announcement/contact`;
  }

  public get getContactEvent() {
    return this.contactEvent.asObservable();
  }

  public set setContact(contact: Required<Contact>) {
    if (this.managementService.getAnnouncement) {
      this.managementService.getAnnouncement.contact = contact;
      this.managementService.setAnnouncement =
        this.managementService.getAnnouncement;
    }
    this.contactEvent.emit(contact);
  }

  public contact(contact: Required<Contact>): Observable<Contact | number[]> {
    if (contact?.id) {
      return this.patch(contact).pipe(
        tap(
          (contact_: Required<Contact>) =>
            (this.setContact = this.filter(contact_))
        )
      );
    } else {
      return this.create(contact).pipe(
        tap((contact_: Required<Contact>) => (this.setContact = contact_))
      );
    }
  }

  public filter(contact: Required<Contact>): Required<Contact> {
    const result: Contact = {
      phone: null,
      whatsapp: null,
      mobilePhone: null,
      // eslint-disable-next-line no-underscore-dangle
      _csrf: contact?._csrf,
      announcementId: contact?.announcementId,
      id: contact?.id,
    };
    if (contact.phone) {
      // eslint-disable-next-line no-param-reassign
      result.phone = Number(String(contact.phone).replace(/[\(\)\-]/g, ''));
    }
    if (contact.whatsapp) {
      // eslint-disable-next-line no-param-reassign
      result.whatsapp = Number(
        String(contact.whatsapp).replace(/[\(\)\-]/g, '')
      );
    }
    if (contact.mobilePhone) {
      // eslint-disable-next-line no-param-reassign
      result.mobilePhone = Number(
        String(contact.mobilePhone).replace(/[\(\)\-]/g, '')
      );
    }
    return result as Required<Contact>;
  }
}
