import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, EMPTY, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Announcement, User } from 'src/app/interface/index';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/service/auth-announcement.service';

@Injectable()
export class AnnouncementResolve implements Resolve<Announcement[]>, OnDestroy {
  private $userId: Subscription;
  constructor(
    private authAnnouncementService: AuthAnnouncementService,
    private authService: AuthService
  ) {}

  ngOnDestroy(): void {
    this.$userId.unsubscribe();
  }

  resolve(): Observable<Announcement[]> {
    let userId: number;
    this.$userId = this.authService.userObservable.subscribe(
      (user: Pick<User, 'id'>) => (userId = user?.id)
    );

    return this.authAnnouncementService.getAnnouncementFindOne({ userId }).pipe(
      map((item) =>
        item.map((data) => {
          data.category = {
            ...data?.categoryAnnouncement?.category,
            associationId: data?.categoryAnnouncement?.id,
          };
          delete data?.categoryAnnouncement;
          delete data?.user?.plan;
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
