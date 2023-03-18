import { FormBuilder, FormGroup } from '@angular/forms';
import { Announcement, Coordinate, User } from 'src/app/interface';
import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { ModalService } from 'src/app/components/present-plan/animations/modal.service';
import { PresentPlanComponent } from 'src/app/components/present-plan/present-plan.component';
import { AlertService } from 'src/app/utilities/alert/alert.service';
import { CoordinateAnnouncementService } from '../service/map.service';

@Component({
  selector: 'app-maps-admin-management',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class AdminManagementMapsComponent implements OnInit {
  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;
  @Input() announcement!: Pick<
    Announcement,
    'title' | 'coordinate' | '_csrf' | 'id'
  >;
  @Input() user!: Pick<User, 'level' | 'plan'>;
  public coordinate: Coordinate;
  private $delete: Subscription;
  private form: FormGroup;
  private map: Subscription;
  private isMobile: boolean;
  constructor(
    private plt: Platform,
    private fb: FormBuilder,
    private coordinateAnnouncementService: CoordinateAnnouncementService,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private alertController: AlertController,
    private alertService: AlertService,
    private modalController: ModalController,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.setPlatform();
    this.coordinate = this.announcement?.coordinate;
  }

  public async setCoordinate(): Promise<void | Subscription> {
    if (this.user?.plan?.type === 'free') {
      const modal = await this.modalController.create({
        component: PresentPlanComponent,
        enterAnimation: this.modalService.enterAnimation,
        leaveAnimation: this.modalService.leaveAnimation,
      });
      return await modal.present();
    }
    if (!this.isMobile) {
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
            handler: () => this.coordinates(),
          },
        ],
      });
      return await alert.present();
    }
    return this.coordinates();
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
      .subscribe({
        next: (coordinate_: Coordinate) => {
          this.announcement.coordinate = coordinate_;
          this.coordinate = coordinate_;
          return this.messageService.success(
            coordinate_?.message,
            loading,
            this.map,
            2000
          );
        },
        error: (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.map),
      }));
  }

  private delete(
    coordinate: Pick<
      Coordinate & { password: string },
      '_csrf' | 'id' | 'password'
    >
  ): Subscription {
    if (this.user?.level === '1' && this.coordinate) {
      const loading = this.loadingService.show('Excluindo coordenadas...');
      return (this.$delete = this.coordinateAnnouncementService
        .delete(coordinate)
        .subscribe({
          next: (coordinate_: Pick<Coordinate, 'message'>) => {
            this.messsage(coordinate_, loading);
            this.announcement.coordinate = null;
            return (this.coordinate = null);
          },
          error: (error: HttpErrorResponse) =>
            this.messageService.error(error, loading, this.$delete),
        }));
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

  private setPlatform(): void {
    this.plt.ready().then(() => {
      this.isMobile =
        this.plt.is('hybrid') || this.plt.is('android') || this.plt.is('ios');
    });
  }
}
