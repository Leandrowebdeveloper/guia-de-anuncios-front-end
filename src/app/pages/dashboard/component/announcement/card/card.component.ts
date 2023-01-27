import { Observable, Subscription } from 'rxjs';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {
  Announcement,
  Galery,
  User,
  CategoryAnnouncement,
} from 'src/app/interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GaleryAnnouncementService } from '../galery/service/galery.service';
import { CategoryAnnouncementService } from '../../category-announcement/category/service/category.service';

@Component({
  selector: 'app-card-announcement-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardAnnouncementComponent implements OnInit, OnDestroy {
  @Input() announcement!: Announcement;
  public user$: Observable<User>;
  public hasHeader: boolean;

  private $update: Subscription;
  constructor(
    private authService: AuthService,
    private galeryAnnouncementService: GaleryAnnouncementService,
    private categoryAnnouncementService: CategoryAnnouncementService
  ) {}

  ngOnDestroy(): void {
    this.$update.unsubscribe();
  }

  ngOnInit(): void {
    this.user$ = this.authService.userObservable;
    this.updateGalery();
    this.updateCategory();
  }

  public isHeader(e: boolean): void {
    this.hasHeader = e;
  }

  private updateGalery(): Subscription {
    return (this.$update =
      this.galeryAnnouncementService.galeryAsObservable.subscribe(
        (galery: Galery) => {
          if (galery) {
            if (this.announcement.galery.length > 0) {
              this.announcement.galery.unshift(galery);
            } else {
              this.announcement.galery = [galery];
            }
          }
        }
      ));
  }
  private updateCategory() {
    return (this.$update =
      this.categoryAnnouncementService.getCategoryEvent.subscribe(
        (categoryAnnouncement: CategoryAnnouncement) => {
          if (categoryAnnouncement) {
            if (
              this.announcement?.id === categoryAnnouncement?.announcementId
            ) {
              this.announcement.category = categoryAnnouncement?.category;
            }
          }
        }
      ));
  }
}
