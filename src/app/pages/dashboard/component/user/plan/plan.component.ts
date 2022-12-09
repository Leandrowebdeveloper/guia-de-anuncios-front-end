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
  @Input() user!: User;
  constructor(private modalController: ModalController) {}

  public async plan(): Promise<void> {
    const modal = await this.modalController.create({
      component: FormUserPlanComponent,
      componentProps: {
        action: 'plan',
        label: 'Editar plano',
        user: { ...this.user },
      },
    });
    return await modal.present();
  }
}
