import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Announcement, AnnouncementRoute } from 'src/app/interface';

@Component({
  selector: 'app-button-opening-hour',
  templateUrl: './button-opening-hour.component.html',
  styleUrls: ['./button-opening-hour.component.scss'],
})
export class ButtonOpeningHourComponent implements OnInit {
  @Input() announcement!: Announcement;
  @Output() route = new EventEmitter<AnnouncementRoute>(undefined);
  constructor() {}

  ngOnInit() {}

  public toggleRoute(): void {
    this.route.emit('OpeningHours');
  }
}
