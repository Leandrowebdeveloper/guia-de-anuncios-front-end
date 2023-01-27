import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import {
  Announcement,
  Category,
  CategoryAnnouncement,
} from 'src/app/interface';
import { HomeService } from 'src/app/pages/public/home/services/home.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { CategoryAnnouncementService } from './service/category.service';

@Component({
  selector: 'app-category-component',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() announcement!: Pick<
    Announcement,
    'category' | '_csrf' | 'id' | 'categoryAnnouncement'
  >;
  public category$: Observable<Category[]>;
  private form: FormGroup;
  private $category: Subscription;

  constructor(
    private fb: FormBuilder,
    private categoryAnnouncementService: CategoryAnnouncementService,
    private messageService: MessageService,
    private categoryService: HomeService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.getCategory();
  }

  public select(e: any): Subscription {
    const id = this.announcement?.categoryAnnouncement?.id;
    this.form = this.fb.group({
      id,
      announcementId: this.announcement?.id,
      catAdId: e.detail.value,
      // eslint-disable-next-line no-underscore-dangle
      _csrf: this.announcement?._csrf,
    });

    const message: string = id
      ? 'Editando categoria...'
      : 'Cadastrando categoria...';
    const loading = this.loadingService.show(message);
    return (this.$category = this.categoryAnnouncementService
      .category(this.form.value)
      .subscribe(
        (categoryAnnouncement_: CategoryAnnouncement) =>
          this.success(categoryAnnouncement_, loading),
        (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.$category)
      ));
  }

  private success(
    categoryAnnouncement_: CategoryAnnouncement,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.announcement.category = categoryAnnouncement_?.category;
    return this.messageService.success(
      categoryAnnouncement_?.message,
      loading,
      this.$category,
      2000
    );
  }

  private getCategory(): void {
    this.category$ = this.categoryService.asObservable();
  }
}
