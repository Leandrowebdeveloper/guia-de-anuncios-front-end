import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  public user$: Observable<User>;
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
