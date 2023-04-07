import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Loader } from '@googlemaps/js-api-loader';
import { Announcement } from 'src/app/interface';

@Component({
  selector: 'app-maps-component',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  @Input() announcement!: Pick<Announcement, 'title' | 'coordinate'>;

  @ViewChild('map', { static: true }) mapRef!: ElementRef<HTMLElement>;
  @ViewChild('sidebar', { static: true }) sidebar!: ElementRef<HTMLElement>;

  public isDirections!: boolean;
  public toggleInfoMap = false;
  public mapId!: number;

  private directionsRenderer!: google.maps.DirectionsRenderer;
  private startPosition!: google.maps.LatLng;
  private map!: google.maps.Map;
  private loader = new Loader({
    apiKey: environment.mapsKey,
    version: 'weekly',
  });

  ngOnInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {
    this.loader.load().then(() => {
      this.directionsRenderer = new google.maps.DirectionsRenderer();
      this.buildStartCoordinate();
      this.buildMap();
    });
  }

  private buildMap(): void {
    this.map = new google.maps.Map(this.mapRef?.nativeElement, {
      center: this.startPosition,
      zoom: 13,
      disableDefaultUI: true,
    });

    this.directionsRenderer.setMap(this.map);

    this.directionsRenderer.setPanel(this.sidebar?.nativeElement);

    const marker = new google.maps.Marker({
      position: this.startPosition,
      map: this.map,
      title: this.announcement?.title,
      animation: google.maps.Animation.DROP,
    });
  }

  private buildStartCoordinate(): void {
    if (this.announcement?.coordinate) {
      const { latitude, longitude } = this.announcement?.coordinate;
      this.startPosition = new google.maps.LatLng(
        Number(latitude),
        Number(longitude)
      );
    }
  }
}
