import { tap } from 'rxjs/operators';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Announcement,
  DayOfTheWeekPT,
  DaysOfTheWeek,
  FieldsOpeningHour,
  OpeningHour,
} from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ManagementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable({
  providedIn: 'root',
})
export class OpeningHourService extends HttpService<Announcement> {
  public fields: FieldsOpeningHour = {
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
    'third',
    'fourth',
    'thursday',
    'friday',
    'saturday',
  ];

  constructor(
    http: HttpClient,
    public storageService: StorageService,
    public messageService: MessageService,
    private managementService: ManagementService
  ) {
    super(http, storageService);
    this.setApi = `auth-announcement`;
  }

  public openingHour(openingHour: OpeningHour) {
    if (openingHour?.id) {
      return this.patch(openingHour, 'openingHour').pipe(
        tap(
          (openingHour_: OpeningHour) =>
            (this.managementService.setOpeningHour = openingHour_)
        )
      );
    } else {
      return this.create(openingHour, 'openingHour').pipe(
        tap(
          (openingHour_: OpeningHour) =>
            (this.managementService.setOpeningHour = openingHour_)
        )
      );
    }
  }

  public valid(openingHour: OpeningHour): boolean {
    return this.daysEs.every(
      (day) =>
        Object.prototype.toString.call(openingHour[day]) === '[object Object]'
    );
  }
}
