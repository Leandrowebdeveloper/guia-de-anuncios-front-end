import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { Citie } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable()
export class CityAnnouncementService extends HttpService<
  Citie & {
    password: string;
  }
> {
  private citieEvent = new EventEmitter<Citie | null>(undefined);
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    private managementAnnouncementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `citie`;
  }

  public get getCitieEvent() {
    return this.citieEvent.asObservable();
  }

  public set setCitie(
    citie:
      | (Citie & {
          password: string;
        })
      | null
  ) {
    if (this.managementAnnouncementService.getAnnouncement) {
      this.managementAnnouncementService.getAnnouncement.citie = citie;
      this.managementAnnouncementService.setAnnouncement =
        this.managementAnnouncementService.getAnnouncement;
    }
    this.citieEvent.emit(citie);
  }

  public citie(
    citie: Citie & {
      password: string;
    }
  ): Observable<Citie> {
    if (citie?.id) {
      return this.patch(citie).pipe(
        tap(
          (
            citie_: Citie & {
              password: string;
            }
          ) => (this.setCitie = citie_)
        )
      );
    } else {
      return this.create(citie).pipe(
        tap(
          (
            citie_: Citie & {
              password: string;
            }
          ) => (this.setCitie = citie_)
        )
      );
    }
  }

  public delete(
    citie: Citie & {
      password: string;
    }
  ): Observable<
    Citie & {
      password: string;
    }
  > {
    return this.destroy(citie).pipe(tap((): null => (this.setCitie = null)));
  }
}
