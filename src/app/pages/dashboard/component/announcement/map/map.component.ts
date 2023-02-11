import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Announcement, Coordinate, User } from 'src/app/interface';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/utilities/alert/alert.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CoordinateAnnouncementService } from './service/map.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { PresentPlanComponent } from 'src/app/components/present-plan/present-plan.component';
import { ModalService } from 'src/app/components/present-plan/animations/modal.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-map-announcement-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class AnnouncementMapComponent implements OnInit {
  @Input() announcement!: Pick<
    Announcement,
    '_csrf' | 'id' | 'coordinate' | 'plan' | 'categoryAnnouncement'
  >;
  public isAdmin: boolean;
  private form: FormGroup;
  private map: Subscription;
  constructor(
    private fb: FormBuilder,
    private coordinateAnnouncementService: CoordinateAnnouncementService,
    private messageService: MessageService,
    private alertService: AlertService,
    private loadingService: LoadingService,
    private modalController: ModalController,
    private modalService: ModalService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.isAdmin = this.authService.getLevel === '1';
  }

  public async coordinates(): Promise<void | Subscription> {
    if (this.announcement?.plan?.type === 'free') {
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
        (coordinate_: Required<Coordinate>) => {
          this.coordinateAnnouncementService.setCoordinate = coordinate_;
          this.messageService.success(
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
}
