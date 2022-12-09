import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Announcement, User } from 'src/app/interface';
import { MessageService } from 'src/app/utilities/message/message.service';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Component({
  selector: 'app-blockade-announcement-component',
  templateUrl: './blockade.component.html',
  styleUrls: ['./blockade.component.scss'],
})
export class AnnouncementBlockadeComponent {
  @Input() announcement!: Announcement;
  private form: FormGroup;
  private $blockade: Subscription;

  constructor(
    private fb: FormBuilder,
    private managementAnnouncementService: ManagementAnnouncementService,
    private messageService: MessageService
  ) {}

  public blockade(): Subscription {
    const { slug, _csrf } = this.announcement;
    this.form = this.fb.group({ slug, _csrf });
    return (this.$blockade = this.managementAnnouncementService
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
