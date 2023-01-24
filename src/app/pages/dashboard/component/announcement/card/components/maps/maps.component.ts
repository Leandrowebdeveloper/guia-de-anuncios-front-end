import { FormBuilder, FormGroup } from '@angular/forms';
import { Announcement, Coordinate, User } from 'src/app/interface';
import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Subscription } from 'rxjs';
import { DeleteCoordinateService } from './service/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { CoordinateAnnouncementService } from '../../../map/service/map.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/components/present-plan/animations/modal.service';
import { PresentPlanComponent } from 'src/app/components/present-plan/present-plan.component';
import { AlertService } from 'src/app/utilities/alert/alert.service';

@Component({
  selector: 'app-maps-card',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class CardMapsComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;
  @Input() announcement!: Pick<
    Announcement,
    'title' | 'coordinate' | '_csrf' | 'id'
  >;
  @Input() user!: Pick<User, 'level' | 'plan'>;
  newMap: GoogleMap;
  public coordinate: Coordinate;
  private $delete: Subscription;
  private form: FormGroup;
  private map: Subscription;
  constructor(
    private fb: FormBuilder,
    private deleteCoordinateService: DeleteCoordinateService,
    private coordinateAnnouncementService: CoordinateAnnouncementService,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private alertController: AlertController,
    private alertService: AlertService,
    private modalController: ModalController,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.coordinate = this.announcement?.coordinate;
  }

  ngAfterViewInit(): void {
    this.createMap();
  }

  public async destroy(): Promise<void> {
    if (this.user?.level === '1' && this.coordinate) {
      const alert = await this.alertController.create({
        header: 'Excluir Coordenadas',
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
                Coordinate & { password: string },
                '_csrf' | 'id' | 'password'
              > = {
                ...event,
                // eslint-disable-next-line no-underscore-dangle
                _csrf: this.announcement._csrf,
                id: this.coordinate?.id,
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

  public async coordinates(): Promise<void | Subscription> {
    if (this.user?.plan?.type === 'free') {
      const modal = await this.modalController.create({
        component: PresentPlanComponent,
        enterAnimation: this.modalService.enterAnimation,
        leaveAnimation: this.modalService.leaveAnimation,
      });
      return await modal.present();
    }
    const position = await this.coordinateAnnouncementService.getCoordinate();
    if (position instanceof GeolocationPosition) {
      return this.addCoordinate(position);
    } else if (position instanceof GeolocationPositionError) {
      this.coordinateAnnouncementService.showError(position);
    } else {
      this.alertService.alert('Ateção', position?.message);
    }
  }

  private addCoordinate(position: GeolocationPosition): Subscription {
    let data: Coordinate;
    const message: string = this.announcement?.coordinate?.announcementId
      ? 'Editando mapa...'
      : 'Cadastrando mapa...';
    const loading = this.loadingService.show(message);

    if (this.announcement?.coordinate?.announcementId) {
      data = this.announcement?.coordinate;
    } else {
      data = {
        announcementId: this.announcement?.id,
        latitude: position?.coords?.latitude,
        longitude: position?.coords?.longitude,
      };
    }
    // eslint-disable-next-line no-underscore-dangle
    data._csrf = this.announcement?._csrf;

    this.form = this.fb.group(data);
    return this.send(loading);
  }

  private send(loading: Promise<HTMLIonLoadingElement>): Subscription {
    return (this.map = this.coordinateAnnouncementService
      .coordinate(this.form.value)
      .subscribe(
        (coordinate_: Coordinate) => {
          this.announcement.coordinate = coordinate_;
          this.coordinate = coordinate_;
          setTimeout(() => this.createMap(), 1500);
          return this.messageService.success(
            coordinate_?.message,
            loading,
            this.map,
            2000
          );
        },
        (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.map)
      ));
  }

  private delete(
    coordinate: Pick<
      Coordinate & { password: string },
      '_csrf' | 'id' | 'password'
    >
  ): Subscription {
    if (this.user?.level === '1' && this.coordinate) {
      const loading = this.loadingService.show('Excluindo coordenadas...');
      return (this.$delete = this.deleteCoordinateService
        .delete(coordinate)
        .subscribe(
          (coordinate_: Pick<Coordinate, 'message'>) => {
            this.messsage(coordinate_, loading);
            this.announcement.coordinate = null;
            return (this.coordinate = null);
          },
          (error: HttpErrorResponse) =>
            this.messageService.error(error, loading, this.$delete)
        ));
    }
  }

  private messsage(
    coordinate: Pick<Coordinate, 'message'>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> {
    return this.messageService.success(
      coordinate?.message,
      loading,
      this.$delete
    );
  }

  private async createMap(): Promise<void> {
    if (this.mapRef?.nativeElement && this.coordinate?.id) {
      const { latitude, longitude } = this.coordinate;
      const latLng = { lat: Number(latitude), lng: Number(longitude) };
      this.newMap = await GoogleMap.create({
        id: 'my-cool-map',
        element: this.mapRef.nativeElement,
        apiKey: 'AIzaSyCTxavkMKLA6l6nh3CamGrzXKKzX2wQizU',
        config: {
          center: latLng,
          zoom: 13,
        },
      });
      await this.newMap.addMarker({
        title: this.announcement?.title,
        coordinate: latLng,
      });
    }
  }
}
