import { Injectable } from '@angular/core';
import { AttrButton } from 'src/app/pages/public/system-access/components/buttons/interface';

@Injectable()
export class AdvertUtilities {
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
      case 'updateAdvert':
        return {
          route: '/name',
          icon: 'cloud-upload',
          label: 'Salvar',
          fill: false,
          aria: 'Salvar titulo e descrição.',
          title: 'Salvar titulo e descrição.',
        };
      case 'address':
        return {
          route: '/address',
          icon: 'cloud-upload',
          label: 'Salvar',
          fill: false,
          aria: 'Salvar endereço.',
          title: 'Salvar endereço.',
        };
      case 'citie':
        return {
          route: '/citie',
          icon: 'cloud-upload',
          label: 'Salvar',
          fill: false,
          aria: 'Salvar cidade e estado.',
          title: 'Salvar cidade e estado.',
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
      case 'contact':
        return {
          route: '/contact',
          icon: 'cloud-upload',
          label: 'Salvar',
          fill: false,
          aria: 'Salvar contatos.',
          title: 'Salvar contatos.',
        };
      case 'socialNetwork':
        return {
          route: '/socialNetwork',
          icon: 'cloud-upload',
          label: 'Salvar',
          fill: false,
          aria: 'Salvar rede sociais.',
          title: 'Salvar rede sociais.',
        };
      case 'createAdvert':
        return {
          route: '/createAdvert',
          icon: 'cloud-upload',
          label: 'Salvar',
          fill: false,
          aria: 'Salvar anúncio.',
          title: 'Salvar anúncio.',
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
