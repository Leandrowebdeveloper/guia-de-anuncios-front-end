import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable()
export class ContactAnnouncementService extends HttpService<
  Contact & { password: string }
> {
  private contactEvent = new EventEmitter<Contact | null>(undefined);
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    private managementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `contact`;
  }

  public get getContactEvent() {
    return this.contactEvent.asObservable();
  }

  public set setContact(contact: (Contact & { password: string }) | null) {
    if (this.managementService.getAnnouncement) {
      this.managementService.getAnnouncement.contact = contact;
      this.managementService.setAnnouncement =
        this.managementService.getAnnouncement;
    }
    this.contactEvent.emit(contact);
  }

  public contact(contact: Contact & { password: string }): Observable<Contact> {
    if (contact?.id) {
      return this.patch(contact).pipe(
        tap(
          (contact_: Contact & { password: string }) =>
            (this.setContact = this.filter(contact_))
        )
      );
    } else {
      return this.create(contact).pipe(
        tap(
          (contact_: Contact & { password: string }) =>
            (this.setContact = contact_)
        )
      );
    }
  }

  public filter(
    contact: Contact & { password: string }
  ): Contact & { password: string } {
    const result: Contact = {
      phone: null,
      whatsapp: null,
      mobilePhone: null,
      _csrf: contact?._csrf,
      announcementId: contact?.announcementId,
      id: contact?.id,
    };
    if (contact.phone) {
      result.phone = Number(String(contact.phone).replace(/[\(\)\-]/g, ''));
    }
    if (contact.whatsapp) {
      result.whatsapp = Number(
        String(contact.whatsapp).replace(/[\(\)\-]/g, '')
      );
    }
    if (contact.mobilePhone) {
      result.mobilePhone = Number(
        String(contact.mobilePhone).replace(/[\(\)\-]/g, '')
      );
    }
    return result as Contact & { password: string };
  }

  public delete(
    contact: Contact & { password: string }
  ): Observable<Contact & { password: string }> {
    return this.destroy(contact).pipe(
      tap((): null => (this.setContact = null))
    );
  }
}
