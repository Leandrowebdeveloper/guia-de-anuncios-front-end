import { NavController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-button-work-days',
  templateUrl: './button-work-days.component.html',
  styleUrls: ['./button-work-days.component.scss'],
})
export class ButtonWorkDayComponent implements OnInit {
  @Input() announcement!: Pick<
    Announcement,
    'workDays' | 'categoryAnnouncement' | 'slug'
  >;
  public isAdmin: boolean;
  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isAdmin = this.authService.getLevel === '1';
  }

  public route(): Promise<boolean> {
    return this.navCtrl.navigateForward([
      '/painel-de-controle',
      'anuncio',
      this.announcement?.slug,
      'dias-da-semana',
    ]);
  }
}
