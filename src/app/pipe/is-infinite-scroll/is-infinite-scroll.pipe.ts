import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'isInfiniteScroll',
})
export class IsInfiniteScroll implements PipeTransform {
  transform(value: unknown, limit: number): boolean {
    const announcement = value as Announcement[];
    if (announcement && announcement.length > limit) {
      return true;
    }
    return false;
  }
}
