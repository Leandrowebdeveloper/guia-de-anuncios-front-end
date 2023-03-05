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
import { CreateCategoryAnnouncementService } from '../service/create.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormCategoryCreateComponent implements OnInit {
  @Input() category: Category;
  @Input() action: string;
  @Input() label: string;

  public attrButton: AttrButton = {
    route: '/category',
    icon: 'create',
    label: 'Cadastrar',
    fill: false,
    aria: 'Cadastrar categoria.',
    title: 'Cadastrar categoria.',
  };

  public config: object;
  private form: FormGroup;
  private write: Subscription;
  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    private categoryService: CreateCategoryAnnouncementService,
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
    return this.register(event);
  }

  // Update Name description
  private register(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Cadastrar categoria...');
    return (this.write = this.categoryService.register(event.value).subscribe({
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
    this.config = { ...this.category };
  }
}
