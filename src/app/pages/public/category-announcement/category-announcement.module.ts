import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { CategoryAnnouncementPageRoutingModule } from './category-announcement-routing.module';
import { CategoryAnnouncementPage } from './category-announcement.page';
import { ShowAnnouncementComponentModule } from '../components/announcement-component.module';
import { CategoryAnnouncementService } from './service/service.service';
import { AdminAnnouncementService } from '../../dashboard/administrator/announcement/service/admin-announcement.service';
import { AddressPipe } from 'src/app/utilities/pipe/address/address.pipe';
import { WorkDaysPipe } from 'src/app/utilities/pipe/workDays/workDays.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryAnnouncementPageRoutingModule,
    ShowAnnouncementComponentModule,
    HeaderModule,
    FooterModule,
    PipeModule,
  ],
  declarations: [CategoryAnnouncementPage],
  providers: [
    CategoryAnnouncementService,
    AdminAnnouncementService,
    AddressPipe,
    WorkDaysPipe,
  ],
})
export class CategoryAnnouncementPageModule {}
