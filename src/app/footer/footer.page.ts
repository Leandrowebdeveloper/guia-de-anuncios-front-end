import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { User } from '../interface';
import { AuthService } from '../services/auth/auth.service';
import { Keyboard } from '@capacitor/keyboard';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {
  public user$!: Observable<User | void>;
  public isFooter!: boolean;
  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.toggleFooter();
    this.getUser();
  }

  private toggleFooter() {
    if (Capacitor.isPluginAvailable('Keyboard')) {
      Keyboard.addListener('keyboardDidShow', (info) => {
        this.isFooter = true;
      });

      Keyboard.addListener('keyboardDidHide', () => {
        this.isFooter = false;
      });
    }
  }

  public routerLink(event: PointerEvent, router: string[]): Promise<boolean> {
    event.preventDefault();
    return this.navCtrl.navigateForward(router);
  }

  private getUser(): void {
    this.user$ = this.authService.userObservable;
  }
}
