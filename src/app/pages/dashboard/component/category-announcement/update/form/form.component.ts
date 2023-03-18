import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Category } from 'src/app/interface';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { UpdateCategoryAnnouncementService } from '../service/category.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormCategoryUpdateComponent implements OnInit {
  @Input() category!: Required<
    Pick<Category, '_csrf' | 'name' | 'description' | 'slug'>
  >;
  @Input() action: string;
  @Input() label: string;

  public attrButton: AttrButton = {
    route: '/category',
    icon: 'create',
    label: 'Editar',
    fill: false,
    aria: 'Editar categoria.',
    title: 'Editar categoria.',
  };

  public config: object;
  private form: FormGroup;
  private write: Subscription;
  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    private categoryService: UpdateCategoryAnnouncementService,
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
    return this.update(event);
  }

  private update(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Cadastrar categoria...');
    return (this.write = this.categoryService
      .updateNameAndDescription(event.value)
      .subscribe({
        next: (category: Required<Pick<Category, 'message'>>) =>
          this.messsage(category, loading),
        error: (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.write),
      }));
  }

  private messsage(
    category: Required<Pick<Category, 'message'>>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.messageService.success(category?.message, loading, this.write);
  }

  private getData(): void {
    const { _csrf, name, description, slug } = this.category;
    this.config = { _csrf, name, description, slug };
  }
}
