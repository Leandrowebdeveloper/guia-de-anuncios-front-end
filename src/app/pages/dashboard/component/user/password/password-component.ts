import { FormComponent } from './form/form.component';
import { ModalController } from '@ionic/angular';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-password-component',
  templateUrl: './password-component.html',
  styleUrls: ['./password-component.scss'],
})
export class PasswordComponent {
  @Input() user!: User;
  constructor(private modalController: ModalController) {}

  public async password(): Promise<void> {
    if (this.user?.blockade) {
      return;
    }
    const { _csrf, password, slug } = this.user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'password',
        label: 'Editar senha',
        user: {
          _csrf,
          password,
          passwordConfirmation: null,
          passwordCurrent: null,
          slug,
        },
      },
    });
    return await modal.present();
  }

  public async passwordCreate(user: User): Promise<void> {
    if (user?.blockade) {
      return;
    }
    const { _csrf, password, slug } = user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'passwordCreate',
        label: 'Cadastrar senha',
        user: {
          _csrf,
          password,
          passwordConfirmation: null,
          slug,
        },
      },
    });
    return await modal.present();
  }
}
