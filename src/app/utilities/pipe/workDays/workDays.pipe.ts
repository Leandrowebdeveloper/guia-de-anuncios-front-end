import { WorkDays, WorkDaysFields } from 'src/app/interface';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'workDays',
})
export class WorkDaysPipe implements PipeTransform {
  transform(workDay: WorkDays): string {
    // console.log(moment.weekdays());
    const weekdays = moment.weekdays();
    if (workDay) {
      const { sunday, monday, tuesday, thursday, wednesday, friday, saturday } =
        workDay;
      switch (moment().format('dddd')) {
        case weekdays[0]:
          return this.businessHours(sunday);
        case weekdays[1]:
          return this.businessHours(monday);
        case weekdays[2]:
          return this.businessHours(tuesday);
        case weekdays[3]:
          return this.businessHours(wednesday);
        case weekdays[4]:
          return this.businessHours(thursday);
        case weekdays[5]:
          return this.businessHours(friday);
        case weekdays[6]:
          return this.businessHours(saturday);
      }
    }
  }

  private businessHours(day: WorkDaysFields): 'Aberto' | 'Fechado' {
    const time = moment().format('HH:mm:ss');
    if (day?.startInterval && day.endInterval) {
      if (
        day?.start &&
        day?.startInterval &&
        time >= moment(day?.start).format('HH:mm:ss') &&
        time <= moment(day?.startInterval).format('HH:mm:ss')
      ) {
        return `Aberto`;
      } else {
        if (
          time >= moment(day?.startInterval).format('HH:mm:ss') &&
          time <= moment(day?.endInterval).format('HH:mm:ss')
        ) {
          return `Fechado`;
        } else {
          if (
            time >= moment(day?.endInterval).format('HH:mm:ss') &&
            time <= moment(day?.end).format('HH:mm:ss')
          ) {
            return `Aberto`;
          }
        }
        return `Fechado`;
      }
    } else {
      return day?.start &&
        time >= moment(day?.start).format('HH:mm:ss') &&
        time <= moment(day?.end).format('HH:mm:ss')
        ? 'Aberto'
        : 'Fechado';
    }
  }
}
