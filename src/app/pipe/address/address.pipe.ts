import { Pipe, PipeTransform } from '@angular/core';
import { HelpsService } from 'src/app/utilities/helps/helps.service';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(value: unknown): string | null {
    return HelpsService.formatAddress(value);
  }
}
