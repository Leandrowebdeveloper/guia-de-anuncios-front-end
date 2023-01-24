import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {
  Announcement,
  AnnouncementRoute,
  DayOfTheWeekPT,
  WorkDays,
} from 'src/app/interface';
import { WorkDayAnnouncementService } from '../../service/work-days.service';

@Component({
  selector: 'app-days-of-the-week',
  templateUrl: './days-of-the-week.component.html',
  styleUrls: ['./days-of-the-week.component.scss'],
})
export class DaysOfTheWeekComponent implements OnInit {
  @Input() announcement!: Pick<Announcement, 'workDay' | 'id'>;
  @Output() eventDay = new EventEmitter<DayOfTheWeekPT>(undefined);
  @Output() route = new EventEmitter<AnnouncementRoute>(undefined);
  public workDay: WorkDays;
  constructor(private workDayService: WorkDayAnnouncementService) {}

  ngOnInit() {
    this.init();
  }

  public back() {
    this.route.emit('announcement');
  }

  public setDay(day: DayOfTheWeekPT) {
    this.eventDay.emit(day);
  }

  private setOperningHour(): WorkDays {
    return {
      announcementId: this.announcement.id,
      sunday: this.workDayService.fields,
      monday: this.workDayService.fields,
      tuesday: this.workDayService.fields,
      wednesday: this.workDayService.fields,
      thursday: this.workDayService.fields,
      friday: this.workDayService.fields,
      saturday: this.workDayService.fields,
    };
  }

  private init(): WorkDays {
    if (this.announcement?.workDay === null) {
      return (this.workDay = this.setOperningHour());
    }
    return (this.workDay = this.announcement?.workDay);
  }
}
