import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'isAnnouncement',
})
export class IsAnnouncementPipe implements PipeTransform {
  transform(value: unknown, limit = 0): boolean {
    const announcement = value as Announcement[];
    if (announcement && announcement?.length > limit) {
      return true;
    }
    return false;
  }
}
