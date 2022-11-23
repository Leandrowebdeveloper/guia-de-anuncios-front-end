import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthAnnouncementService } from './announcement/service/auth-announcement.service';
import { Announcement } from 'src/app/interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
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
      icon: 'megaphone',
    },
    {
      name: 'Extatística',
      title: 'Manutenção do anúncios.',
      router: ['/painel-de-controle', 'extatistica'],
      icon: 'analytics',
    },
  ];
  private announcement: Subscription;
  constructor(private authAnnouncementService: AuthAnnouncementService) {}

  ngOnInit(): void {
    this.getAnnouncement();
  }

  ngOnDestroy(): void {
    this.announcement.unsubscribe();
  }

  private getAnnouncement(): void {
    this.announcement =
      this.authAnnouncementService.announcementObservable.subscribe(
        (announcement: Announcement[]) => {
          if (announcement.length === 0) {
            this.nav[1].router = [
              '/painel-de-controle',
              'anuncio',
              'cadastrar',
            ];
          }
        }
      );
  }
}
