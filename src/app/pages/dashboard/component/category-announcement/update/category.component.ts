import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { FormCategoryUpdateComponent } from './form/form.component';
import { Category } from 'src/app/interface';

@Component({
  selector: 'app-category-announcement-update-component',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryAnnouncementUpdateComponent {
  @Input() category!: Category;

  constructor(private modalController: ModalController) {}

  public async name(): Promise<void> {
    const { _csrf, name, description, slug } = this.category;
    const modal = await this.modalController.create({
      component: FormCategoryUpdateComponent,
      componentProps: {
        action: 'name',
        label: 'Editar',
        category: { _csrf, name, description, slug },
      },
    });
    return await modal.present();
  }
}
