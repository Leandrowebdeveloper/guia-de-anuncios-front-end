import { FormComponent } from './form/form.component';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-destroy-component',
  templateUrl: './destroy.component.html',
  styleUrls: ['./destroy.component.scss'],
})
export class DestroyComponent {
  @Input() user!: User;

  constructor(private modalController: ModalController) {}

  public async destroy(): Promise<void> {
    if (this.user?.blockade) {
      return;
    }
    const { _csrf, password, slug } = this.user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'destroy',
        label: 'Excluir usuário',
        user: {
          _csrf,
          password,
          slug,
        },
      },
    });
    return await modal.present();
  }
}
