import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss'],
})
export class UsersPage {
  @ViewChild(IonContent, { static: true }) content!: IonContent;
  public toggleList!: boolean;
  public fab = false;
  public menssage!: boolean;

  constructor() {}

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
