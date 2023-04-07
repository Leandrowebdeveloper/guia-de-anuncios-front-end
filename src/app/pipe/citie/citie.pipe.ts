import { Pipe, PipeTransform } from '@angular/core';
import { Announcement } from 'src/app/interface';

@Pipe({
  name: 'citie',
})
export class CitiePipe implements PipeTransform {
  transform(value: unknown): string | null {
    const announcement = value as Pick<Announcement, 'citie'>;
    if (announcement && announcement?.citie) {
      return `${announcement?.citie?.city} - ${announcement?.citie?.uf}`;
    }
    return null;
  }
}
