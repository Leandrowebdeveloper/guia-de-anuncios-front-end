import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/interface';
import { FormAnnouncementComponent } from 'src/app/pages/dashboard/component/announcement/announcement/form/form.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-button-create-announcement',
  templateUrl: './button-create.component.html',
  styleUrls: ['./button-create.component.scss'],
})
export class ButtonCreateAnnouncementComponent {
  @Input() user!: Required<Pick<User, 'id' | '_csrf'>>;
  @Input() isButton!: boolean;

  constructor(private modalController: ModalController) {}

  public async createAnnouncement() {
    const modal = await this.modalController.create({
      component: FormAnnouncementComponent,
      componentProps: {
        action: 'announcement',
        label: 'Cadastrar anúncio',
        announcement: {
          // eslint-disable-next-line no-underscore-dangle
          _csrf: this.user?._csrf,
          title: null,
          description: null,
          userId: this.user?.id,
        },
      },
    });
    return await modal.present();
  }
}
