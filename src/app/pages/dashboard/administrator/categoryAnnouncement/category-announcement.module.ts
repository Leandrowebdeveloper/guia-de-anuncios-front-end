import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPage } from './category-announcement.page';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { FormPageModule } from './form/form.module';
import { CategoryAnnouncementSearchModule } from 'src/app/components/categotyAnnouncementSearch/search.module';
import { CategoryAnnouncementPageRoutingModule } from './category-announcement-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryAnnouncementPageRoutingModule,
    CategoryAnnouncementSearchModule,
    PipeModule,
    HeaderModule,
    FooterModule,
    FormPageModule,
  ],
  declarations: [CategoryPage],
})
export class CategoryAnnouncementPageModule {}
