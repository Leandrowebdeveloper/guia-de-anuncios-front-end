import { AddressService } from './../../../pages/dashboard/component/announcement/address/service/address.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Address } from 'src/app/interface';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  constructor(private addressService: AddressService) {}

  transform(value: Address): string {
    if (value && value?.complement) {
      return `${value?.street}, ${value?.district}, Lt ${
        value?.allotment
      }, Qd ${value?.block}, nº ${
        value?.numberr
      }, cep ${this.addressService.mask(value)}, ${value?.complement}`;
    } else if (value) {
      return `${value?.street}, ${value?.district}, Lt ${
        value?.allotment
      }, Qd ${value?.block}, nº ${
        value?.numberr
      }, cep ${this.addressService.mask(value)}`;
    }
  }
}
