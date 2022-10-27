import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.page.html',
  styleUrls: ['./dashboard-admin.page.scss'],
})
export class DashboardPage implements OnInit {
  public readonly nav = [
    {
      name: 'Usuários',
      title: 'Manutenção do usuários.',
      router: ['/painel-de-controle/admin', 'usuarios'],
      icon: 'people',
    },
    {
      name: 'Categorias',
      title: 'Manutenção de categorias.',
      router: ['/painel-de-controle/admin', 'categorias'],
      icon: 'list',
    },
    {
      name: 'Anúncios',
      title: 'Manutenção do anúncios.',
      router: ['/painel-de-controle/admin', 'anuncios'],
      icon: 'newspaper',
    },
  ];

  constructor(private route: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isLevelAdmin();
  }

  private isLevelAdmin() {
    if (this.authService.getLevel === '2') {
      this.route.navigate(['/painel-de-controle']);
    }
  }
}
