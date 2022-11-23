import { FormComponent } from './form/form.component';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-email-component',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent {
  @Input() user!: User;
  constructor(private modalController: ModalController) {}

  public async email(): Promise<void> {
    if (this.user?.blockade) {
      return;
    }
    const { _csrf, email, slug, password } = this.user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'email',
        label: 'Editar email',
        user: { _csrf, email, slug, password },
      },
    });
    return await modal.present();
  }
}
