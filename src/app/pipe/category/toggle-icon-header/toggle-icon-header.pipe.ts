import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/interface';

@Pipe({
  name: 'announcementCategoryToggleIcon',
  pure: false,
})
export class AnnouncementCategoryToggleIconPipe implements PipeTransform {
  transform(value: unknown, args: boolean): string {
    const category = value as Category;
    if (category && category?.image) {
      if (args) return `/images/icons/white/${category.image.filename}`;
      return `/images/icons/black/${category.image.filename}`;
    }
    return './../../../../assets/thumbnail.svg';
  }
}
