import { Injectable } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';

@Injectable()
export class AnnouncementUtilities {
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
      case 'updateAnnouncement':
        return {
          route: '/name',
          icon: 'cloud-upload',
          label: 'Salvar',
          fill: false,
          aria: 'Salvar titulo e descrição.',
          title: 'Salvar titulo e descrição.',
        };
      case 'coordinate':
        return {
          route: '/coordinate',
          icon: 'cloud-upload',
          label: 'Salvar',
          fill: false,
          aria: 'Salvar mapa.',
          title: 'Salvar mapa.',
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
