import { Pipe, PipeTransform } from '@angular/core';
import { Announcement, User } from 'src/app/interface';

@Pipe({
  name: 'announcementUserValues',
})
// actionType: 'boolean'
export class AnnouncementUserValuesPipe implements PipeTransform {
  transform(value: unknown, attr: keyof User, text?: string): any {
    const announcement = value as Pick<Announcement, 'user'>;
    if (announcement && announcement?.user && announcement?.user[attr]) {
      if (text) return `${text} ${announcement?.user[attr]}`;
      return announcement?.user[attr];
    }
  }
}
