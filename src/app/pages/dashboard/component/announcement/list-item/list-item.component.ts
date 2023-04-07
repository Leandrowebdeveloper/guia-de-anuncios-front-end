import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Component({
  selector: 'app-list-item-announcement-component',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class AnnouncementListItemComponent {
  @Input() announcement!: Announcement;
  @Input() index!: number;
  @Input() action!: number;
  @Output() actionButtons = new EventEmitter<{
    action: 'destroy' | 'restore' | 'drop';
    index: number;
    announcement: Announcement;
  }>(undefined);
  public toggleIcon!: number;
  public drag(event: any) {
    const { id } = event.target;
    const data: { amount: number; ratio: number } = event.detail;
    if (data.ratio === 1) {
      return (this.toggleIcon = Number(id));
    }
    return (this.toggleIcon = -1);
  }

  public destroy(index: number, announcement: Announcement): void {
    return this.actionButtons.emit({ action: 'destroy', index, announcement });
  }

  public drop(index: number, announcement: Announcement): void {
    return this.actionButtons.emit({ action: 'drop', index, announcement });
  }

  public toRestore(index: number, announcement: Announcement): void {
    return this.actionButtons.emit({ action: 'restore', index, announcement });
  }
}
