import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Citie } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CityAnnouncementService } from '../../../../city/service/city.service';

@Injectable()
export class DeleteCitieService extends HttpService<
  Pick<Citie & { password: string }, '_csrf' | 'id' | 'password' | 'message'>
> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private citieService: CityAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `admin-announcement/citie`;
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
      tap(() => (this.citieService.setCitie = null))
    );
  }
}
