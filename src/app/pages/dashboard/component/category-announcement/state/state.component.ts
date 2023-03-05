import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Category } from 'src/app/interface';
import { MessageService } from 'src/app/utilities/message/message.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-category-announcement-state-component',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class CategoryAnnouncementStateComponent {
  @Input() category!: Category;
  private form: FormGroup;
  private $state: Subscription;
  constructor(
    private fb: FormBuilder,
    private stateService: StateService,
    private messageService: MessageService
  ) {}

  // State
  public state(category: Pick<Category, 'slug' | '_csrf'>): Subscription {
    const { slug, _csrf } = category;
    this.form = this.fb.group({ slug, _csrf });
    return (this.$state = this.stateService.state(this.form.value).subscribe({
      next: (category_: Required<Pick<Category, 'message'>>) =>
        this.messageService.success(category_?.message, null, this.$state, 350),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, null, this.$state),
    }));
  }
}
