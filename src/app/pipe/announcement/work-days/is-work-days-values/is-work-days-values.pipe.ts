import { Pipe, PipeTransform } from '@angular/core';
import { Announcement, WorkDays } from 'src/app/interface';

@Pipe({
  name: 'isWorkDaysValues',
})
export class IsWorkDaysValuesPipe implements PipeTransform {
  transform(value: unknown, attr: keyof WorkDays): any {
    const announcement = value as Pick<Announcement, 'workDays'>;
    if (
      announcement &&
      announcement?.workDays &&
      announcement?.workDays[attr]
    ) {
      return announcement?.workDays[attr];
    }
  }
}
