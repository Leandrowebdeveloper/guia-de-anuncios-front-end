import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/interface';
import { AnnouncementFormComponent } from 'src/app/pages/dashboard/component/announcement/announcement/form/form.component';

@Component({
  selector: 'app-admin-button-create-announcement',
  templateUrl: './button-create.component.html',
  styleUrls: ['./button-create.component.scss'],
})
export class AnnouncementAdminButtonCreateComponent {
  @Input() user!: Required<Pick<User, 'id' | '_csrf'>> | void;
  @Input() isAdmin!: boolean;

  constructor(private modalController: ModalController) {}

  public async createAnnouncement() {
    if (this.user) {
      const modal = await this.modalController.create({
        component: AnnouncementFormComponent,
        componentProps: {
          action: 'announcement',
          label: 'Cadastrar anúncio',
          announcement: {
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
}
