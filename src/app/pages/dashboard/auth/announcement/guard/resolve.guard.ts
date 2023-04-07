import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, EMPTY, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Announcement, Category, User } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/service/auth-announcement.service';

@Injectable()
export class AnnouncementResolve implements OnDestroy {
  private _userId!: number;
  private $userId!: Subscription;
  constructor(
    private authAnnouncementService: AuthAnnouncementService,
    private authService: AuthService
  ) {}

  ngOnDestroy(): void {
    this.$userId.unsubscribe();
  }

  public get userId(): number {
    return this._userId;
  }
  public set userId(value: number) {
    this._userId = value;
  }

  resolve(): Observable<Announcement[]> | void {
    this.$userId = this.authService.userObservable.subscribe({
      next: (user: User | void) => {
        if (user?.id) {
          this.userId = user.id;
        }
      },
    });
    if (this.userId) {
      return this.authAnnouncementService
        .getAnnouncementFindOne({ userId: this.userId })
        .pipe(
          map((item) =>
            item.map((data: Announcement) => {
              data.category = {
                ...data?.categoryAnnouncement?.category,
                associationId: data?.categoryAnnouncement?.id,
              } as Category;
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
}
