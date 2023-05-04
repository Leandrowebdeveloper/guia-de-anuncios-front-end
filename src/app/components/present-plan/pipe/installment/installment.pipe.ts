import { Pipe, PipeTransform } from '@angular/core';
import { AttrOperator } from '../../PagSeguro';
import { HelpsService } from 'src/app/services/helps/helps.service';

@Pipe({
  name: 'installment',
})
export class InstallmentPipe implements PipeTransform {
  transform(value: AttrOperator): string | void {
    if (value) {
      return `${value.quantity}x de ${HelpsService.numberFormat(
        value.installmentAmount
      )}`;
    }
  }
}
// total: ${HelpsService.numberFormat(value.totalAmount)}
