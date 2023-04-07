import { AnnouncementFormComponent } from './form/form.component';
import { Announcement, User } from 'src/app/interface';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-announcement-component',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {
  @Input() announcement!: Announcement | void;
  @Input() user!: Required<Pick<User, '_csrf' | 'id'>> | void;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  public async open(): Promise<void> {
    const label = this.getLabel();
    const announcement = this.getAnnouncement();

    const modal = await this.modalController.create({
      component: AnnouncementFormComponent,
      componentProps: {
        action: 'announcement',
        label,
        announcement,
      },
    });
    return await modal.present();
  }

  private getLabel() {
    if (this.announcement?.id) {
      return 'Editar anúcio';
    } else {
      return 'Cadastrar anúncio';
    }
  }

  private getAnnouncement() {
    const _csrf = this.announcement?._csrf;
    if (this.announcement?.id) {
      return {
        _csrf,
        title: this.announcement?.title,
        description: this.announcement?.description,
        slug: this.announcement?.slug,
        id: this.announcement?.id,
      };
    } else {
      return {
        _csrf,
        title: null,
        description: null,
        slug: null,
        userId: this.user?.id,
      };
    }
  }
}
