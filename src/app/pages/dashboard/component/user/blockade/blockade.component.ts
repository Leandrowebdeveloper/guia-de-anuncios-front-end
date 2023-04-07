import { User } from 'src/app/interface';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormUserBlockadeComponent } from './form/form.component';
import { UserBlockade } from './interface';

@Component({
  selector: 'app-blockade-user-component',
  templateUrl: './blockade.component.html',
  styleUrls: ['./blockade.component.scss'],
})
export class UserBlockadeComponent {
  @Input() user!: Pick<User, UserBlockade> | void;
  @Input() isAuth!: boolean;
  constructor(private modalController: ModalController) {}

  public async blockade(): Promise<void> {
    if (this.user) {
      const { _csrf, slug, blockade, messages } = this.user;
      const modal = await this.modalController.create({
        component: FormUserBlockadeComponent,
        componentProps: {
          isAuth: this.isAuth,
          action: 'blockade',
          label: 'Bloquear usuário',
          user: {
            _csrf,
            slug,
            blockade,
            messages,
          },
        },
      });
      return await modal.present();
    }
  }
}
