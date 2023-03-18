import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'allowAd',
})
export class AllowAdPipe implements PipeTransform {
  transform(value: Announcement): boolean {
    if (value) {
      return (
        value?.address === null ||
        value?.citie === null ||
        value?.contact === null
      );
    }
  }
}
