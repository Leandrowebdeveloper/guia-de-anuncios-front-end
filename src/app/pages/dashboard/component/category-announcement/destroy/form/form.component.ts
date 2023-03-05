import { ModalController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category } from 'src/app/interface';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { CategoryService } from 'src/app/pages/dashboard/administrator/categoryAnnouncement/services/category.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { DestroyAnnouncementService } from '../service/destroy-announcement.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormDestroyAnnouncementComponent implements OnInit {
  @Input() category!: Required<
    Pick<Category & { password: string }, '_csrf' | 'id' | 'password'>
  >;
  @Input() action: string;
  @Input() label: string;

  public attrButton: AttrButton = {
    route: '/destroy',
    icon: 'trash',
    label: 'Excluir categoria',
    fill: false,
    aria: 'Excluir categoria.',
    title: 'Excluir categoria.',
  };

  public config: object;
  private form: FormGroup;
  private write: Subscription;
  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    private categoryService: DestroyAnnouncementService,
    private messageService: MessageService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  public importForm(event: FormGroup): FormGroup {
    return (this.form = event);
  }

  public onSubmit(event: FormGroup): Subscription {
    return this.destroy(event);
  }

  private destroy(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Excluindo categoria...');
    return (this.write = this.categoryService.delete(event.value).subscribe({
      next: (category: Category) => this.messsage(category, loading),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.write),
    }));
  }

  private messsage(
    category: Category,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(category?.message, loading, this.write);
  }

  private getData(): void {
    const { _csrf, id, password } = this.category;
    this.config = { _csrf, id, password };
  }
}
