import {
  Announcement,
  AnnouncementRoute,
  DayOfTheWeekPT,
} from 'src/app/interface/index';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-opening-hour',
  templateUrl: './opening-hour.component.html',
  styleUrls: ['./opening-hour.component.scss'],
})
export class OpeningHourComponent {
  @Input() announcement!: Announcement;
  @Output() route = new EventEmitter<AnnouncementRoute>(undefined);
  public day: DayOfTheWeekPT;

  public setDay(day: DayOfTheWeekPT): void {
    this.day = day;
  }

  public back(e: AnnouncementRoute) {
    if (e === 'OpeningHours') {
      this.day = null;
    }
    this.route.emit(e);
  }
}
