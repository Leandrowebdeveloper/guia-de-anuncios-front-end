import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {
  Announcement,
  AnnouncementRoute,
  DayOfTheWeekPT,
  OpeningHour,
} from 'src/app/interface';
import { OpeningHourService } from '../../service/openingHour.service';

@Component({
  selector: 'app-days-of-the-week',
  templateUrl: './days-of-the-week.component.html',
  styleUrls: ['./days-of-the-week.component.scss'],
})
export class DaysOfTheWeekComponent implements OnInit {
  @Input() announcement!: Announcement;
  @Output() eventDay = new EventEmitter<DayOfTheWeekPT>(undefined);
  @Output() route = new EventEmitter<AnnouncementRoute>(undefined);
  public openingHour: OpeningHour;
  constructor(private openingHourService: OpeningHourService) {}

  ngOnInit() {
    this.init();
  }

  public back() {
    this.route.emit('announcement');
  }

  public setDay(day: DayOfTheWeekPT) {
    this.eventDay.emit(day);
  }

  private setOperningHour(): OpeningHour {
    return {
      announcementId: this.announcement.id,
      sunday: this.openingHourService.fields,
      monday: this.openingHourService.fields,
      third: this.openingHourService.fields,
      fourth: this.openingHourService.fields,
      thursday: this.openingHourService.fields,
      friday: this.openingHourService.fields,
      saturday: this.openingHourService.fields,
    };
  }

  private init(): OpeningHour {
    if (this.announcement?.openingHour === null) {
      return (this.openingHour = this.setOperningHour());
    }
    return (this.openingHour = this.announcement?.openingHour);
  }
}
