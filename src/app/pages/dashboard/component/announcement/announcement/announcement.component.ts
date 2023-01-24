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
  @Input() user!: Required<Pick<User, '_csrf' | 'id'>>;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  public async open(): Promise<void> {
    let announcement: Pick<
      Announcement,
      '_csrf' | 'title' | 'description' | 'slug' | 'id' | 'userId'
    >;
    let label: string;

    if (this.announcement?.id) {
      announcement = {
        // eslint-disable-next-line no-underscore-dangle
        _csrf: this.announcement?._csrf,
        title: this.announcement?.title,
        description: this.announcement?.description,
        slug: this.announcement?.slug,
        id: this.announcement?.id,
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
