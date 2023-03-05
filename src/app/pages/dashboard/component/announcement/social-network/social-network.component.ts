import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/components/present-plan/animations/modal.service';
import { PresentPlanComponent } from 'src/app/components/present-plan/present-plan.component';
import { Announcement, SocialNetwork, User } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AnnouncementFormSocialNetworkComponent } from './form/form.component';

@Component({
  selector: 'app-social-network-component',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss'],
})
export class AnnouncementSocialNetworkComponent implements OnInit {
  @Input() announcement!: Pick<
    Announcement,
    | 'title'
    | 'socialNetwork'
    | '_csrf'
    | 'id'
    | 'plan'
    | 'category'
    | 'categoryAnnouncement'
    | 'authSocial'
  >;
  public user: User;
  constructor(
    private modalController: ModalController,
    private modalService: ModalService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.user = this.authService.getUser;
  }

  // Rede social
  public async socialNetwork(
    announcement: Pick<
      Announcement,
      'title' | 'socialNetwork' | '_csrf' | 'id' | 'plan'
    >
  ): Promise<void> {
    let modal: HTMLIonModalElement;
    if (announcement?.plan?.type === 'free') {
      modal = await this.modalController.create({
        component: PresentPlanComponent,
        enterAnimation: this.modalService.enterAnimation,
        leaveAnimation: this.modalService.leaveAnimation,
      });
      return await modal.present();
    }
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

    modal = await this.modalController.create({
      component: AnnouncementFormSocialNetworkComponent,
      componentProps: {
        label,
        socialNetwork,
      },
    });
    return await modal.present();
  }
}
