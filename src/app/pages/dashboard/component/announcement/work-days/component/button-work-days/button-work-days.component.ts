import { NavController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Component({
  selector: 'app-button-work-days',
  templateUrl: './button-work-days.component.html',
  styleUrls: ['./button-work-days.component.scss'],
})
export class ButtonWorkDayComponent implements OnInit {
  @Input() announcement!: Announcement;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  public route(): Promise<boolean> {
    return this.navCtrl.navigateForward([
      '/painel-de-controle',
      'anuncio',
      this.announcement?.slug,
      'horario-de-funcionamento',
    ]);
  }
}
