import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'isAnnouncementAttrValues',
})
export class IsAnnouncementAttrValuesPipe implements PipeTransform {
  transform(value: unknown, attr: keyof Announcement): boolean {
    const announcement = value as Announcement;
    if (announcement && announcement[attr]) return true;
    return false;
  }
}
