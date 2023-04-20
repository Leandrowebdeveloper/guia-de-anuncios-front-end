import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'isAnnouncementValuePrice',
  pure: false,
})
export class IsAnnouncementValuePricePipe implements PipeTransform {
  transform(value: unknown): string | void {
    const announcement = value as Pick<Announcement, 'price'>;
    if (announcement && announcement?.price && announcement?.price?.value) {
      return announcement?.price?.value;
    }
  }
}
