import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Announcement, AuthSocial, User } from 'src/app/interface';
import { AnnouncementService } from './service/service.service';

import * as moment from 'moment';
import { GoogleMapsDirectionService } from 'src/app/services/google-maps/google-maps-direction.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  public announcement$!: Observable<Announcement>;
  public error = new Subject<boolean>();

  public datetimes = moment().format();
  public openTraceRoute!: boolean;

  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private announcementService: AnnouncementService,
    private googleMapsDirectionService: GoogleMapsDirectionService
  ) {}

  ngOnInit() {
    this.init();
  }

  public traceRoute() {
    this.googleMapsDirectionService.traceRoute();
  }

  private init(): Observable<Announcement> | void {
    const { slug } = this.activatedRoute.snapshot?.params;
    if (slug) {
      return (this.announcement$ = this.announcementService
        .findOne('show', { slug })
        .pipe(
          tap((item) => {
            this.googleMapsDirectionService.announcement = item;
            item.user = {
              email: item?.announcement?.user?.email,
              plan: item?.announcement?.user?.plan,
            } as User;
            item.authSocial = {
              ...item?.announcement?.user?.authSocial,
            } as AuthSocial;
            delete item?.announcement;
            delete item?.categoryAnnouncement;
            return item;
          }),
          catchError((error: HttpErrorResponse) => {
            this.error.next(true);
            return EMPTY;
          })
        ));
    }
  }
}
