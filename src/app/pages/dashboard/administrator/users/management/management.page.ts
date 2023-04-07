import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interface';
import { AdminUsersService } from '../services/admin-users.service';

@Component({
  templateUrl: './management.page.html',
  styleUrls: ['./management.page.scss'],
})
export class ManagementPage implements OnInit {
  public user$!: Observable<User | void>;
  public toggleRoute!: 'announcement' | 'statistic' | 'user';
  public toggleList!: boolean;
  public isAnnouncement!: boolean;
  constructor(
    private navCtrl: NavController,
    private usersService: AdminUsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.init();
    this.setUser();
  }

  public getIsAnnouncement(e: boolean) {
    this.isAnnouncement = e;
  }

  public togglePage(e: boolean) {
    this.toggleList = e;
  }

  public toggleSegment(event: unknown) {
    if (event instanceof CustomEvent) {
      const data: 'announcement' | 'statistic' | 'user' = event.detail?.value;
      this.toggleRoute = data;
    }
  }

  public back() {
    this.navCtrl.back();
  }

  private setUser(): void {
    this.user$ = of(this.activatedRoute.snapshot.data['user']);
  }

  private init() {
    this.toggleRoute = 'user';
  }
}
