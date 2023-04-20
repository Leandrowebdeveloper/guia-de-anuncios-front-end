import { Category } from './../../../../../../interface/index';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Announcement, AuthSocial, Plan } from 'src/app/interface';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable()
export class AnnouncementGuard {
  constructor(
    private managementAnnouncementService: ManagementAnnouncementService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Announcement> | void {
    const { slug, acao } = route.params;
    if (slug && !acao) {
      return this.managementAnnouncementService
        .findOne(`requirement/management/`, { slug })
        .pipe(
          tap((data: Announcement | any) => {
            if (data) {
              data.category = {
                ...data?.categoryAnnouncement?.category,
              } as Category;
              data.plan = {
                ...data?.announcement?.user?.plan,
              } as Plan;
              data.authSocial = {
                ...data?.announcement?.user?.authSocial,
              } as AuthSocial;
              delete data?.announcement;
              delete data?.categoryAnnouncement?.catAdId;
              // delete data?.categoryAnnouncement?.category;
              delete data?.categoryAnnouncement?.announcementId;
              delete data?.categoryAnnouncement?.message;
              this.managementAnnouncementService.setAnnouncement = data;
              // return data;
            }
          }),
          catchError((error: HttpErrorResponse) => {
            console.log(error);
            return EMPTY;
          })
        );
    }
  }
}
