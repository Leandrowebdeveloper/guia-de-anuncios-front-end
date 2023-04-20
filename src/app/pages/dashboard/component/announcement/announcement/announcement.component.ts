import { AnnouncementFormComponent } from './form/form.component';
import { Announcement, Category, User } from 'src/app/interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-announcement-component',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementOpenFormComponent implements OnInit {
  @Input() announcement!: Announcement | void;
  @Input() user!: Required<Pick<User, '_csrf' | 'id'>> | void;
  @Output() category = new EventEmitter<Category>();

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    console.log(this.announcement);
  }

  public async open(): Promise<void> {
    const label = this.getLabel();
    const announcement = this.getAnnouncement();

    const modal = await this.modalController.create({
      component: AnnouncementFormComponent,
      cssClass: 'modal-wrapper',
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
    let result: { [key: string]: any };
    if (this.announcement?.id) {
      result = {
        _csrf,
        title: this.announcement?.title,
        description: this.announcement?.description,
        slug: this.announcement?.slug,
        id: this.announcement?.id,
      };
    } else {
      result = {
        _csrf,
        title: null,
        description: null,
        slug: null,
        userId: this.user?.id,
      };
    }

    if (this.isClassified()) {
      if (this.announcement?.price?.value) {
        result['price'] = this.announcement?.price?.value;
      } else {
        result['price'] = null;
      }
    }

    return result;
  }

  private isClassified(): boolean {
    if (
      this.announcement &&
      this.announcement?.categoryAnnouncement?.category &&
      (this.announcement?.categoryAnnouncement?.category?.slug ===
        'classificados' ||
        this.announcement?.categoryAnnouncement?.category?.slug === 'imoveis')
    )
      return true;
    return false;
  }
}
