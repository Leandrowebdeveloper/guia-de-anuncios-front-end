import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Announcement, User } from 'src/app/interface';
import { SocialNetwork } from 'src/app/interface';
import { AlertController } from '@ionic/angular';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AnnouncementSocialNetworkComponent } from '../social-network.component';
import { SocialNetworkAnnouncementService } from '../service/social-network.service';

@Component({
  selector: 'app-social-network-admin-management',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss'],
})
export class AdminManagementSocialNetworkComponent
  implements OnInit, OnDestroy
{
  @Input() announcement!: Pick<
    Announcement,
    'title' | 'socialNetwork' | '_csrf' | 'id'
  >;
  @Input() user!: Pick<User, 'level'>;
  public socialNetwork: SocialNetwork;
  private $delete: Subscription;
  private $update: Subscription;
  constructor(
    private alertController: AlertController,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private socialNetworkAnnouncementComponent: AnnouncementSocialNetworkComponent,
    private socialNetworkAnnouncementService: SocialNetworkAnnouncementService
  ) {}

  ngOnInit() {
    this.socialNetwork = this.announcement?.socialNetwork;
    this.update();
  }

  ngOnDestroy(): void {
    this.$update.unsubscribe();
  }

  public async destroy(): Promise<void> {
    if (this.user?.level === '1' && this.socialNetwork) {
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
              const data: Pick<
                SocialNetwork & { password: string },
                '_csrf' | 'id' | 'password'
              > = {
                ...event,
                // eslint-disable-next-line no-underscore-dangle
                _csrf: this.announcement._csrf,
                id: this.socialNetwork?.id,
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

  public send(): void {
    this.socialNetworkAnnouncementComponent.socialNetwork(this.announcement);
  }

  private delete(
    socialNetwork: Pick<
      SocialNetwork & { password: string },
      '_csrf' | 'id' | 'password'
    >
  ): Subscription {
    if (this.user?.level === '1' && this.socialNetwork) {
      const loading = this.loadingService.show('Excluindo rede social...');
      return (this.$delete = this.socialNetworkAnnouncementService
        .delete(socialNetwork)
        .subscribe({
          next: (socialNetwork_: Pick<SocialNetwork, 'message'>) => {
            this.messsage(socialNetwork_, loading);
            this.announcement.socialNetwork = null;
            return (this.socialNetwork = null);
          },
          error: (error: HttpErrorResponse) =>
            this.messageService.error(error, loading, this.$delete),
        }));
    }
  }

  private messsage(
    socialNetwork: Pick<SocialNetwork, 'message'>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    return this.messageService.success(
      socialNetwork?.message,
      loading,
      this.$delete
    );
  }

  private update(): Subscription {
    return (this.$update =
      this.socialNetworkAnnouncementService.getSocialNetworkEvent.subscribe({
        next: (socialNetwork: SocialNetwork) => {
          if (this.announcement?.id === socialNetwork?.announcementId) {
            this.announcement.socialNetwork = socialNetwork;
            this.socialNetwork = socialNetwork;
          }
        },
      }));
  }
}
