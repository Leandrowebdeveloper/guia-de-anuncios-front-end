import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'announcementValues',
  pure: false,
})
export class AnnouncementValuesPipe implements PipeTransform {
  transform(value: unknown, attr: keyof Announcement): any {
    const announcement = value as Announcement;
    if (announcement && announcement[attr]) {
      return announcement[attr];
    }
  }
}
