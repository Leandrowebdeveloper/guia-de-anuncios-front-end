import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-create',
  templateUrl: './button-create.component.html',
  styleUrls: ['./button-create.component.scss'],
})
export class ButtonCreateComponent {
  @Output() create = new EventEmitter<boolean>(false);
  @Input() isButton: boolean;

  public createAnnouncement() {
    this.create.emit(true);
  }
}
