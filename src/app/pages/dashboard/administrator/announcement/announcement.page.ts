import { IonContent } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/utilities/message/message.service';
import { AdminAnnouncementService } from './service/admin-announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: 'announcement.page.html',
  styleUrls: ['announcement.page.scss'],
})
export class AdminAnnouncementPage {
  @ViewChild(IonContent, { static: true }) content!: IonContent;
  public isOrder = false;
  public sendOrder!: boolean;
  public saveSorting!: boolean;
  public toggleList!: boolean;

  public fab = false;

  constructor(
    public adminAnnouncementService: AdminAnnouncementService,
    public messageService: MessageService
  ) {}

  public orderList(): void {
    this.isOrder = !this.isOrder;
    this.sendOrder = !this.sendOrder;
  }

  public isSaveOrder(e: boolean): void {
    if (!e) {
      this.isOrder = e;
    }
    this.sendOrder = e;
  }

  public saveOrder(): void {
    this.adminAnnouncementService.saveSorting.emit(true);
  }

  public togglePage(e: boolean) {
    this.toggleList = e;
  }

  public logScrolling(event: any): void {
    if (event.detail.scrollTop > 500) {
      this.fab = true;
    } else {
      this.fab = false;
    }
  }

  public toTop(): Promise<void> {
    return this.content.scrollToTop(1000);
  }
}
