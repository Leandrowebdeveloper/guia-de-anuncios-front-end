import { FormComponent } from './form/form.component';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-name-component',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent {
  @Input() user!: User;
  constructor(private modalController: ModalController) {}

  public async name(): Promise<void> {
    if (this.user?.blockade) {
      return;
    }
    const { _csrf, firstName, lastName, slug } = this.user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'name',
        label: 'Editar usuário',
        user: { _csrf, firstName, lastName, slug },
      },
    });
    return await modal.present();
  }
}
