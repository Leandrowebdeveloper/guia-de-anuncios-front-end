import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Announcement, User } from 'src/app/interface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public announcement$!: Observable<Announcement[]>;
  public user!: User;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.init();
  }

  public init() {
    this.loadAnnouncement();
    this.loadUser();
  }

  private loadUser(): void {
    if (this.authService.getUser) {
      this.user = this.authService.getUser;
    }
  }

  private loadAnnouncement() {
    this.announcement$ = of(
      this.activatedRoute?.snapshot?.data?.['announcement']
    );
  }
}
