import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() announcement!: Announcement;
  @Input() index!: number;
  @Input() action!: number;
  @Output() actionButtons = new EventEmitter<{
    action: 'destroy' | 'restore' | 'drop';
    index: number;
    announcement: Announcement;
  }>(undefined);

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
