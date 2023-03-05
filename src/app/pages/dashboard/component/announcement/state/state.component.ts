import { MessageService } from 'src/app/utilities/message/message.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Announcement } from 'src/app/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { StateAnnouncementService } from './service/state.service';

@Component({
  selector: 'app-state-announcement-component',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class AnnouncementStateComponent {
  @Input() announcement!: Pick<
    Announcement,
    | '_csrf'
    | 'id'
    | 'category'
    | 'state'
    | 'categoryAnnouncement'
    | 'address'
    | 'citie'
    | 'contact'
  >;
  private form: FormGroup;
  private $state: Subscription;
  constructor(
    private fb: FormBuilder,
    private stateService: StateAnnouncementService,
    public messageService: MessageService
  ) {}

  // State
  public toggle(): Subscription {
    const { id, _csrf } = this.announcement;
    this.form = this.fb.group({ id, _csrf });
    return (this.$state = this.stateService.state(this.form.value).subscribe({
      next: (announcement_: Pick<Announcement, 'message'>) =>
        this.success(announcement_),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, null, this.$state),
    }));
  }

  private success(
    announcement_: Pick<Announcement, 'message'>
  ): Promise<number> {
    return this.messageService.success(
      announcement_?.message,
      null,
      this.$state,
      350
    );
  }
}
