import { NavController } from '@ionic/angular';
import { Component, Input } from '@angular/core';
import { Announcement, User } from 'src/app/interface';

@Component({
  selector: 'app-button-work-days',
  templateUrl: './button-work-days.component.html',
  styleUrls: ['./button-work-days.component.scss'],
})
export class ButtonWorkDayComponent {
  @Input() announcement!: Pick<
    Announcement,
    'workDays' | 'categoryAnnouncement' | 'slug'
  > | void;
  @Input() user!: Pick<User, 'level'> | void;
  constructor(private navCtrl: NavController) {}

  public route(): Promise<boolean> {
    return this.navCtrl.navigateForward([
      '/painel-de-controle',
      'anuncio',
      this.announcement?.slug,
      'dias-da-semana',
    ]);
  }
}
