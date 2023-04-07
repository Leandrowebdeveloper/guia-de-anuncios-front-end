import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { AttrButton } from './interface';

@Component({
  selector: 'app-buttons-sccess-component',
  templateUrl: './buttons-sccess-component.html',
  styleUrls: ['./buttons-sccess-component.scss'],
})
export class ButtonsAccessComponent {
  @Input() route!: string;
  public readonly attrButton: AttrButton[] = [
    {
      route: '/entrar',
      icon: 'log-in',
      label: 'Entrar',
      aria: 'Acessar o sistema.',
      title: 'Acessar o sistema.',
    },
    {
      route: '/recuperar-senha',
      icon: 'key',
      label: 'Recuperar senha',
      aria: 'Recuperar senha.',
      title: 'Recuperar senha.',
    },
    {
      route: '/cadastrar',
      icon: 'create',
      label: 'cadastrar',
      aria: 'Criar conta.',
      title: 'Criar conta.',
    },
  ];
}
