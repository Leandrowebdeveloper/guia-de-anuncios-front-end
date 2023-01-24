import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Announcement } from 'src/app/interface/index';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable()
export class AnnouncementGuard implements Resolve<Announcement> {
  constructor(
    private managementAnnouncementService: ManagementAnnouncementService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Announcement> {
    const { slug, acao } = route.params;

    if (slug && !acao) {
      return this.managementAnnouncementService
        .findOne(`requirement/management/`, { slug })
        .pipe(
          tap((data: Announcement) => {
            data.category = {
              ...data?.categoryAnnouncement?.category,
            };
            data.plan = {
              ...data?.announcement?.user?.plan,
            };
            delete data?.announcement;
            delete data?.categoryAnnouncement?.catAdId;
            delete data?.categoryAnnouncement?.category;
            delete data?.categoryAnnouncement?.announcementId;
            delete data?.categoryAnnouncement?.message;
            return data;
          }),
          catchError((error: HttpErrorResponse) => {
            console.log(error);
            return EMPTY;
          })
        );
    }
  }
}
