import { CoordinateAnnouncementService } from 'src/app/pages/dashboard/component/announcement/map/service/map.service';
import { Injectable } from '@angular/core';
import { AlertService } from 'src/app/utilities/alert/alert.service';
import { Platform } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { Announcement } from 'src/app/interface';

@Injectable()
export class GoogleMapsDirectionService {
  private _announcement!: Pick<Announcement, 'coordinate'>;

  private isMobile!: boolean;

  constructor(
    private plt: Platform,
    private coordinateAnnouncementService: CoordinateAnnouncementService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.setPlatform();
  }

  public get announcement(): Pick<Announcement, 'coordinate'> {
    return this._announcement;
  }

  public set announcement(value: Pick<Announcement, 'coordinate'>) {
    this._announcement = value;
  }

  public async traceRoute(): Promise<void> {
    if (this.isMobile) {
      const alert = await this.alertService.alertController.create({
        header: 'Observação:',
        message:
          'A geolocalização é mais precisa para dispositivos com GPS, como smartphones.',
        buttons: [
          {
            text: 'Cancelar',
          },
          {
            text: 'Confirmar',
            handler: async () => await this.setRoute(),
          },
        ],
      });
      return await alert.present();
    }
    return await this.setRoute();
  }

  private async setRoute(): Promise<void> {
    const position = await this.getCoordinate();

    if (position instanceof GeolocationPosition) {
      await this.openMapDesktop(position);
    } else if (position instanceof GeolocationPositionError) {
      this.coordinateAnnouncementService.showError(position);
    } else {
      this.alertService.alert('Ateção', position?.message);
    }
  }

  private async openMapDesktop(position: GeolocationPosition): Promise<void> {
    if (this.announcement?.coordinate) {
      const { latitude, longitude } = this.announcement?.coordinate;
      await Browser.open({
        url: `https://www.google.com/maps/dir/?api=1&origin=${position?.coords?.latitude},${position?.coords?.longitude}&destination=${latitude},${longitude}`,
      });
    }
  }

  private setPlatform(): void {
    this.plt.ready().then(() => {
      this.isMobile = this.plt.is('desktop');
    });
  }

  private async getCoordinate(): Promise<
    GeolocationPosition | GeolocationPositionError | Error
  > {
    return await new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => resolve(position),
          (error: GeolocationPositionError) => resolve(error)
        );
      } else {
        reject(
          new Error('A geolocalização não é suportada por este navegador.')
        );
      }
    });
  }
}
