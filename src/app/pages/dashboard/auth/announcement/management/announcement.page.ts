import { Router } from '@angular/router';
import {
  User,
  Category,
  Announcement,
  AnnouncementRoute,
  Galery,
} from 'src/app/interface/index';
import { NavController, IonContent } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ManagementAnnouncementService } from './service/management.service';
import { GaleryAnnouncementService } from '../../../component/announcement/galery/service/galery.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content!: IonContent;
  public announcement$!: Observable<Announcement | void>;
  public user$!: Observable<User | void>;
  public category$!: Observable<Category[]>;
  public isAnnouncement = true;
  public isRoute!: AnnouncementRoute | null;
  public hasHeader!: boolean;
  public csrf!: string;

  private $updateGalery!: Subscription;
  constructor(
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
    this.init();
    this.updateGalery();
  }

  public isHeader(e: boolean): void {
    this.hasHeader = e;
  }

  public toggleRoute(): void {
    this.isAnnouncement = !this.route.url.includes('dias-da-semana');
    this.isRoute = this.route.url.includes('dias-da-semana')
      ? 'WorkDays'
      : null;
  }

  public back(): void {
    this.navCtrl.back();
  }

  private init(): void {
    this.announcement$ =
      this.managementAnnouncementService.announcementObservable;
  }

  private getUser(): void {
    this.user$ = this.authService.userObservable;
  }

  private updateGalery(): Subscription {
    return (this.$updateGalery =
      this.galeryAnnouncementService.galeryAsObservable.subscribe({
        next: (galery: void | Galery) => {
          if (galery) {
            if (
              this.managementAnnouncementService?.galery &&
              this.managementAnnouncementService?.galery.length > 0
            ) {
              this.managementAnnouncementService.addItemGalery = galery;
            } else {
              this.managementAnnouncementService.setGalery = [galery];
            }
          }
        },
      }));
  }
}
