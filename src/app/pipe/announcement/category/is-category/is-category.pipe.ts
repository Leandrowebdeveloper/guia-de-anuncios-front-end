import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'isAnnouncementCategory',
})
export class IsAnnouncementCategoryPipe implements PipeTransform {
  transform(value: unknown): boolean {
    const announcement = value as Pick<Announcement, 'category'>;
    if (announcement && announcement?.category) {
      return true;
    }
    return false;
  }
}
