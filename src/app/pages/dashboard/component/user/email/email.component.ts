import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/interface';
import { FormUserEmailComponent } from './form/form.component';

@Component({
  selector: 'app-email-user-component',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class UserEmailComponent {
  @Input() user!: User;
  constructor(private modalController: ModalController) {}

  public async email(): Promise<void> {
    if (this.user?.blockade) {
      return;
    }
    const { _csrf, email, slug, password } = this.user;
    const modal = await this.modalController.create({
      component: FormUserEmailComponent,
      componentProps: {
        action: 'email',
        label: 'Editar email',
        user: { _csrf, email, slug, password },
      },
    });
    return await modal.present();
  }
}
