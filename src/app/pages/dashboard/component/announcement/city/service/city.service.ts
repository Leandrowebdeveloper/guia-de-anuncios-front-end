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
  | Citie
  | Pick<
      Citie & {
        password: string;
      },
      '_csrf' | 'id' | 'password' | 'message'
    >
> {
  private citieEvent = new EventEmitter<Citie>(undefined);
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private managementAnnouncementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `citie`;
  }

  public get getCitieEvent() {
    return this.citieEvent.asObservable();
  }

  public set setCitie(citie: Required<Citie>) {
    if (this.managementAnnouncementService.getAnnouncement) {
      this.managementAnnouncementService.getAnnouncement.citie = citie;
      this.managementAnnouncementService.setAnnouncement =
        this.managementAnnouncementService.getAnnouncement;
    }
    this.citieEvent.emit(citie);
  }

  public citie(citie: Required<Citie>): Observable<Citie> {
    if (citie?.id) {
      return this.patch(citie).pipe(
        tap((citie_: Required<Citie>) => (this.setCitie = citie_))
      );
    } else {
      return this.create(citie).pipe(
        tap((citie_: Required<Citie>) => (this.setCitie = citie_))
      );
    }
  }

  public delete(
    citie: Pick<Citie & { password: string }, '_csrf' | 'id' | 'password'>
  ): Observable<
    Pick<
      Citie & {
        password: string;
      },
      '_csrf' | 'id' | 'password' | 'message'
    >
  > {
    return this.destroy(citie).pipe(
      tap(
        (
          c: Pick<
            Citie & {
              password: string;
            },
            '_csrf' | 'id' | 'password' | 'message'
          >
        ) => (this.setCitie = null)
      )
    );
  }
}
