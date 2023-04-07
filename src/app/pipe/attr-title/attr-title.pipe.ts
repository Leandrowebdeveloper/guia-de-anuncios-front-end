import { Category, Announcement } from 'src/app/interface';
import { Pipe, PipeTransform } from '@angular/core';
import { HelpsService } from 'src/app/utilities/helps/helps.service';

@Pipe({
  name: 'attrTitle',
})
export class AttrTitlePipe implements PipeTransform {
  transform(value: unknown, attr: unknown): string | null {
    const data = value as unknown as Pick<
      Announcement & Category,
      'title' | 'citie' | 'address' | 'name' | 'workDays' | 'galery'
    >;
    const attribute = attr as unknown as keyof Pick<
      Announcement & Category,
      'title' | 'citie' | 'address' | 'name' | 'workDays' | 'galery'
    >;

    if (data) {
      if (attribute === 'title') {
        return `Clique para a página ${data?.title}`;
      }
      if (attribute === 'citie') {
        return `Cidade ${data?.citie?.city} ${data?.citie?.uf}`;
      }
      if (attribute === 'address' && data?.address) {
        return `Endereço ${HelpsService.formatAddress(data?.address)}`;
      }
      if (attribute === 'name') {
        return `Página de ${data?.name}`;
      }
      if (attribute === 'workDays' && data?.workDays) {
        return `${data?.title} está ${HelpsService.showWorkDays(
          data?.workDays
        )}`;
      }
      if (attribute === 'galery') {
        return `Galeria de imagens ${data?.title} imagem`;
      }
    }
    return null;
  }
}
