import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'typeImageGalery',
  pure: true,
})
export class TypeImageGaleryPipe implements PipeTransform {
  transform(value: unknown, index: number, text: string): string | void {
    const announcement = value as Pick<Announcement, 'galery'>;

    if (
      announcement &&
      announcement?.galery &&
      announcement?.galery[index]?.filename
    ) {
      return `${text}${announcement?.galery[index]?.filename}`;
    }
  }
}
