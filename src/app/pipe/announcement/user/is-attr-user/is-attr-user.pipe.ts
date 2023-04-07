import { Pipe, PipeTransform } from '@angular/core';
import { Announcement, User } from 'src/app/interface';

@Pipe({
  name: 'isAttrAnnouncementUser',
})
export class IsAttrAnnouncementUserPipe implements PipeTransform {
  transform(value: unknown, attr: keyof User): boolean {
    const announcement = value as Pick<Announcement, 'user'>;
    if (announcement && announcement?.user && announcement?.user[attr]) {
      return true;
    }
    return false;
  }
}
