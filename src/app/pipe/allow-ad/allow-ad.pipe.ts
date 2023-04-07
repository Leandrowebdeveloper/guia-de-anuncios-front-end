import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'allowAd',
  pure: false,
})
export class AllowAdPipe implements PipeTransform {
  transform(value: Announcement): boolean | null {
    if (value) {
      return (
        value?.address === null ||
        value?.citie === null ||
        value?.contact === null
      );
    }
    return null;
  }
}
