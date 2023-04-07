import { Injectable } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';

@Injectable()
export class CategoryUtilities {
  public setButton(action: string): AttrButton | undefined {
    switch (action) {
      case 'register':
        return {
          route: '/category',
          icon: 'create',
          label: 'Cadastrar',
          aria: 'Cadastrar categoria.',
          title: 'Cadastrar categoria.',
        };
      case 'name':
        return {
          route: '/name',
          icon: 'cloud-upload',
          label: 'Salvar',
          aria: 'Salvar nome e descrição.',
          title: 'Salvar nome e descrição.',
        };
      case 'destroy':
        return {
          route: '/destroy',
          icon: 'trash',
          label: 'Excluir categoria',
          aria: 'Excluir categoria.',
          title: 'Excluir categoria.',
        };
      case 'drop':
        return {
          route: '/destroy',
          icon: 'trash',
          label: 'Excluir categoria',
          aria: 'Excluir categoria.',
          title: 'Excluir categoria.',
        };
      case 'restore':
        return {
          route: '/restore',
          icon: 'refresh',
          label: 'Restaurar categoria',
          aria: 'Restaurar categoria.',
          title: 'Restaurar categoria.',
        };
      default:
        return undefined;
    }
  }
}
