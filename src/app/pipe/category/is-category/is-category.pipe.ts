import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/interface';

@Pipe({
  name: 'isCategory',
})
export class IsCategoryPipe implements PipeTransform {
  transform(value: unknown, limit = 0): boolean {
    const category = value as Category[];
    if (category && category?.length > limit) {
      return true;
    }
    return false;
  }
}
