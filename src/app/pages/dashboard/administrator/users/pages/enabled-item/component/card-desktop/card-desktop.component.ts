import { Component, Input } from '@angular/core';
import { User } from 'src/app/interface/index';

@Component({
  selector: 'app-user-card-desktop',
  templateUrl: './card-desktop.component.html',
  styleUrls: ['./card-desktop.component.scss'],
})
export class CardDesktopComponent {
  @Input() users!: User[];
  constructor() {}
}
