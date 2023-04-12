import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'typeImageGalery',
  pure: false,
})
export class TypeImageGaleryPipe implements PipeTransform {
  transform(value: unknown, index: number, text: string): string {
    const announcement = value as Pick<Announcement, 'galery'>;

    if (
      index > -1 &&
      announcement &&
      announcement?.galery &&
      announcement?.galery[index]?.filename
    )
      return `${text}${announcement?.galery[index]?.filename}`;
    return '';
  }
}
