import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { Category } from 'src/app/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { CategoryService } from '../services/category.service';
import { CategoryUtilities } from 'src/app/utilities/category/category-utilities.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() category: Category;
  @Input() action: string;
  @Input() label: string;

  public attrButtonPage: AttrButton[];
  public attrButton: AttrButton;

  public config: object;
  private form: FormGroup;
  private write: Subscription;
  constructor(
    private helpService: HelpsService,
    private modalController: ModalController,
    private categoryService: CategoryService,
    private categoryUtilities: CategoryUtilities,
    private messageService: MessageService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.setButton();
  }

  public importForm(event: FormGroup): FormGroup {
    return (this.form = event);
  }

  public onSubmit(event: FormGroup): Subscription {
    switch (this.action) {
      // case 'destroy':
      //   return this.destroy(event);
      case 'drop':
        return this.drop(event);
      // case 'name':
      //   return this.update(event);
      case 'register':
        return this.register(event);
      case 'restore':
        return this.restore(event);
    }
  }

  // Destroy
  // private destroy(event: FormGroup): Subscription {
  //   const loading = this.loadingService.show('Excluindo categoria...');
  //   this.getSlug(event);
  //   return (this.write = this.categoryService.delete(event.value).subscribe(
  //     (category: Category) => this.messsage(category, loading),
  //     (error: HttpErrorResponse) =>
  //       this.messageService.error(error, loading, this.write)
  //   ));
  // }

  // Destroy
  private drop(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Excluindo categoria...');
    this.getSlug(event);
    return (this.write = this.categoryService.dropd(event.value).subscribe({
      next: (category: Category) => this.messsage(category, loading),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.write),
    }));
  }

  private getSlug(event: FormGroup<any>) {
    if (!event.value.slug) {
      event.value.slug = this.categoryService.getSlug;
    }
  }

  // // Update Name description
  // private update(event: FormGroup): Subscription {
  //   const loading = this.loadingService.show('Cadastrar categoria...');
  //   return (this.write = this.categoryService
  //     .updateNameAndDescription(event.value)
  //     .subscribe(
  //       (category: Category) => this.messsage(category, loading),
  //       (error: HttpErrorResponse) =>
  //         this.messageService.error(error, loading, this.write)
  //     ));
  // }

  // Update Name description
  private register(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Cadastrar categoria...');
    return (this.write = this.categoryService.register(event.value).subscribe({
      next: (category: Category) => this.messsage(category, loading),
      error: (error: HttpErrorResponse) =>
        this.messageService.error(error, loading, this.write),
    }));
  }

  // Name
  private restore(event: FormGroup): Subscription {
    const loading = this.loadingService.show('Restaurar categoria...');
    return (this.write = this.categoryService.restore(event.value).subscribe({
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

  private setButton(): void {
    this.attrButton = this.categoryUtilities.setButton(this.action);
  }

  private getData(): void {
    this.config = { ...this.category };
  }
}
