import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Category } from 'src/app/interface';
import { FormDestroyAnnouncementComponent } from './form/form.component';

@Component({
  selector: 'app-destroy-announcement-component',
  templateUrl: './destroy-announcement.component.html',
  styleUrls: ['./destroy-announcement.component.scss'],
})
export class DestroyAnnouncementComponent {
  @Input() category!: Category | void;

  constructor(private modalController: ModalController) {}

  public async destroy(): Promise<void> {
    if (this.category) {
      const { _csrf, id } = this.category;
      const modal = await this.modalController.create({
        component: FormDestroyAnnouncementComponent,
        componentProps: {
          action: 'destroy',
          label: 'Excluir categoria',
          category: {
            _csrf,
            password: '',
            id,
          },
        },
      });
      return await modal.present();
    }
  }
}
