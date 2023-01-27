import { ActivatedRoute, Router } from '@angular/router';
import {
  User,
  Category,
  Announcement,
  AnnouncementRoute,
  Galery,
  CategoryAnnouncement,
} from 'src/app/interface/index';
import { NavController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ManagementAnnouncementService } from './service/management.service';
import { GaleryAnnouncementService } from '../../../component/announcement/galery/service/galery.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit, OnDestroy {
  public announcement$: Observable<Announcement>;
  public user$: Observable<User>;
  public category$: Observable<Category[]>;
  public isAnnouncement = true;
  public isRoute: AnnouncementRoute;
  public hasHeader: boolean;
  public csrf: string;

  private $updateGalery: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private managementAnnouncementService: ManagementAnnouncementService,
    private authService: AuthService,
    private navCtrl: NavController,
    private route: Router,
    private galeryAnnouncementService: GaleryAnnouncementService
  ) {}

  ngOnDestroy(): void {
    this.$updateGalery.unsubscribe();
  }

  ngOnInit() {
    this.toggleRoute();
    this.getUser();
    this.getAnnouncement();
    this.startAnnouncement();
    this.updateGalery();
  }

  public isHeader(e: boolean): void {
    this.hasHeader = e;
  }

  public toggleRoute(): void {
    this.isAnnouncement = !this.route.url.includes('horario-de-funcionamento');
    this.isRoute = this.route.url.includes('horario-de-funcionamento')
      ? 'WorkDays'
      : null;
  }

  public back(): void {
    this.navCtrl.back();
  }

  private getAnnouncement(): void {
    const { announcement } = this.activatedRoute.snapshot.data;
    this.managementAnnouncementService.setAnnouncement = announcement;
  }

  private startAnnouncement(): void {
    this.announcement$ =
      this.managementAnnouncementService.announcementObservable;
  }

  private getUser(): void {
    this.user$ = this.authService.userObservable;
  }

  private updateGalery(): Subscription {
    return (this.$updateGalery =
      this.galeryAnnouncementService.galeryAsObservable.subscribe(
        (galery: Galery) => {
          if (galery) {
            if (this.managementAnnouncementService.galery.length > 0) {
              this.managementAnnouncementService.addItemGalery = galery;
            } else {
              this.managementAnnouncementService.setGalery = [galery];
            }
          }
        }
      ));
  }
}
