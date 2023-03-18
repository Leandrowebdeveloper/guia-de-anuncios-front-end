import { MessageService } from 'src/app/utilities/message/message.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Coordinate } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';
import { AlertService } from 'src/app/utilities/alert/alert.service';

@Injectable()
export class CoordinateAnnouncementService extends HttpService<
  | Coordinate
  | Pick<
      Coordinate & { password: string },
      '_csrf' | 'id' | 'password' | 'message'
    >
> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    public messageService: MessageService,
    private managementService: ManagementAnnouncementService,
    private alertService: AlertService
  ) {
    super(http, storageService);
    this.setApi = `coordinate`;
  }

  public set setCoordinate(coordinate: Required<Coordinate>) {
    this.managementService.getAnnouncement.coordinate = coordinate;
    this.managementService.setAnnouncement =
      this.managementService.getAnnouncement;
  }

  public coordinate(
    coordinate: Required<Coordinate>
  ): Observable<
    | Coordinate
    | Pick<
        Coordinate & { password: string },
        '_csrf' | 'id' | 'password' | 'message'
      >
    | number[]
  > {
    if (coordinate?.id) {
      return this.patch(coordinate);
    }
    return this.create(coordinate);
  }

  public async getCoordinate(): Promise<
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

  public async showError(error: GeolocationPositionError): Promise<void> {
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

  public delete(
    coordinate: Pick<
      Coordinate & { password: string },
      '_csrf' | 'id' | 'password'
    >
  ): Observable<
    | Coordinate
    | Pick<
        Coordinate & {
          password: string;
        },
        '_csrf' | 'id' | 'password' | 'message'
      >
  > {
    return this.destroy(coordinate);
  }
}
