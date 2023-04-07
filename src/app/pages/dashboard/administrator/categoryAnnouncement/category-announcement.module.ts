import { CategoryAnnouncementCreateComponent } from './../../component/category-announcement/create/create.component';
import { EnabledItemComponent } from './pages/enabled-item/enabled-item.component';
import { CategoryAnnouncementComponentModule } from './../../component/category-announcement/category-announcement.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPage } from './category-announcement.page';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { FormPageModule } from './form/form.module';
import { CategoryAnnouncementPageRoutingModule } from './category-announcement-routing.module';
import { DeletedItemComponent } from './pages/deleted-item/deleted-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryAnnouncementPageRoutingModule,
    PipeModule,
    HeaderModule,
    FooterModule,
    FormPageModule,
    CategoryAnnouncementComponentModule,
  ],
  declarations: [CategoryPage, DeletedItemComponent, EnabledItemComponent],
  providers: [CategoryAnnouncementCreateComponent],
})
export class CategoryAnnouncementPageModule {}
