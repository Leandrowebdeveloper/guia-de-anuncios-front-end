import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  public readonly nav = [
    {
      name: 'Usuário',
      title: 'Manutenção do usuário.',
      router: ['/painel-de-controle', 'usuario'],
      icon: 'person',
    },
    {
      name: 'Anúncio',
      title: 'Manutenção do anúncio.',
      router: ['/painel-de-controle', 'anuncio'],
      icon: 'newspaper',
    },
    {
      name: 'Extatística',
      title: 'Manutenção do anúncios.',
      router: ['/painel-de-controle', 'extatistica'],
      icon: 'analytics',
    },
  ];
}
