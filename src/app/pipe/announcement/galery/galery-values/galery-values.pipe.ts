import { Pipe, PipeTransform } from '@angular/core';
import { Galery } from 'src/app/interface';

@Pipe({
  name: 'galeryValues',
  pure: false,
})
export class GaleryValuesPipe implements PipeTransform {
  transform(value: unknown, attr: keyof Galery, text?: string): any {
    const galery = value as Galery;
    if (galery && galery[attr]) {
      return `${text}${galery[attr]}`;
    }
  }
}
