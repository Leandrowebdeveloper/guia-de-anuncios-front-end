import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/interface';

@Pipe({
  name: 'isPriceCategoryAnnouncement',
})
export class IsPriceCategoryAnnouncementPipe implements PipeTransform {
  transform(value: unknown): any {
    const category = value as Category;
    if (category && category?.slug) {
      return category?.slug === 'classificados' || category?.slug === 'imoveis';
    }
  }
}
