import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'src/app/utilities/message/message.service';
import { StateService } from './service/state.service';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-state-user-component',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class UserStateComponent {
  @Input() user!: User;
  private form: FormGroup;
  private $state: Subscription;
  constructor(
    private fb: FormBuilder,
    private stateService: StateService,
    private messageService: MessageService
  ) {}

  public state(): Subscription {
    const { slug, _csrf } = this.user;
    this.form = this.fb.group({ slug, _csrf });
    return (this.$state = this.stateService.state(this.form.value).subscribe(
      (user_: User) =>
        this.messageService.success(user_?.message, null, this.$state, 350),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, null, this.$state)
    ));
  }
}
