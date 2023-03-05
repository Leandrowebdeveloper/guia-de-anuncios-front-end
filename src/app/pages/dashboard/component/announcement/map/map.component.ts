import { Announcement, User } from 'src/app/interface';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AdminManagementMapsComponent } from './form/maps.component';

@Component({
  selector: 'app-map-announcement-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class AnnouncementMapComponent implements OnInit {
  @Input() announcement!: Pick<
    Announcement,
    '_csrf' | 'id' | 'coordinate' | 'plan' | 'categoryAnnouncement'
  >;
  public user!: Pick<User, 'level' | 'plan'>;
  constructor(
    private adminManagementMapsComponent: AdminManagementMapsComponent,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.user = this.authService.getUser;
  }

  public async coordinates(): Promise<void | Subscription> {
    this.adminManagementMapsComponent.announcement = this.announcement;
    this.adminManagementMapsComponent.setCoordinate();
  }
}
