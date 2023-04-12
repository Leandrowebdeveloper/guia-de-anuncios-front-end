import { IonPopover } from '@ionic/angular';
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
  @ViewChild('popover') popover!: IonPopover;
  @Output() isHeader = new EventEmitter<boolean>(false);
  @Input() announcement!: Pick<
    Announcement,
    '_csrf' | 'galery' | 'id' | 'plan'
  > | void;
  public index!: number;
  public isLightbox!: boolean | null;
  public isLightboxButton!: boolean | null;
  public endNext!: number | null;
  public isOpen = false;

  private destroy!: Subscription;
  private $order!: Subscription;
  constructor(
    private galeryAnnouncementService: GaleryAnnouncementService,
    private messageService: MessageService
  ) {}

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  public order(i: number): void {
    if (this.announcement?.galery) {
      this.isOpen = false;
      const img = this.announcement?.galery.splice(i, 1)[0];
      this.announcement?.galery.unshift(img);
      const result: (number | undefined)[] = this.announcement?.galery.map(
        (item) => item?.id
      );
      if (result && result.length > 0) {
        const data: Galery = {
          order: result,
          _csrf: this.announcement._csrf,
          announcementId: this.announcement?.id,
        };
        this.$order = this.galeryAnnouncementService.order(data).subscribe({
          next: (galery: Galery) => {
            this.message(galery);
            setTimeout(() => this.$order.unsubscribe(), 2000);
          },
          error: (error: HttpErrorResponse) =>
            this.messageService.error(error, undefined, this.$order),
        });
      }
    }
  }

  public plusSlides(i: number, operator: '-' | '+'): void {
    const keys: number[] | void = this.getAllKeysGalery();
    if (keys && keys.length > 0) {
      this.getLastKeyGalery(keys);
      this.setKeyGalery(operator, i, keys);
    }
  }

  public close(): void {
    this.isHeader.emit(false);
    this.isLightbox = null;
    this.endNext = null;
    this.isLightboxButton = null;
  }

  public show(index: number): void {
    const keys: number[] | void = this.getAllKeysGalery();
    if (keys && keys.length > 0) {
      this.getLastKeyGalery(keys);
      this.isHeader.emit(true);
      this.showLightbox(index);
      this.enableOrDisableButton();
      this.index = index;
    }
  }

  public delete(index: number): Subscription | void {
    if (this.announcement?.galery && this.announcement.galery.length > 0) {
      this.isOpen = false;
      const galery: Galery = this.announcement.galery[index];
      galery._csrf = this.announcement?._csrf;
      return (this.destroy = this.galeryAnnouncementService
        .delete(galery)
        .subscribe({
          next: (galery_): void => {
            this.update(galery);
            this.message(galery_);
          },
          error: (error) =>
            this.messageService.error(error, undefined, this.destroy),
        }));
    }
  }

  private showLightbox(index: number) {
    this.isLightbox = index > -1;
  }

  private getAllKeysGalery(): number[] | void {
    if (this.announcement?.galery && this.announcement?.galery.length > 0) {
      const keys: number[] = [...this.announcement.galery.keys()];
      return keys;
    }
  }

  private getLastKeyGalery(keys: number[]) {
    if (!this.endNext) {
      this.endNext = keys.pop() as number;
    }
  }

  private message(galery_: Galery): void {
    if (galery_?.message) {
      this.messageService.success(
        galery_?.message,
        undefined,
        this.destroy,
        350
      );
    }
  }

  private update(galery: Galery): void {
    const i = this.removeItem(galery);
    this.closeLightbox();
    if (i || i === 0) this.updateLightbox(i);
  }

  private updateLightbox(i: number) {
    if (this.announcement?.galery && this.announcement?.galery?.length >= 1) {
      this.index = 0;
    } else {
      this.index = i - 1;
    }
  }

  private setKeyGalery(operator: string, i: number, keys: number[]): void {
    const index = operator === '+' ? i + 1 : i - 1;
    if (keys.includes(index)) {
      this.index = index;
    }
  }

  private removeItem(galery: Galery): number | void {
    const i = this.getKeyGalery(galery);
    if (i || i === 0) {
      this.remove(i);
      return i;
    }
  }

  private getKeyGalery(galery: Galery): number | void {
    if (this.announcement?.galery && this.announcement?.galery?.length > 0) {
      return this.announcement.galery.findIndex(
        (item) => item?.id === galery?.id
      );
    }
  }

  private remove(i: number): void {
    if (this.announcement?.galery && this.announcement?.galery.length > 0) {
      this.announcement.galery.splice(i, 1);
    }
  }

  private closeLightbox(): void {
    if (this.announcement?.galery?.length === 0) this.close();
  }

  private enableOrDisableButton(): void {
    if (this.announcement?.galery) {
      this.isLightboxButton = this.announcement?.galery?.length > 1;
    }
  }
}
