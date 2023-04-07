import { PipeModule } from 'src/app/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { CategoryAnnouncementPageRoutingModule } from './category-announcement-routing.module';
import { CategoryAnnouncementPage } from './category-announcement.page';
import { CategoryAnnouncementService } from './service/service.service';
import { AdminAnnouncementService } from '../../dashboard/administrator/announcement/service/admin-announcement.service';
import { AddressPipe } from 'src/app/pipe/address/address.pipe';
import { WorkDaysPipe } from 'src/app/pipe/workDays/workDays.pipe';
import { ModuleDarkService } from 'src/app/services/module-dark/module-dark.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryAnnouncementPageRoutingModule,
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
    ModuleDarkService,
  ],
})
export class CategoryAnnouncementPageModule {}
