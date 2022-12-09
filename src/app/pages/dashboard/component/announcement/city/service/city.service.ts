import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Citie } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable({
  providedIn: 'root',
})
export class CityService extends HttpService<Citie> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private managementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `auth-announcement/citie`;
  }

  public set setCitie(citie: Citie) {
    this.managementService.getAnnouncement.citie = citie;
    this.managementService.setAnnouncement =
      this.managementService.getAnnouncement;
  }

  public citie(citie: Citie): Observable<Citie | number[]> {
    if (citie?.id) {
      return this.patch(citie).pipe(
        tap((citie_: Citie) => (this.setCitie = citie_))
      );
    } else {
      return this.create(citie).pipe(
        tap((citie_: Citie) => (this.setCitie = citie_))
      );
    }
  }
}
