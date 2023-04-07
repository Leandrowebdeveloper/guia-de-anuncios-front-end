import { Pipe, PipeTransform } from '@angular/core';
import { Announcement, Contact } from 'src/app/interface';

@Pipe({
  name: 'announcementContactValues',
})
export class AnnouncementContactValuesPipe implements PipeTransform {
  transform(value: unknown, attr: keyof Contact, text?: string): any {
    const announcement = value as Pick<Announcement, 'contact'>;
    if (announcement && announcement?.contact && announcement?.contact[attr]) {
      if (text) return `${text} ${announcement.contact[attr]}`;
      return announcement.contact[attr];
    }
  }
}
