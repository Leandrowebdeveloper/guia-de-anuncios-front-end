import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/interface';
import { FormUserPlanComponent } from './form/form.component';

@Component({
  selector: 'app-plan-user-component',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class UserPlanComponent {
  @Input() user!: Pick<
    User,
    'id' | '_csrf' | 'plan' | 'password' | 'blockade'
  > | void;
  constructor(private modalController: ModalController) {}

  public async plan(): Promise<void> {
    if (this.user) {
      const { _csrf, plan, password, id } = this.user;
      const modal = await this.modalController.create({
        component: FormUserPlanComponent,
        componentProps: {
          action: 'plan',
          label: 'Editar plano',
          user: { _csrf, plan, password, id },
        },
      });
      return await modal.present();
    }
  }
}
