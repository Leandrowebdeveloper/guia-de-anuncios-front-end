import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnouncementPageRoutingModule } from './announcement-routing.module';

import { AnnouncementPage } from './announcement.page';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { FormPageModule } from './form/form.module';
import { CategoryAnnouncementSearchModule } from 'src/app/components/categotyAnnouncementSearch/search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnouncementPageRoutingModule,
    CategoryAnnouncementSearchModule,
    PipeModule,
    HeaderModule,
    FooterModule,
    FormPageModule,
  ],
  declarations: [AnnouncementPage],
})
export class AnnouncementPageModule {}
