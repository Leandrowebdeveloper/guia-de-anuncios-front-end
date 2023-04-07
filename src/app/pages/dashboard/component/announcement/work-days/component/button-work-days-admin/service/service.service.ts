import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkDays } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WorkDayAnnouncementService } from '../../../../work-days/service/work-days.service';

@Injectable()
export class DeleteWorkDayService extends HttpService<
  WorkDays & { password: string }
> {
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    private workDayService: WorkDayAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `workDays`;
  }

  public delete(workDays: WorkDays & { password: string }): Observable<
    WorkDays & {
      password: string;
    }
  > {
    return this.destroy(workDays).pipe(
      tap((): null => (this.workDayService.setworkDay = null))
    );
  }
}
