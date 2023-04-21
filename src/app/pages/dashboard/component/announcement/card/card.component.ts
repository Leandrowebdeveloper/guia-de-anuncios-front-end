import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';
import { Observable, Subscription } from 'rxjs';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Announcement, User, CategoryAnnouncement } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CategoryAnnouncementService } from '../../category-announcement/category/service/category.service';

@Component({
  selector: 'app-card-announcement-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class AnnouncementCardComponent implements OnInit, OnDestroy {
  @Input() announcement!: Announcement;
  public auth$!: Observable<User | void>;
  public hasHeader!: boolean;

  private $updateCategory!: Subscription;
  private $updateAnnouncement!: Subscription;
  constructor(
    private authService: AuthService,
    private categoryAnnouncementService: CategoryAnnouncementService,
    private managementAnnouncementService: ManagementAnnouncementService
  ) {}

  ngOnDestroy(): void {
    this.$updateCategory.unsubscribe();
    this.$updateAnnouncement.unsubscribe();
  }

  ngOnInit(): void {
    this.loadUser();
    this.updateCategory();
    this.updateAnnouncement();
  }

  private loadUser() {
    this.auth$ = this.authService.userObservable;
  }

  public isHeader(e: boolean): void {
    this.hasHeader = e;
  }

  private updateCategory(): Subscription {
    return (this.$updateCategory =
      this.categoryAnnouncementService.getCategoryEvent.subscribe({
        next: (categoryAnnouncement: CategoryAnnouncement) => {
          if (categoryAnnouncement) {
            if (
              this.announcement?.id === categoryAnnouncement?.announcementId
            ) {
              this.announcement.category = categoryAnnouncement?.category;
            }
          }
        },
      }));
  }

  private updateAnnouncement(): void {
    this.$updateAnnouncement =
      this.managementAnnouncementService.announcementObservable.subscribe({
        next: (announcement: Announcement | void) => {
          if (announcement) {
            if (this.announcement?.id === announcement.id) {
              this.announcement.blockade = announcement.blockade;
              this.announcement.slug = announcement.slug;
              this.announcement.updatedAt = announcement.updatedAt;
              this.announcement.state = announcement.state;
              this.announcement.title = announcement.title;
              this.announcement.workDays = announcement.workDays;
              this.announcement.citie = announcement.citie;
              this.announcement.address = announcement.address;
              this.announcement.contact = announcement.contact;
              this.announcement.price = announcement.price;
            }
          }
        },
      });
  }
}
