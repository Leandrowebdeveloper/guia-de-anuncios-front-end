import { CityAnnouncementService } from './service/city.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Announcement, Citie, User } from 'src/app/interface';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { AnnouncementFormCityComponent } from './form/form.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-city-announcement-component',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class AnnouncementCityComponent implements OnInit, OnDestroy {
  @Input() announcement!: Pick<
    Announcement,
    'citie' | '_csrf' | 'id' | 'category' | 'title' | 'categoryAnnouncement'
  > | void;

  @Input() user!: Pick<User, 'level'> | void;

  private $delete!: Subscription;
  private $update!: Subscription;
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private citieService: CityAnnouncementService
  ) {}

  ngOnDestroy(): void {
    this.$update.unsubscribe();
  }

  ngOnInit(): void {
    this.update();
  }

  public async openForm(): Promise<void> {
    if (this.user?.level === '2') {
      await this.cities();
    }
  }

  public async openFormAdmin(): Promise<void> {
    await this.cities();
  }

  public async cities(): Promise<void> {
    if (this.announcement) {
      const citie = this.buildCitie(this.announcement);
      const label = this.buildLabel(this.announcement);
      const modal = await this.modalController.create({
        component: AnnouncementFormCityComponent,
        cssClass: 'modal-wrapper',
        componentProps: {
          label,
          citie,
        },
      });
      return await modal.present();
    }
  }

  private buildCitie(
    announcement: Pick<Announcement, 'citie' | '_csrf' | 'id'>
  ): Citie | void {
    const _csrf = announcement?._csrf;
    if (announcement?.citie) {
      return { ...announcement?.citie, _csrf };
    } else {
      return {
        _csrf,
        city: null,
        uf: 'GO',
        announcementId: announcement?.id,
      };
    }
  }

  private buildLabel(
    announcement: Pick<Announcement, 'citie' | '_csrf' | 'id'>
  ): string | void {
    if (announcement?.citie) {
      return 'Editar cidade';
    } else {
      return 'Cadastrar cidade';
    }
  }

  public async destroy(): Promise<void> {
    if (this.announcement?.citie) {
      const alert = await this.alertController.create({
        header: 'Excluir endereço',
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
              const data: Citie & { password: string } = {
                ...event,
                _csrf: this.announcement?._csrf,
                id: this.announcement?.citie?.id,
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

  private delete(citie: Citie & { password: string }): Subscription | void {
    if (this.announcement?.citie) {
      const loading = this.loadingService.show('Excluindo cidade...');
      return (this.$delete = this.citieService.delete(citie).subscribe({
        next: (address_: Pick<Citie, 'message'>) => {
          this.messsage(address_, loading);
          if (this.announcement) this.announcement.citie = null;
        },
        error: (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.$delete),
      }));
    }
  }

  private messsage(
    citie: Pick<Citie, 'message'>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> | void {
    if (citie?.message) {
      return this.messageService.success(citie?.message, loading, this.$delete);
    }
  }

  private update(): Subscription {
    return (this.$update = this.citieService.getCitieEvent.subscribe({
      next: (citie: Citie | null) => {
        if (this.announcement?.id === citie?.announcementId) {
          if (this.announcement) this.announcement.citie = citie;
        }
      },
    }));
  }
}
