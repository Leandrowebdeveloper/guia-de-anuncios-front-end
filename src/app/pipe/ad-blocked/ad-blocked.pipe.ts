import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'adBlocked',
  pure: false,
})
export class AdBlockedPipe implements PipeTransform {
  transform(value: unknown): boolean {
    const announcement = value as Pick<
      Announcement,
      'citie' | 'address' | 'contact'
    >;
    if (
      announcement &&
      announcement?.citie &&
      announcement?.address &&
      announcement?.contact
    )
      return true;
    return false;
  }
}
