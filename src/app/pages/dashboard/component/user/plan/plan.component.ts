import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/interface';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-plan-component',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  @Input() user!: User;
  @Input() pageEnbled!: boolean;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  public async plan(): Promise<void> {
    const { _csrf, plan, slug, password } = this.user;
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        action: 'plan',
        label: 'Editar plano',
        user: { _csrf, slug, password, plan },
      },
    });
    return await modal.present();
  }
}
