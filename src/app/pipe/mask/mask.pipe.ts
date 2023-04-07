import { Pipe, PipeTransform } from '@angular/core';
import { HelpsService } from 'src/app/utilities/helps/helps.service';

@Pipe({
  name: 'mask',
})
export class MaskPipe implements PipeTransform {
  transform(
    value: unknown,
    args: 'whatsapp' | 'phone' | 'mobilePhone' | 'cep'
  ): string | null | void {
    return HelpsService.contactMask(value, args);
  }
}
