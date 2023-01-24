import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Announcement } from 'src/app/interface/index';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/service/auth-announcement.service';

@Injectable()
export class AnnouncementResolve implements Resolve<Announcement[]> {
  constructor(
    private authAnnouncementService: AuthAnnouncementService,
    private authService: AuthService
  ) {}
  resolve(): Observable<Announcement[]> {
    const userId = this.authService.getUser.id;

    return this.authAnnouncementService.getAnnouncementFindOne({ userId }).pipe(
      map((item) =>
        item.map((data) => {
          data.category = {
            ...data?.categoryAnnouncement?.category,
            associationId: data?.categoryAnnouncement?.id,
          };
          delete data?.categoryAnnouncement;
          delete data.user.plan;
          return data;
        })
      ),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return EMPTY;
      })
    );
  }
}
