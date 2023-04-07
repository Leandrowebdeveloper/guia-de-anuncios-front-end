import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { CategoryAnnouncementCreateComponent } from '../../component/category-announcement/create/create.component';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: 'category-announcement.page.html',
  styleUrls: ['category-announcement.page.scss', '../users/users.page.scss'],
})
export class CategoryPage {
  @ViewChild(IonContent, { static: true }) content!: IonContent;
  public isOrder = false;
  public sendOrder!: boolean;
  public saveSorting!: boolean;
  public toggleList!: boolean;
  public error!: boolean;
  public empty!: boolean;

  public fab = false;

  constructor(
    private categoryService: CategoryService,
    private categoryAnnouncementCreateComponent: CategoryAnnouncementCreateComponent
  ) {}

  public setError(event: boolean) {
    this.error = event;
  }

  public isEmpty(event: boolean) {
    this.empty = event;
  }

  public register() {
    this.categoryAnnouncementCreateComponent.register();
  }

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
    this.categoryService.saveSorting.emit(true);
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
