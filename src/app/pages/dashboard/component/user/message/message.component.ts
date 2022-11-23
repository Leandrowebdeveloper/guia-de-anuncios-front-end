import { Component, Input } from '@angular/core';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-message-component',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() user!: User;
}
