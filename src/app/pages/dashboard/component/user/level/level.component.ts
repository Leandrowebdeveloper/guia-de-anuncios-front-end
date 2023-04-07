import { FormUserLevelComponent } from './form/form.component';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-level-user-component',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class UserLevelComponent {
  @Input() user!: Required<
    Pick<User, '_csrf' | 'slug' | 'password' | 'level' | 'blockade'>
  > | void;
  constructor(private modalController: ModalController) {}

  public async level(): Promise<void> {
    if (this.user) {
      const { _csrf, level, slug, password } = this.user;
      const modal = await this.modalController.create({
        component: FormUserLevelComponent,
        componentProps: {
          action: 'level',
          label: 'Editar nível',
          user: { _csrf, slug, password, level },
        },
      });
      return await modal.present();
    }
  }
}
