import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/interface';

@Pipe({
  name: 'categoryIcons',
})
export class CategoryIconPipe implements PipeTransform {
  transform(value: unknown): string {
    const category = value as Category;
    if (category && category?.image)
      return `/images/icons/${category.image.filename}`;
    return './../../../../assets/thumbnail.svg';
  }
}
