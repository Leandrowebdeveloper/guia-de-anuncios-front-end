import { Subscription } from 'rxjs';
import { Announcement, Galery, User } from 'src/app/interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GaleryAnnouncementService } from '../service/galery.service';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';
import { MessageService } from 'src/app/utilities/message/message.service';

@Component({
  selector: 'app-galery-component',
  templateUrl: 'galery-component.html',
  styleUrls: ['galery-component.scss'],
})
export class GaleryComponent {
  @Output() isHeader = new EventEmitter<boolean>(false);
  @Input() announcement!: Announcement;
  @Input() user!: User;
  public image: Galery;
  private destroy: Subscription;

  constructor(
    private galeryAnnouncementService: GaleryAnnouncementService,
    private managementService: ManagementAnnouncementService,
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
