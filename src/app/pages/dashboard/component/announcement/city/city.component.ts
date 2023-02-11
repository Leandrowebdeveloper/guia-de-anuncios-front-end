import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Announcement, Citie } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AnnouncementFormCityComponent } from './form/form.component';

@Component({
  selector: 'app-city-announcement-component',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class AnnouncementCityComponent implements OnInit {
  @Input() announcement!: Pick<
    Announcement,
    'citie' | '_csrf' | 'id' | 'category' | 'categoryAnnouncement'
  >;
  public isAdmin: boolean;
  constructor(
    private modalController: ModalController,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.getLevel === '1';
  }

  public async cities(
    announcement: Pick<Announcement, '_csrf' | 'id' | 'citie'>
  ): Promise<void> {
    let citie: Citie;
    let label: string;

    if (announcement?.citie) {
      citie = announcement?.citie;
      // eslint-disable-next-line no-underscore-dangle
      citie._csrf = announcement?._csrf;
      label = 'Editar cidade';
    } else {
      citie = {
        // eslint-disable-next-line no-underscore-dangle
        _csrf: announcement?._csrf,
        city: null,
        uf: 'GO',
        announcementId: announcement?.id,
      };
      label = 'Cadastrar cidade';
    }

    const modal = await this.modalController.create({
      component: AnnouncementFormCityComponent,
      componentProps: {
        label,
        citie,
      },
    });
    return await modal.present();
  }
}
