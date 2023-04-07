import { Pipe, PipeTransform } from '@angular/core';
import { Announcement, Category } from 'src/app/interface';

@Pipe({
  name: 'isAnnouncementCategoryAttrValues',
  pure: false,
})
export class IsAnnouncementCategoryAttrValuesPipe implements PipeTransform {
  transform(value: unknown, attr: keyof Category, text?: string): any {
    const announcement = value as Pick<Announcement, 'category'>;
    if (
      announcement &&
      announcement?.category &&
      announcement?.category[attr]
    ) {
      if (text) return `${text} ${announcement?.category[attr]}`;
      return announcement?.category[attr];
    }
  }
}
