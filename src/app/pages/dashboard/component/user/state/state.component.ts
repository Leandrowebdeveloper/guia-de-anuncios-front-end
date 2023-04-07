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
  @Input() user!: Pick<
    User,
    'state' | 'blockade' | 'updatedAt' | 'message' | '_csrf' | 'slug'
  > | void;
  private form!: FormGroup;
  private $state!: Subscription;
  constructor(
    private fb: FormBuilder,
    private stateService: StateService,
    private messageService: MessageService
  ) {}

  public state(): Subscription | void {
    if (this.user) {
      const { slug, _csrf } = this.user;
      this.form = this.fb.group({ slug, _csrf });
      return (this.$state = this.stateService.state(this.form.value).subscribe({
        next: (user_: Pick<User, 'message'>) =>
          this.messageService.success(
            user_?.message,
            undefined,
            this.$state,
            350
          ),
        error: (error: HttpErrorResponse) =>
          this.messageService.error(error, undefined, this.$state),
      }));
    }
  }
}
