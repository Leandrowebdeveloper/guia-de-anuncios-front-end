import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './management.page.html',
  styleUrls: ['./management.page.scss'],
})
export class UserManagementPage implements OnInit {
  public user$!: Observable<User | void>;
  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  public back(): void {
    return this.navCtrl.back();
  }

  private getUser(): void {
    this.user$ = this.authService.userObservable;
  }
}
