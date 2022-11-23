import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/interface';
import { UsersService } from 'src/app/pages/dashboard/administrator/users/services/users.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-state-component',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent {
  @Input() user!: User;
  @Input() pageEnbled!: boolean;
  private form: FormGroup;
  private $state: Subscription;
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private messageService: MessageService
  ) {}

  public state(): Subscription {
    const { slug, _csrf } = this.user;
    this.form = this.fb.group({ slug, _csrf });
    return (this.$state = this.usersService.state(this.form.value).subscribe(
      (user_: User) =>
        this.messageService.success(user_?.message, null, this.$state, 350),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, null, this.$state)
    ));
  }
}
