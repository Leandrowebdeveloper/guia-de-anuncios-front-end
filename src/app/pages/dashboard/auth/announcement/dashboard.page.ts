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
  public announcement: Announcement[];
  public user: User;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.init();
  }

  public init() {
    this.announcement = this.activatedRoute.snapshot.data.announcement;
    this.user = this.authService.getUser;
  }
}
