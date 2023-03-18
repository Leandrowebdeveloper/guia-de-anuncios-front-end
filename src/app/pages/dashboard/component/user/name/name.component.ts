import { FormUserNameComponent } from './form/form.component';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/interface';
import { UserName } from './interface';

@Component({
  selector: 'app-name-user-component',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class UserNameComponent {
  @Input() user!: Required<Pick<User, UserName | 'blockade'>>;
  @Input() isAuth!: boolean;
  constructor(private modalController: ModalController) {}

  public async name(): Promise<void> {
    if (this.user?.blockade) {
      return;
    }
    const { _csrf, firstName, lastName, slug } = this.user;
    const modal = await this.modalController.create({
      component: FormUserNameComponent,
      componentProps: {
        isAuth: this.isAuth,
        action: 'name',
        label: 'Editar usuário',
        user: { _csrf, firstName, lastName, slug },
      },
    });
    return await modal.present();
  }
}
