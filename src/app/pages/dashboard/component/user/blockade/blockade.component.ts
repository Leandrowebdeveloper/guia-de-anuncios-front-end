import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/pages/dashboard/administrator/users/services/users.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interface';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/utilities/message/message.service';

@Component({
  selector: 'app-blockade-component',
  templateUrl: './blockade.component.html',
  styleUrls: ['./blockade.component.scss'],
})
export class BlockadeComponent implements OnInit {
  @Input() user!: User;
  @Input() pageEnbled!: boolean;
  private form: FormGroup;
  private $blockade: Subscription;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  public blockade(): Subscription {
    const { slug, _csrf } = this.user;
    this.form = this.fb.group({ slug, _csrf });
    return (this.$blockade = this.usersService
      .blockade(this.form.value)
      .subscribe(
        (user_: User) =>
          this.messageService.success(
            user_?.message,
            null,
            this.$blockade,
            350
          ),
        (error: HttpErrorResponse) =>
          this.messageService.error(error, null, this.$blockade)
      ));
  }
}
