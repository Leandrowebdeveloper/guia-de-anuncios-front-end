import { Injectable } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';

@Injectable()
export class UserUtilities {
  public setButton(action: string): AttrButton {
    switch (action) {
      case 'password':
        return {
          route: '/new-password',
          icon: 'key',
          label: 'Salvar',
          fill: false,
          aria: 'Salvar senha.',
          title: 'Salvar senha.',
        };
      case 'destroy':
        return {
          route: '/destroy',
          icon: 'trash',
          label: 'Excluir usuário',
          fill: false,
          aria: 'Excluir usuário.',
          title: 'Excluir usuário.',
        };
      case 'drop':
        return {
          route: '/destroy',
          icon: 'trash',
          label: 'Excluir usuário',
          fill: false,
          aria: 'Excluir usuário.',
          title: 'Excluir usuário.',
        };
      case 'restore':
        return {
          route: '/restore',
          icon: 'refresh',
          label: 'Restaurar usuário',
          fill: false,
          aria: 'Restaurar usuário.',
          title: 'Restaurar usuário.',
        };
      case 'name':
        return {
          route: '/name',
          icon: 'cloud-upload',
          label: 'Salvar',
          fill: false,
          aria: 'Salvar nome e sobrenome.',
          title: 'Salvar nome e sobrenome.',
        };
      case 'email':
        return {
          route: '/email',
          icon: 'mail',
          label: 'Enviar',
          fill: false,
          aria: 'Enviar novo email.',
          title: 'Enviar novo email.',
        };
      case 'level':
        return {
          route: '/level',
          icon: 'cloud-upload',
          label: 'Alterar',
          fill: false,
          aria: 'Alterar nivel do usuário.',
          title: 'Alterar nivel do usuário.',
        };
    }
  }
}
