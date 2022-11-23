import { tap } from 'rxjs/operators';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Coordinate } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ManagementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable({
  providedIn: 'root',
})
export class MapService extends HttpService<Coordinate> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    public messageService: MessageService,
    private managementService: ManagementService
  ) {
    super(http, storageService);
    this.setApi = `auth-announcement/coordinate`;
  }

  public set setCoordinate(coordinate: Coordinate) {
    this.managementService.getAnnouncement.coordinate = coordinate;
    this.managementService.setAnnouncement =
      this.managementService.getAnnouncement;
  }

  public coordinate(coordinate: Coordinate): Observable<Coordinate | number[]> {
    if (coordinate?.id) {
      return this.patch(coordinate).pipe(
        tap((coordinate_: Coordinate) => (this.setCoordinate = coordinate_))
      );
    } else {
      return this.create(coordinate).pipe(
        tap((coordinate_: Coordinate) => (this.setCoordinate = coordinate_))
      );
    }
  }
}
