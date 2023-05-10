import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonSegment, NavController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { User } from '../interface';
import { AuthService } from '../services/auth/auth.service';
import { Keyboard } from '@capacitor/keyboard';
import { Capacitor } from '@capacitor/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit, OnDestroy {
  @ViewChild(IonSegment, { static: false }) segment!: IonSegment;
  public user$!: Observable<User | void>;
  public isFooter!: boolean;
  private $router!: Subscription;
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.$router.unsubscribe();
  }

  ngOnInit() {
    this.toggleFooter();
    this.getUser();
    this.initSegment();
  }

  private initSegment() {
    this.$router = this.router.events.subscribe((router: any): void => {
      this.setSegment(router);
    });
  }

  private setSegment(router: any) {
    if (router instanceof NavigationEnd) {
      switch (router.url) {
        case '/entrar':
          this.segment.value = 'entrar';
          break;
        case '/cadastrar':
          this.segment.value = 'cadastrar';
          break;
        case '/inicio':
          this.segment.value = 'inicio';
          break;
        case '/categoria/classificados':
          this.segment.value = 'classificados';
          break;
        case '/painel-de-controle/admin/usuario':
          this.segment.value = 'usuario';
          break;
        case '/painel-de-controle/anuncio':
          this.segment.value = 'anuncio';
          break;
      }
    }
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
