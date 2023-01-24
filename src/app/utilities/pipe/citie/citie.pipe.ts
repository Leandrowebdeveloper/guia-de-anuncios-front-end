import { Pipe, PipeTransform } from '@angular/core';
import { Citie } from 'src/app/interface';

@Pipe({
  name: 'citie',
})
export class CitiePipe implements PipeTransform {
  transform(value: Citie): string {
    if (value) {
      return `${value?.city} - ${value.uf}`;
    }
    return null;
  }
}
