import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Citie, Announcement } from 'src/app/interface';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { AnnouncementCityComponent } from '../city.component';
import { CityAnnouncementService } from '../service/city.service';

@Component({
  selector: 'app-citie-admin-management',
  templateUrl: './citie.component.html',
  styleUrls: ['./citie.component.scss'],
})
export class AdminManagementCitieComponent implements OnInit, OnDestroy {
  @Input() announcement!: Pick<
    Announcement,
    '_csrf' | 'id' | 'title' | 'citie'
  >;
  public citie: Citie;

  private $delete: Subscription;
  private $update: Subscription;
  constructor(
    private alertController: AlertController,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private cityAnnouncementComponent: AnnouncementCityComponent,
    private citieService: CityAnnouncementService
  ) {}

  ngOnInit() {
    this.citie = this.announcement?.citie;
    this.update();
  }

  ngOnDestroy(): void {
    this.$update.unsubscribe();
  }

  public async destroy(): Promise<void> {
    if (this.citie) {
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
              const data: Pick<
                Citie & { password: string },
                '_csrf' | 'id' | 'password'
              > = {
                ...event,
                // eslint-disable-next-line no-underscore-dangle
                _csrf: this.announcement._csrf,
                id: this.citie?.id,
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
    this.cityAnnouncementComponent.cities(this.announcement);
  }

  private delete(
    citie: Pick<Citie & { password: string }, '_csrf' | 'id' | 'password'>
  ): Subscription {
    if (this.citie) {
      const loading = this.loadingService.show('Excluindo cidade...');
      return (this.$delete = this.citieService.delete(citie).subscribe(
        (address_: Pick<Citie, 'message'>) => {
          this.messsage(address_, loading);
          this.announcement.citie = null;
          return (this.citie = null);
        },
        (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.$delete)
      ));
    }
  }

  private messsage(
    citie: Pick<Citie, 'message'>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    return this.messageService.success(citie?.message, loading, this.$delete);
  }

  private update(): Subscription {
    return (this.$update = this.citieService.getCitieEvent.subscribe(
      (citie: Citie) => {
        if (this.announcement?.id === citie?.announcementId) {
          this.announcement.citie = citie;
          this.citie = citie;
        }
      }
    ));
  }
}
