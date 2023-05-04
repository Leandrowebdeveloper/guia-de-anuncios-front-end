import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'pageViews',
})
export class pageViewsPipe implements PipeTransform {
  transform(value: unknown): string | void {
    const announcement = value as Pick<Announcement, 'pageView'>;
    if (announcement && announcement?.pageView && announcement?.pageView.views)
      return `Visitas: ${announcement.pageView.views}`;
    return `Visitas: 0`;
  }
}
