import { FormUserDestroyComponent } from './form/form.component';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-destroy-user-component',
  templateUrl: './destroy.component.html',
  styleUrls: ['./destroy.component.scss'],
})
export class UserDestroyComponent {
  @Input() user!: User;
  @Input() isAuth!: boolean;
  constructor(private modalController: ModalController) {}

  public async destroy(): Promise<void> {
    if (this.user?.blockade) {
      return;
    }
    const { _csrf, password, slug } = this.user;
    const modal = await this.modalController.create({
      component: FormUserDestroyComponent,
      componentProps: {
        isAuth: this.isAuth,
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
