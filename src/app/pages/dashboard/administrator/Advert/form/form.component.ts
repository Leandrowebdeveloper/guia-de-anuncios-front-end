import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';
import { Category } from 'src/app/interface';
import { HttpErrorResponse } from '@angular/common/http';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { ModalController } from '@ionic/angular';
import { AdvertService } from '../services/advert.service';
import { CategoryUtilities } from 'src/app/utilities/category/category-utilities.service';

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
    private advertService: AdvertService,
    private categoryUtilities: CategoryUtilities
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
      case 'destroy':
        return this.destroy(event);
      case 'drop':
        return this.drop(event);
      case 'name':
        return this.update(event);
      case 'register':
        return this.register(event);
      case 'restore':
        return this.restore(event);
    }
  }

  // Destroy
  private destroy(event: FormGroup): Subscription {
    const loading = this.advertService.showLoading('Excluindo categoria...');
    this.getSlug(event);
    return (this.write = this.advertService.delete(event.value).subscribe(
      (category: Category) => this.messsage(category, loading),
      (error: HttpErrorResponse) =>
        this.advertService.error(error, loading, this.write)
    ));
  }

  // Destroy
  private drop(event: FormGroup): Subscription {
    const loading = this.advertService.showLoading('Excluindo categoria...');
    this.getSlug(event);
    return (this.write = this.advertService.dropd(event.value).subscribe(
      (category: Category) => this.messsage(category, loading),
      (error: HttpErrorResponse) =>
        this.advertService.error(error, loading, this.write)
    ));
  }

  private getSlug(event: FormGroup<any>) {
    if (!event.value.slug) {
      event.value.slug = this.advertService.getSlug;
    }
  }

  // Update Name description
  private update(event: FormGroup): Subscription {
    const loading = this.advertService.showLoading('Cadastrar categoria...');
    return (this.write = this.advertService
      .updateNameAndDescription(event.value)
      .subscribe(
        (category: Category) => this.messsage(category, loading),
        (error: HttpErrorResponse) =>
          this.advertService.error(error, loading, this.write)
      ));
  }

  // Update Name description
  private register(event: FormGroup): Subscription {
    const loading = this.advertService.showLoading('Cadastrar categoria...');
    return (this.write = this.advertService.register(event.value).subscribe(
      (category: Category) => this.messsage(category, loading),
      (error: HttpErrorResponse) =>
        this.advertService.error(error, loading, this.write)
    ));
  }

  // Name
  private restore(event: FormGroup): Subscription {
    const loading = this.advertService.showLoading('Restaurar categoria...');
    return (this.write = this.advertService.restore(event.value).subscribe(
      (category: Category) => this.messsage(category, loading),
      (error: HttpErrorResponse) =>
        this.advertService.error(error, loading, this.write)
    ));
  }

  private messsage(
    category: Category,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    this.helpService.delay(() => this.modalController.dismiss(), 2500);
    return this.advertService.message(category, loading, this.write);
  }

  private setButton(): void {
    this.attrButton = this.categoryUtilities.setButton(this.action);
  }

  private getData(): void {
    this.config = { ...this.category };
  }
}
