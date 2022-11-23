import { ActivatedRoute } from '@angular/router';
import {
  User,
  Category,
  Announcement,
  AnnouncementRoute,
} from 'src/app/interface/index';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ManagementService } from './service/management.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  public announcement$: Observable<Announcement>;
  public user$: Observable<User>;
  public category$: Observable<Category[]>;
  public isAnnouncement = true;
  public isRoute: AnnouncementRoute;
  public hasHeader: boolean;
  public csrf: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private managementService: ManagementService,
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getUser();
    this.getAnnouncement();
    this.startAnnouncement();
  }

  public isHeader(e: boolean) {
    this.hasHeader = e;
  }

  public toggleRoute(route: AnnouncementRoute) {
    this.isAnnouncement = false;
    switch (route) {
      case 'OpeningHours':
        this.isRoute = route;
        break;
      case 'galery':
        this.isRoute = route;
        break;
      case 'announcement':
        this.isAnnouncement = true;
        this.isRoute = null;
        break;
    }
  }

  public back(): void {
    this.navCtrl.back();
  }

  private getAnnouncement(): void {
    const { announcement } = this.activatedRoute.snapshot.data;
    this.managementService.setAnnouncement = announcement;
  }

  private startAnnouncement() {
    this.announcement$ = this.managementService.announcementObservable;
  }

  private getUser(): void {
    this.user$ = this.authService.userObservable;
  }
}
