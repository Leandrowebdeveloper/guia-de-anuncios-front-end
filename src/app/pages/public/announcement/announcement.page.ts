import { ModalController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Announcement, User } from 'src/app/interface';
import { AnnouncementService } from './service/service.service';

import * as moment from 'moment';
import { MapsPage } from '../maps/maps.page';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  public announcement$: Observable<Announcement>;
  public error = new Subject<boolean>();

  public datetimes = moment().format();

  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private announcementService: AnnouncementService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.init();
  }

  public async showMaps(announcement: Announcement) {
    const modal = await this.modalController.create({
      component: MapsPage,
      componentProps: {
        announcement,
      },
    });
    return await modal.present();
  }

  private init(): Observable<Announcement> {
    const { slug } = this.activatedRoute.snapshot?.params;
    if (slug) {
      return (this.announcement$ = this.announcementService
        .findOne('show', { slug })
        .pipe(
          tap((item) => {
            item.user = {
              email: item?.announcement?.user?.email,
              plan: item?.announcement?.user?.plan,
            } as User;
            item.authSocial = { ...item?.announcement?.user?.authSocial };

            delete item?.announcement;
            delete item?.announcement?.user?.plan;
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
