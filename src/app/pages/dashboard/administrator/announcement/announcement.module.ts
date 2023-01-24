import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAnnouncementPage } from './announcement.page';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { AdminAnnouncementService } from './service/admin-announcement.service';
import { EnabledItemAnnouncementPageModule } from './../../auth/announcement/pages/enabled-item/enabled-item.module';
import { AnnouncementComponentsModule } from './../../component/announcement/announcement-component.module';
import { AdminAnnouncementPageRoutingModule } from './announcement-routing.module';
import { UserComponentsModule } from '../../component/user/user-component.module';
import { DeletedItemAdminAnnouncementPage } from './pages/deleted-item/deleted-item.page';
import { EnabledItemAdminAnnouncementPage } from './pages/enabled-item/enabled-item.page';
import { AddressPipe } from 'src/app/utilities/pipe/address/address.pipe';
import { WorkDaysPipe } from 'src/app/utilities/pipe/workDays/workDays.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAnnouncementPageRoutingModule,
    PipeModule,
    HeaderModule,
    FooterModule,
    UserComponentsModule,
    AnnouncementComponentsModule,
    EnabledItemAnnouncementPageModule,
  ],
  declarations: [
    AdminAnnouncementPage,
    DeletedItemAdminAnnouncementPage,
    EnabledItemAdminAnnouncementPage,
  ],
  // exports: [DeletedItemAdminAnnouncementPage, EnabledItemAdminAnnouncementPage],
  providers: [AdminAnnouncementService, AddressPipe, WorkDaysPipe],
})
export class AdminAnnouncementPageModule {}
