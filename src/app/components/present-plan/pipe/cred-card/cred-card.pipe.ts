import { Pipe, PipeTransform } from '@angular/core';
import { Brand, Root } from '../../PagSeguro';

@Pipe({
  name: 'credCard',
  pure: false,
})
export class CredCardPipe implements PipeTransform {
  transform(brand: Brand): string | void {
    if (brand?.name) {
      return `https://stc.pagseguro.uol.com.br/public/img/payment-methods-flags/42x20/${brand.name}.png`;
    }
  }
}
