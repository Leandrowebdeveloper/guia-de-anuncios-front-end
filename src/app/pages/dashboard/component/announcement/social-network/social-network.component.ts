import { SocialNetworkAnnouncementService } from './service/social-network.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { Subscription } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalService } from 'src/app/components/present-plan/animations/modal.service';
import { PresentPlanComponent } from 'src/app/components/present-plan/present-plan.component';
import { Announcement, SocialNetwork, User } from 'src/app/interface';
import { AnnouncementFormSocialNetworkComponent } from './form/form.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-social-network-component',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss'],
})
export class AnnouncementSocialNetworkComponent implements OnInit, OnDestroy {
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
  > | void;
  @Input() user!: Pick<User, 'level'> | void;
  private $delete!: Subscription;
  private $update!: Subscription;
  constructor(
    private modalController: ModalController,
    private modalService: ModalService,
    private alertController: AlertController,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private socialNetworkAnnouncementService: SocialNetworkAnnouncementService
  ) {}

  ngOnDestroy(): void {
    this.$update.unsubscribe();
  }

  ngOnInit(): void {
    this.update();
  }

  public async openForm(): Promise<void> {
    if (this.user?.level === '2') {
      await this.socialNetwork();
    }
  }

  public async openFormAdmin(): Promise<void> {
    await this.socialNetwork();
  }

  // Rede social
  public async socialNetwork(): Promise<void> {
    let modal: HTMLIonModalElement;
    if (this.announcement) {
      if (this.announcement?.plan?.type === 'free') {
        modal = await this.modalController.create({
          component: PresentPlanComponent,
          cssClass: 'modal-wrapper',
          componentProps: {
            announcement: this.announcement,
          },
          enterAnimation: this.modalService.enterAnimation,
          leaveAnimation: this.modalService.leaveAnimation,
        });
        return await modal.present();
      }
      const label = this.getLabel(this.announcement);
      const socialNetwork = this.getSocialNetwork(this.announcement);
      modal = await this.modalController.create({
        component: AnnouncementFormSocialNetworkComponent,
        cssClass: 'modal-wrapper',
        componentProps: {
          label,
          socialNetwork,
        },
      });
      return await modal.present();
    }
  }

  private getLabel(announcement: Pick<Announcement, 'socialNetwork'>) {
    if (announcement?.socialNetwork) {
      return 'Editar rede social';
    } else {
      return 'Cadastrar rede social';
    }
  }

  private getSocialNetwork(
    announcement: Pick<Announcement, '_csrf' | 'id' | 'socialNetwork'>
  ) {
    const _csrf = announcement?._csrf;
    if (announcement?.socialNetwork) {
      return { ...announcement?.socialNetwork, _csrf };
    } else {
      return {
        _csrf,
        facebook: null,
        instagran: null,
        announcementId: announcement?.id,
      };
    }
  }

  public async destroy(): Promise<void> {
    if (this.user?.level === '1' && this.announcement?.socialNetwork) {
      const alert = await this.alertController.create({
        header: 'Excluir contato',
        subHeader: this.announcement?.title,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {},
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: (event) => {
              const data: SocialNetwork & { password: string } = {
                ...event,
                _csrf: this.announcement && this.announcement._csrf,
                id: this.announcement?.socialNetwork?.id,
              };
              return this.delete(data);
            },
          },
        ],
        inputs: [
          {
            name: 'password',
            type: 'password',
            placeholder: 'Senha',
            min: 8,
            max: 16,
          },
        ],
      });

      await alert.present();
    }
  }

  private delete(
    socialNetwork: SocialNetwork & { password: string }
  ): Subscription | void {
    if (this.user?.level === '1' && this.announcement?.socialNetwork) {
      const loading = this.loadingService.show('Excluindo rede social...');
      return (this.$delete = this.socialNetworkAnnouncementService
        .delete(socialNetwork)
        .subscribe({
          next: (socialNetwork_: Pick<SocialNetwork, 'message'>) => {
            this.messsage(socialNetwork_, loading);
            if (this.announcement?.socialNetwork)
              this.announcement.socialNetwork = null;
          },
          error: (error: HttpErrorResponse) =>
            this.messageService.error(error, loading, this.$delete),
        }));
    }
  }

  private messsage(
    socialNetwork: Pick<SocialNetwork, 'message'>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> | void {
    if (socialNetwork?.message) {
      return this.messageService.success(
        socialNetwork?.message,
        loading,
        this.$delete
      );
    }
  }

  private update(): Subscription {
    return (this.$update =
      this.socialNetworkAnnouncementService.getSocialNetworkEvent.subscribe({
        next: (socialNetwork: SocialNetwork | null) => {
          if (this.announcement?.id === socialNetwork?.announcementId) {
            if (this.announcement?.socialNetwork)
              this.announcement.socialNetwork = socialNetwork;
          }
        },
      }));
  }
}
