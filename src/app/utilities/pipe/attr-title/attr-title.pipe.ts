import { WorkDaysPipe } from '../workDays/workDays.pipe';
import { Category, Announcement } from 'src/app/interface';
import { AddressPipe } from './../address/address.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attrTitle',
})
export class AttrTitlePipe implements PipeTransform {
  constructor(
    private addressPipe: AddressPipe,
    private workDaysPipe: WorkDaysPipe
  ) {}
  transform(
    value: Pick<
      Announcement & Category,
      'title' | 'citie' | 'address' | 'name' | 'workDays' | 'galery'
    >,
    attr: keyof Pick<
      Announcement & Category,
      'title' | 'citie' | 'address' | 'name' | 'workDays' | 'galery'
    >
  ): string {
    if (value) {
      if (attr === 'title') {
        return `Clique para a página ${value?.title}`;
      }
      if (attr === 'citie') {
        return `Cidade ${value?.citie?.city} ${value?.citie?.uf}`;
      }
      if (attr === 'address') {
        return `Endereço ${this.addressPipe.transform(value?.address)}`;
      }
      if (attr === 'name') {
        return `Página de ${value?.name}`;
      }
      if (attr === 'workDays') {
        return `${value?.title} está ${this.workDaysPipe.transform(
          value?.workDays
        )}`;
      }
      if (attr === 'galery') {
        return `Galeria de imagens ${value?.title} imagem`;
      }
    }
    return null;
  }
}
