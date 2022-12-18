import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interface/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public user$: Observable<User>;
  public isAnnouncement: boolean;
  public toggleList: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getUser();
  }

  public getIsAnnouncement(e: boolean): boolean {
    return (this.isAnnouncement = e);
  }

  public togglePage(e: boolean): boolean {
    return (this.toggleList = e);
  }

  private getUser(): Observable<User> {
    return (this.user$ = this.authService.userObservable);
  }
}
