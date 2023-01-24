import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryComponent } from './category.component';
import { CategoryAnnouncementService } from './service/category.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [CategoryComponent],
  exports: [CategoryComponent],
  providers: [CategoryAnnouncementService],
})
export class CategoryComponentModule {}
