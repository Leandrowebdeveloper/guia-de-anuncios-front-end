import { FormAnnouncementComponent } from './form/form.component';
import { Announcement, User } from 'src/app/interface';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-announcement-component',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {
  @Input() announcement!: Announcement;
  @Input() user!: User;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  public async open(): Promise<void> {
    let announcement: Announcement = this.announcement;
    let label: string;

    if (this.announcement?.id) {
      announcement = {
        // eslint-disable-next-line no-underscore-dangle
        _csrf: announcement?._csrf,
        title: announcement?.title,
        description: announcement?.description,
        slug: announcement?.slug,
        id: announcement?.id,
      };
      label = 'Editar anúcio';
    } else {
      announcement = {
        // eslint-disable-next-line no-underscore-dangle
        _csrf: this.user?._csrf,
        title: null,
        description: null,
        slug: null,
        userId: this.user?.id,
      };
      label = 'Cadastrar anúncio';
    }

    const modal = await this.modalController.create({
      component: FormAnnouncementComponent,
      componentProps: {
        action: 'announcement',
        label,
        announcement,
      },
    });
    return await modal.present();
  }
}
