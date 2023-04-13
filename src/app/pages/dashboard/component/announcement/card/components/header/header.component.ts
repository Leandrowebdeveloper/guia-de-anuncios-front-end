import { Component, Input } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Component({
  selector: 'app-header-card',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class CardHeaderComponent {
  @Input() announcement!: Pick<
    Announcement,
    | 'category'
    | 'state'
    | 'createdAt'
    | 'updatedAt'
    | 'title'
    | 'plan'
    | 'workDays'
    | 'blockade'
    | 'address'
    | 'contact'
    | 'citie'
    | 'like'
  >;
}
