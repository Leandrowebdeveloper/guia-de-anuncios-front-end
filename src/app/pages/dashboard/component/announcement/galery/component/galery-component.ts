import { MessageService } from 'src/app/utilities/message/message.service';
import { Subscription } from 'rxjs';
import { Announcement, Galery } from 'src/app/interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GaleryAnnouncementService } from '../service/galery.service';
import { ManagementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Component({
  selector: 'app-galery-component',
  templateUrl: 'galery-component.html',
  styleUrls: ['galery-component.scss'],
})
export class GaleryComponent {
  @Output() isHeader = new EventEmitter<boolean>(false);
  @Input() announcement!: Announcement;
  public image: Galery;
  private destroy: Subscription;

  constructor(
    private galeryAnnouncementService: GaleryAnnouncementService,
    private managementService: ManagementService,
    private messageService: MessageService
  ) {}

  public hidden() {
    this.isHeader.emit(false);
    this.image = null;
  }

  public show(image: Galery) {
    this.isHeader.emit(true);
    this.image = image;
  }

  public delete(galery: Galery): Subscription {
    // eslint-disable-next-line no-underscore-dangle
    galery._csrf = this.announcement?._csrf;
    return (this.destroy = this.galeryAnnouncementService
      // eslint-disable-next-line no-underscore-dangle
      .delete(galery)
      .subscribe(
        (galery_: Galery) => {
          this.managementService.removeItemGalery = galery;
          this.hidden();
          this.messageService.success(galery_.message, null, this.destroy, 350);
        },
        (error) => this.messageService.error(error, null, this.destroy)
      ));
  }
}
