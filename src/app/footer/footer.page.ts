import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { User } from '../interface';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {
  public user$!: Observable<User | void>;
  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getUser();
  }

  public routerLink(event: PointerEvent, router: string[]): Promise<boolean> {
    event.preventDefault();
    return this.navCtrl.navigateForward(router);
  }

  private getUser(): void {
    this.user$ = this.authService.userObservable;
  }
}
