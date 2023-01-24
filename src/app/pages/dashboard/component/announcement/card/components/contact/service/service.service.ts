import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ContactAnnouncementService } from '../../../../contant/service/contact.service';

@Injectable()
export class DeleteContactService extends HttpService<
  Pick<Contact & { password: string }, '_csrf' | 'id' | 'password' | 'message'>
> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private contactService: ContactAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `admin-announcement/contact`;
  }

  public delete(
    contact: Pick<Contact & { password: string }, '_csrf' | 'id' | 'password'>
  ): Observable<
    Pick<
      Contact & {
        password: string;
      },
      '_csrf' | 'id' | 'password' | 'message'
    >
  > {
    return this.destroy(contact).pipe(
      tap(() => (this.contactService.setContact = null))
    );
  }
}
