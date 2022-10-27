import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserSearchMenuComponent } from './filter-menu.component';

@NgModule({
  declarations: [UserSearchMenuComponent],
  imports: [IonicModule, CommonModule],
  exports: [UserSearchMenuComponent],
})
export class UserSearchMenuComponentModule {}
