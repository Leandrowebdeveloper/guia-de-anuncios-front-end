import { Subscription } from 'rxjs';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { Platform, NavController, ViewDidEnter } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Loader } from '@googlemaps/js-api-loader';
import { ActivatedRoute } from '@angular/router';
import { CoordinateAnnouncementService } from '../../dashboard/component/announcement/map/service/map.service';
import { AlertService } from 'src/app/utilities/alert/alert.service';

@Component({
  selector: 'app-maps-component',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss', '../../../footer/footer.page.scss'],
})
export class MapsPage implements OnInit, OnDestroy, ViewDidEnter {
  @ViewChild('map', { static: true }) mapRef!: ElementRef<HTMLElement>;
  @ViewChild('sidebar', { static: true }) sidebar!: ElementRef<HTMLElement>;

  public isMobile: boolean;
  public isDirections: boolean;
  public toggleInfoMap = false;

  private $route: Subscription;
  private params: { latitude: string; longitude: string; anuncio: string };
  private directionsRenderer: google.maps.DirectionsRenderer;
  private directionsService: google.maps.DirectionsService;
  private startPosition: google.maps.LatLng;
  private mapId: number;
  private destinationPosition: google.maps.LatLng;
  private map: google.maps.Map;
  private loader = new Loader({
    apiKey: environment.mapsKey,
    version: 'weekly',
  });

  constructor(
    private plt: Platform,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private coordinateAnnouncementService: CoordinateAnnouncementService,
    private alertService: AlertService
  ) {}

  ionViewDidEnter(): void {
    this.initializeMap();
  }

  ngOnDestroy(): void {
    this.$route.unsubscribe();
  }

  ngOnInit(): void {
    this.setPlatform();
  }

  public showInfoMap(): void {
    this.toggleInfoMap = !this.toggleInfoMap;
  }

  public back(): void {
    this.navCtrl.back();
  }

  public clearWatch(): void {
    if (
      this.startPosition?.lat === this.destinationPosition?.lat &&
      this.startPosition?.lng === this.destinationPosition?.lng
    ) {
      navigator.geolocation.clearWatch(this.mapId);
      setTimeout(() => (this.mapId = null), 1000);
      this.alertService.alert('Parabéns', 'você alcançou o destino');
    }
  }

  public async traceRoute(): Promise<void> {
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
            handler: async () => await this.setRoute(),
          },
        ],
      });
      return await alert.present();
    }
    return await this.setRoute();
  }

  private async setRoute(): Promise<void> {
    const position = await this.getWatchCoordinate();

    if (position instanceof GeolocationPosition) {
      this.buildCoordinate(position);
      this.loadRoute();
    } else if (position instanceof GeolocationPositionError) {
      this.coordinateAnnouncementService.showError(position);
    } else {
      this.alertService.alert('Ateção', position?.message);
    }
  }

  private loadRoute() {
    this.loader.load().then(() => {
      this.calculateRoute();
      this.clearWatch();
    });
  }

  private buildCoordinate(position: GeolocationPosition) {
    this.destinationPosition = new google.maps.LatLng(
      position?.coords?.latitude,
      position?.coords?.longitude
    );
  }

  private calculateRoute(): void {
    if (this.destinationPosition && this.startPosition) {
      this.calculateAndDisplayRoute();
    }
  }

  private calculateAndDisplayRoute(): void {
    this.directionsService
      .route(this.directionsRequest())
      .then((response) => this.directionsRenderer.setDirections(response))
      .catch((e) =>
        this.alertService.alert(
          'Ateção',
          'Não será permitido o acesso ao mapa.'
        )
      );
  }

  private directionsRequest(): google.maps.DirectionsRequest {
    return {
      origin: this.destinationPosition,
      destination: this.startPosition,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      drivingOptions: {
        departureTime: new Date(Date.now()),
        trafficModel: google.maps.TrafficModel.PESSIMISTIC,
      },
    };
  }

  private setPlatform(): void {
    this.plt.ready().then(() => {
      this.isMobile =
        this.plt.is('hybrid') || this.plt.is('android') || this.plt.is('ios');
    });
  }

  private initializeMap(): void {
    this.getParams();
    this.loader.load().then(() => {
      if (this.params) {
        this.directionsRenderer = new google.maps.DirectionsRenderer();
        this.directionsService = new google.maps.DirectionsService();
        this.buildStartCoordinate();
        this.buildMap();
      }
    });
  }

  private buildMap(): void {
    this.map = new google.maps.Map(this.mapRef.nativeElement, {
      center: this.startPosition,
      zoom: 14,
      disableDefaultUI: true,
    });

    this.directionsRenderer.setMap(this.map);

    this.directionsRenderer.setPanel(this.sidebar.nativeElement);

    const marker = new google.maps.Marker({
      position: this.startPosition,
      map: this.map,
      title: this.params?.anuncio,
      animation: google.maps.Animation.DROP,
    });
  }

  private buildStartCoordinate() {
    const { latitude, longitude } = this.params;
    this.startPosition = new google.maps.LatLng(
      Number(latitude),
      Number(longitude)
    );
  }

  private getParams(): Subscription {
    return (this.$route = this.route.queryParams.subscribe({
      next: (params: {
        latitude: string;
        longitude: string;
        anuncio: string;
      }) => (this.params = params),
    }));
  }

  private async getWatchCoordinate(): Promise<
    GeolocationPosition | GeolocationPositionError | Error
  > {
    return await new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        this.mapId = navigator.geolocation.watchPosition(
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
