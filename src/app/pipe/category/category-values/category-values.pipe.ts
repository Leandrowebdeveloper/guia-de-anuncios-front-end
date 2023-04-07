import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/interface';

@Pipe({
  name: 'categoryValues',
})
export class categoryValuesPipe implements PipeTransform {
  transform(value: unknown, attr: keyof Category, text?: string): any {
    const category = value as Category;
    if (category && category[attr]) {
      if (text) return `${text} ${category[attr]}`;
      return category[attr];
    }
  }
}
