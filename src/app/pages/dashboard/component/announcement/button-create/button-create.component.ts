import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-create-announcement',
  templateUrl: './button-create.component.html',
  styleUrls: ['./button-create.component.scss'],
})
export class ButtonCreateAnnouncementComponent {
  @Output() create = new EventEmitter<boolean>(false);
  @Input() isButton: boolean;

  public createAnnouncement() {
    this.create.emit(true);
  }
}
