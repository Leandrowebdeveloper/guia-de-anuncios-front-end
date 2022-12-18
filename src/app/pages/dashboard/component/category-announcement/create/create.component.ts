import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { FormCategoryCreateComponent } from './form/form.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CategoryAnnouncement } from 'src/app/interface';

@Component({
  selector: 'app-category-announcement-create-component',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CategoryAnnouncementCreateComponent {
  @Input() category!: CategoryAnnouncement;

  constructor(
    private authService: AuthService,
    private modalController: ModalController
  ) {}

  // Create
  public async register(): Promise<void> {
    const modal = await this.modalController.create({
      component: FormCategoryCreateComponent,
      componentProps: {
        action: 'register',
        label: 'Cadastrar categoria',
        category: {
          name: null,
          description: null,
          // eslint-disable-next-line no-underscore-dangle
          _csrf: this.authService.getCsrf,
        },
      },
    });
    return await modal.present();
  }
}
