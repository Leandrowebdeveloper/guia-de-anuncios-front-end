import { Observable, Subscription } from 'rxjs';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Announcement, Galery, User } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GaleryAnnouncementService } from '../galery/service/galery.service';

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
    private galeryAnnouncementService: GaleryAnnouncementService
  ) {}

  ngOnDestroy(): void {
    this.$update.unsubscribe();
  }

  ngOnInit(): void {
    this.user$ = this.authService.userObservable;
    this.updateGalery();
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
}
