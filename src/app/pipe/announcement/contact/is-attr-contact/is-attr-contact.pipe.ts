import { Pipe, PipeTransform } from '@angular/core';
import { Announcement, Contact } from 'src/app/interface';

@Pipe({
  name: 'isAttrContact',
})
export class IsAttrContactPipe implements PipeTransform {
  transform(value: unknown, attr: keyof Contact): boolean {
    const announcement = value as Pick<Announcement, 'contact'>;
    if (announcement && announcement?.contact && announcement?.contact[attr]) {
      return true;
    }
    return false;
  }
}
