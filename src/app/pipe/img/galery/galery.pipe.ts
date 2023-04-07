import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'typeImageGalery',
  pure: false,
})
export class TypeImageGaleryPipe implements PipeTransform {
  transform(value: unknown, args: unknown[]): string | void {
    const announcement = value as Pick<Announcement, 'galery'>;
    const type = args[0] as 'small' | 'medium' | 'large';
    const i = args[1] as number;
    if (
      announcement &&
      announcement?.galery &&
      announcement?.galery[i]?.filename
    ) {
      switch (type) {
        case 'small':
          return `/images/galery/small/${announcement?.galery[i]?.filename}`;
        case 'medium':
          return `/images/galery/medium/${announcement?.galery[i]?.filename}`;
        case 'large':
          return `/images/galery/large/${announcement?.galery[i]?.filename}`;
      }
    }
  }
}
