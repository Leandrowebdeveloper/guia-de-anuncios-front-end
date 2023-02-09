import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Announcement, Galery } from 'src/app/interface';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { GaleryAnnouncementService } from './service/galery.service';
import { MessageService } from 'src/app/utilities/message/message.service';

@Component({
  selector: 'app-galery-announcement-component',
  templateUrl: 'galery-component.html',
  styleUrls: ['galery-component.scss'],
})
export class GaleryComponent {
  @ViewChild('popover') popover;
  @Output() isHeader = new EventEmitter<boolean>(false);
  @Input() announcement!: Pick<
    Announcement,
    '_csrf' | 'galery' | 'id' | 'plan'
  >;
  public image: number;
  public isLightbox: boolean;
  public isLightboxButton: boolean;
  public endNext: number;
  public isOpen = false;

  private destroy: Subscription;
  private $order: Subscription;
  constructor(
    private galeryAnnouncementService: GaleryAnnouncementService,
    private messageService: MessageService
  ) {}

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  public order(i: number): void {
    const img = this.announcement?.galery.splice(i, 1)[0];
    this.announcement?.galery.unshift(img);
    const result = this.announcement?.galery.map((item) => item?.id);
    const data: Galery = {
      order: result,
      // eslint-disable-next-line no-underscore-dangle
      _csrf: this.announcement._csrf,
      announcementId: this.announcement?.id,
    };
    this.$order = this.galeryAnnouncementService.order(data).subscribe(
      (galery: Galery) => {
        this.message(galery);
        setTimeout(() => this.$order.unsubscribe(), 2000);
      },
      (error: HttpErrorResponse) => console.log(error)
    );
  }

  public plusSlides(i: number, operator: '-' | '+'): void {
    const keys: number[] = this.getAllKeysGalery();
    this.getLastKeyGalery(keys);
    this.setKeyGalery(operator, i, keys);
    return;
  }

  public close(): void {
    this.isHeader.emit(false);
    this.isLightbox = null;
    this.endNext = null;
    this.isLightboxButton = null;
  }

  public show(index: number): void {
    const keys: number[] = this.getAllKeysGalery();
    this.getLastKeyGalery(keys);
    this.isHeader.emit(true);
    this.showLightbox(index);
    this.enableOrDisableButton();
    this.image = index;
  }

  public delete(index: number): Subscription {
    const galery: Galery = this.announcement.galery[index];
    // eslint-disable-next-line no-underscore-dangle
    galery._csrf = this.announcement?._csrf;
    return (this.destroy = this.galeryAnnouncementService
      .delete(galery)
      .subscribe(
        (galery_: Galery) => {
          this.update(galery);
          this.message(galery_);
        },
        (error) => this.messageService.error(error, null, this.destroy)
      ));
  }

  private showLightbox(index: number) {
    this.isLightbox = index > -1;
  }

  private getAllKeysGalery() {
    const keys: number[] = [...this.announcement.galery.keys()];
    return keys;
  }

  private getLastKeyGalery(keys: number[]) {
    if (!this.endNext) {
      this.endNext = keys.pop();
    }
  }

  private message(galery_: Galery) {
    this.messageService.success(galery_?.message, null, this.destroy, 350);
  }

  private update(galery: Galery): void {
    const i = this.removeItem(galery);
    this.enableOrDisableButton();
    this.closeLightbox();
    this.updateLightbox(i);
    this.endNext = null;
  }

  private updateLightbox(i: number) {
    if (this.announcement?.galery?.length === 1) {
      this.image = 0;
    } else {
      this.image = i - 1;
    }
  }

  private setKeyGalery(operator: string, i: number, keys: number[]): void {
    const index = operator === '+' ? i + 1 : i - 1;
    if (keys.includes(index)) {
      this.image = index;
    }
  }

  private removeItem(galery: Galery): number {
    const i = this.getKeyGalery(galery);
    this.remove(i);
    return i;
  }

  private getKeyGalery(galery: Galery): number {
    return this.announcement.galery.findIndex(
      (item) => item?.id === galery?.id
    );
  }

  private remove(i: number): void {
    this.announcement.galery.splice(i, 1);
  }

  private closeLightbox(): void {
    this.isLightbox = this.announcement?.galery?.length !== 0;
  }

  private enableOrDisableButton(): void {
    this.isLightboxButton = this.announcement?.galery?.length > 1;
  }
}
