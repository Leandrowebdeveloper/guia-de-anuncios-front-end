import { FormGroup, FormBuilder } from '@angular/forms';
import { Announcement, Coordinate, User } from 'src/app/interface';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/utilities/alert/alert.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MapService } from './service/map.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';

@Component({
  selector: 'app-map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() announcement!: Announcement;
  @Input() user!: User;
  private form: FormGroup;
  private map: Subscription;
  constructor(
    private fb: FormBuilder,
    private mapService: MapService,
    public messageService: MessageService,
    private authService: AuthService,
    private alertService: AlertService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {}

  // Coordenadas
  public async coordinates(announcement: Announcement): Promise<Subscription> {
    const position = await this.getCoordinate();
    if (position instanceof GeolocationPosition) {
      return this.addCoordinate(position, announcement);
    } else if (position instanceof GeolocationPositionError) {
      this.showError(position);
    } else {
      this.alertService.alert('Ateção', position.message);
    }
  }

  private addCoordinate(
    position: GeolocationPosition,
    announcement: Announcement
  ): Subscription {
    const message: string = announcement?.coordinate?.announcementId
      ? 'Editando mapa...'
      : 'Cadastrando mapa...';
    const loading = this.loadingService.show(message);
    this.form = this.fb.group({
      announcementId: announcement?.coordinate?.announcementId,
      latitude: String(position?.coords?.latitude),
      longitude: String(position?.coords?.longitude),
      _csrf: this.authService?.getCsrf,
    });
    return this.send(loading);
  }

  private send(loading: Promise<HTMLIonLoadingElement>): Subscription {
    return (this.map = this.mapService.coordinate(this.form.value).subscribe(
      (coordinate_: Coordinate) =>
        this.messageService.success(
          coordinate_.message,
          loading,
          this.map,
          2000
        ),
      (error: HttpErrorResponse) =>
        this.messageService.error(error, null, this.map)
    ));
  }

  private async getCoordinate(): Promise<
    GeolocationPosition | GeolocationPositionError | Error
  > {
    return await new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => resolve(position),
          (error: GeolocationPositionError) => reject(error)
        );
      } else {
        reject(
          new Error('A geolocalização não é suportada por este navegador.')
        );
      }
    });
  }

  private async showError(error: GeolocationPositionError): Promise<void> {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.alertService.alert(
          'Ateção',
          'O usuário negou a solicitação de geolocalização.'
        );
        break;
      case error.POSITION_UNAVAILABLE:
        this.alertService.alert(
          'Ateção',
          'As informações de localização não estão disponíveis.'
        );
        break;
      case error.TIMEOUT:
        this.alertService.alert(
          'Ateção',
          'A solicitação para obter a localização do usuário expirou.'
        );
        break;
      default:
        this.alertService.alert('Ateção', 'Ocorreu um erro desconhecido.');
        break;
    }
  }
}
