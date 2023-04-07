import {
  Announcement,
  AnnouncementRoute,
  DayOfTheWeekPT,
} from 'src/app/interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-work-days',
  templateUrl: './work-days.component.html',
  styleUrls: ['./work-days.component.scss'],
})
export class WorkDayAnnouncementComponent {
  @Input() announcement!: Announcement | void;
  @Output() route = new EventEmitter<AnnouncementRoute>(undefined);
  public day!: DayOfTheWeekPT | null;

  public setDay(day: DayOfTheWeekPT): void {
    this.day = day;
  }

  public back(e: AnnouncementRoute) {
    if (e === 'WorkDays') {
      this.day = null;
    }
    this.route.emit(e);
  }
}
