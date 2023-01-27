import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Announcement, Citie, User } from 'src/app/interface';
import { FormCityAnnouncementComponent } from './form/form.component';

@Component({
  selector: 'app-city-announcement-component',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityAnnouncementComponent implements OnInit {
  @Input() announcement!: Pick<
    Announcement,
    'citie' | '_csrf' | 'id' | 'category' | 'categoryAnnouncement'
  >;
  constructor(private modalController: ModalController) {}

  ngOnInit(): void {}

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
      component: FormCityAnnouncementComponent,
      componentProps: {
        label,
        citie,
      },
    });
    return await modal.present();
  }
}
