import { Pipe, PipeTransform } from '@angular/core';
import { Announcement, Contact } from 'src/app/interface';
import { HelpsService } from 'src/app/utilities/helps/helps.service';

@Pipe({
  name: 'contactAttrValuesMask',
})
export class ContactAttrValuesMaskPipe implements PipeTransform {
  transform(value: unknown, attr: keyof Contact, text: string): any {
    const announcement = value as Pick<Announcement, 'contact'>;
    if (announcement && announcement?.contact && announcement?.contact[attr])
      return `${text} ${HelpsService.contactMask(
        announcement?.contact[attr],
        attr
      )}`;
  }
}
