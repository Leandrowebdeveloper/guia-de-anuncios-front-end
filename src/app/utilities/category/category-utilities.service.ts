import { Injectable } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';

@Injectable()
export class CategoryUtilities {
  public setButton(action: string): AttrButton {
    switch (action) {
      case 'register':
        return {
          route: '/create',
          icon: 'create',
          label: 'Cadastrar',
          fill: false,
          aria: 'Cadastrar categoria.',
          title: 'Cadastrar categoria.',
        };
      case 'name':
        return {
          route: '/name',
          icon: 'cloud-upload',
          label: 'Salvar',
          fill: false,
          aria: 'Salvar nome e descrição.',
          title: 'Salvar nome e descrição.',
        };
      case 'destroy':
        return {
          route: '/destroy',
          icon: 'trash',
          label: 'Excluir categoria',
          fill: false,
          aria: 'Excluir categoria.',
          title: 'Excluir categoria.',
        };
      case 'drop':
        return {
          route: '/destroy',
          icon: 'trash',
          label: 'Excluir categoria',
          fill: false,
          aria: 'Excluir categoria.',
          title: 'Excluir categoria.',
        };
      case 'restore':
        return {
          route: '/restore',
          icon: 'refresh',
          label: 'Restaurar categoria',
          fill: false,
          aria: 'Restaurar categoria.',
          title: 'Restaurar categoria.',
        };
    }
  }
}
