import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'isWorkDays',
})
export class IsWorkDaysPipe implements PipeTransform {
  transform(value: unknown): boolean {
    const announcement = value as Pick<Announcement, 'workDays'>;
    if (announcement && announcement?.workDays) {
      return true;
    }
    return false;
  }
}
