import { Pipe, PipeTransform } from '@angular/core';
import { Galery } from 'src/app/interface';

@Pipe({
  name: 'galeryFindValues',
  pure: true,
})
export class GaleryFindValuesPipe implements PipeTransform {
  transform(value: unknown, attr: keyof Galery, text?: string): any {
    const galery = value as Galery[];
    if (galery && galery[0][attr]) return `${text}${galery[0][attr]}`;
    return './../../../assets/thumbnail.svg';
  }
}
