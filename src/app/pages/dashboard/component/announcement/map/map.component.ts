import { CoordinateAnnouncementService } from 'src/app/pages/dashboard/component/announcement/map/service/map.service';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Announcement, User, Coordinate } from 'src/app/interface';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { AlertService } from 'src/app/utilities/alert/alert.service';
import { ModalService } from 'src/app/components/present-plan/animations/modal.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PresentPlanComponent } from 'src/app/components/present-plan/present-plan.component';

@Component({
  selector: 'app-map-announcement-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class AnnouncementMapComponent implements OnInit {
  @Input() announcement!: Pick<
    Announcement,
    '_csrf' | 'id' | 'coordinate' | 'plan' | 'categoryAnnouncement' | 'title'
  > | void;
  @Input() user!: Pick<User, 'level' | 'plan'> | void;
  private $delete!: Subscription;
  private form!: FormGroup;
  private map!: Subscription;
  private isMobile!: boolean;
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
  }

  public async openForm(): Promise<void> {
    if (this.user?.level === '2') {
      await this.coordinate();
    }
  }

  public async openFormAdmin(): Promise<void> {
    await this.coordinate();
  }

  public async coordinate(): Promise<void | Subscription> {
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
    if (this.user?.level === '1' && this.announcement?.coordinate) {
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
              const data: Coordinate & { password: string } = {
                ...event,
                _csrf: this.announcement?._csrf,
                id: this.announcement?.coordinate?.id,
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

  private addCoordinate(position: GeolocationPosition): Subscription | void {
    const message: string = this.announcement?.coordinate?.announcementId
      ? 'Editando mapa...'
      : 'Cadastrando mapa...';
    const loading = this.loadingService.show(message);

    const coordinate = this.loadCoordinate(position);
    if (coordinate) {
      this.form = this.fb.group(coordinate);
      return this.send(loading);
    }
  }

  private loadCoordinate(position: GeolocationPosition): Coordinate | void {
    if (this.announcement?.coordinate?.announcementId) {
      this.announcement.coordinate._csrf = this.announcement?._csrf;
      return this.announcement.coordinate;
    } else {
      if (this.announcement?.id) {
        return {
          announcementId: this.announcement?.id,
          latitude: position?.coords?.latitude,
          longitude: position?.coords?.longitude,
          _csrf: this.announcement?._csrf,
        };
      }
    }
  }

  private send(loading: Promise<HTMLIonLoadingElement>) {
    return (this.map = this.coordinateAnnouncementService
      .coordinate(this.form.value)
      .subscribe({
        next: (coordinate_: Coordinate): Promise<number> | void => {
          if (coordinate_?.message) {
            if (this.announcement) this.announcement.coordinate = coordinate_;
            return this.messageService.success(
              coordinate_?.message,
              loading,
              this.map,
              2000
            );
          }
        },
        error: (error: HttpErrorResponse) =>
          this.messageService.error(error, loading, this.map),
      }));
  }

  private delete(
    coordinate: Coordinate & { password: string }
  ): Subscription | void {
    if (this.user?.level === '1' && this.announcement?.coordinate) {
      const loading = this.loadingService.show('Excluindo coordenadas...');
      return (this.$delete = this.coordinateAnnouncementService
        .delete(coordinate)
        .subscribe({
          next: (coordinate_: Coordinate) => {
            this.messsage(coordinate_, loading);
            if (this.announcement) this.announcement.coordinate = null;
          },
          error: (error: HttpErrorResponse) =>
            this.messageService.error(error, loading, this.$delete),
        }));
    }
  }

  private messsage(
    coordinate: Pick<Coordinate, 'message'>,
    loading: Promise<HTMLIonLoadingElement>
  ): Promise<number> | void {
    if (coordinate?.message) {
      return this.messageService.success(
        coordinate?.message,
        loading,
        this.$delete
      );
    }
  }

  private setPlatform(): void {
    this.plt.ready().then(() => {
      this.isMobile =
        this.plt.is('hybrid') || this.plt.is('android') || this.plt.is('ios');
    });
  }
}
