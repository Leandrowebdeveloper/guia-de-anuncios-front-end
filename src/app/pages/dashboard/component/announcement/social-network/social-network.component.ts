import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Announcement, SocialNetwork, User } from 'src/app/interface';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-social-network-component',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss'],
})
export class SocialNetworkComponent {
  @Input() announcement!: Announcement;
  @Input() user!: User;
  constructor(private modalController: ModalController) {}

  // Rede social
  public async socialNetwork(): Promise<void> {
    const announcement: Announcement = this.announcement;
    let socialNetwork: SocialNetwork;
    let label: string;
    if (announcement?.socialNetwork) {
      socialNetwork = announcement?.socialNetwork;
      // eslint-disable-next-line no-underscore-dangle
      socialNetwork._csrf = announcement?._csrf;
      label = 'Editar rede social';
    } else {
      socialNetwork = {
        // eslint-disable-next-line no-underscore-dangle
        _csrf: announcement?._csrf,
        facebook: null,
        instagran: null,
        announcementId: announcement?.id,
      };
      label = 'Cadastrar rede social';
    }

    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        label,
        socialNetwork,
      },
    });
    return await modal.present();
  }
}
