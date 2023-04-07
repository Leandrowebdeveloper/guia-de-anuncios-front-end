import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/interface';

@Pipe({
  name: 'icon',
})
export class IconCategoryPipe implements PipeTransform {
  transform(category: Category): string {
    if (category?.image && category?.image?.catAdId) {
      return `/images/icons/${category.image.filename}`;
    }
    return './../../../../assets/thumbnail.svg';
  }
}
