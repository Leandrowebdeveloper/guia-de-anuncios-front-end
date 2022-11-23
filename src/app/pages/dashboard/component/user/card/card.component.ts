import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-card-user-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardUserComponent {
  @Input() user!: User;
}
