import { Component, Input } from '@angular/core';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-card-user-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: Required<
    Pick<User, 'name' | 'updatedAt' | 'createdAt' | 'plan' | 'email'>
  >;
}
