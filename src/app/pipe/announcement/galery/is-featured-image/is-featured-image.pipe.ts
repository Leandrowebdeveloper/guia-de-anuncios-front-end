import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'isFeaturedImage',
})
export class IsFeaturedImagePipe implements PipeTransform {
  transform(value: unknown, args: number): boolean {
    const announcement = value as Pick<Announcement, 'galery'>;
    if (
      announcement &&
      announcement?.galery &&
      announcement?.galery?.length > 0
    )
      if (announcement.galery[args]?.position !== 0) return true;
    return false;
  }
}
