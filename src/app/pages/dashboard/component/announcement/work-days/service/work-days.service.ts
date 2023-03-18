import { tap } from 'rxjs/operators';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import {
  Announcement,
  DayOfTheWeekPT,
  DaysOfTheWeek,
  WorkDaysFields,
  WorkDays,
} from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkDayAnnouncementService extends HttpService<Announcement> {
  public fields: WorkDaysFields = {
    start: '',
    startInterval: '',
    endInterval: '',
    end: '',
  };
  public readonly days: DayOfTheWeekPT[] = [
    'domingo',
    'segunda',
    'terca',
    'quarta',
    'quinta',
    'sexta',
    'sabado',
  ];

  public readonly daysEs: DaysOfTheWeek[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  private workDayEvent = new EventEmitter<WorkDays>(undefined);

  constructor(
    http: HttpClient,
    public storageService: StorageService,
    public messageService: MessageService,
    private managementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `workDays`;
  }

  public get getworkDayEvent() {
    return this.workDayEvent.asObservable();
  }

  public set setworkDay(value: WorkDays) {
    if (this.managementService.getAnnouncement) {
      this.managementService.getAnnouncement.workDays = value;
      this.managementService.setAnnouncement =
        this.managementService.getAnnouncement;
    }
    this.workDayEvent.emit(value);
  }

  public workDays(workDays: WorkDays): Observable<WorkDays> {
    if (workDays?.id) {
      return this.patch(workDays, 'workDays').pipe(
        tap((workDay_: WorkDays) => (this.setworkDay = workDay_))
      );
    } else {
      return this.create(workDays, 'workDays').pipe(
        tap((workDay_: WorkDays) => (this.setworkDay = workDay_))
      );
    }
  }

  public valid(workDays: WorkDays): boolean {
    return this.daysEs.every(
      (day) =>
        Object.prototype.toString.call(workDays[day]) === '[object Object]'
    );
  }
}
