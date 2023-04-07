import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnouncementPageRoutingModule } from './announcement-routing.module';

import { AnnouncementPage } from './announcement.page';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { AnnouncementUtilities } from 'src/app/utilities/announcement/announcement-utilities.service';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { WorkDayComponentModule } from '../../../component/announcement/work-days/work-days.component.module';
import { AnnouncementComponentsModule } from 'src/app/pages/dashboard/component/announcement/announcement-component.module';
import { UserComponentsModule } from '../../../component/user/user-component.module';
import { CategoryAnnouncementComponentModule } from '../../../component/category-announcement/category-announcement.module';
import { GaleryComponentModule } from './../../../component/announcement/galery/galery-component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AnnouncementPageRoutingModule,
    HeaderModalModule,
    GaleryComponentModule,
    AnnouncementComponentsModule,
    UserComponentsModule,
    WorkDayComponentModule,
    CategoryAnnouncementComponentModule,
    HeaderModule,
    FooterModule,
    PipeModule,
  ],
  declarations: [AnnouncementPage],
  providers: [AnnouncementUtilities],
})
export class AnnouncementPageModule {}
