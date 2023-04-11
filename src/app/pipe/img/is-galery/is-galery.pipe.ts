import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'isGalery',
  pure: true,
})
export class IsGaleryPipe implements PipeTransform {
  transform(value: unknown, i: number): boolean {
    const announcement = value as Pick<Announcement, 'galery'>;
    if (
      announcement &&
      announcement?.galery &&
      announcement?.galery[i]?.filename
    ) {
      return true;
    }
    return false;
  }
}
