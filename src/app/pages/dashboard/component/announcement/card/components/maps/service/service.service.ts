import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coordinate } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Observable } from 'rxjs';

@Injectable()
export class DeleteCoordinateService extends HttpService<
  Pick<
    Coordinate & { password: string },
    '_csrf' | 'id' | 'password' | 'message'
  >
> {
  constructor(http: HttpClient, public storageService: StorageService) {
    super(http, storageService);
    this.setApi = `coordinate`;
  }

  public delete(
    coordinate: Pick<
      Coordinate & { password: string },
      '_csrf' | 'id' | 'password'
    >
  ): Observable<
    Pick<
      Coordinate & {
        password: string;
      },
      '_csrf' | 'id' | 'password' | 'message'
    >
  > {
    return this.destroy(coordinate);
  }
}
