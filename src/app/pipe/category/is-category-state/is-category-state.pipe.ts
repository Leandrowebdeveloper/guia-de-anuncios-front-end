import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/interface';

@Pipe({
  name: 'categoryState',
})
export class categoryStatePipe implements PipeTransform {
  transform(value: unknown): string {
    const category = value as Pick<Category, 'state'>;
    if (category && category?.state) return 'Online';
    return 'Offline';
  }
}
