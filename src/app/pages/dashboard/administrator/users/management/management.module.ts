import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MaintenancePageRoutingModule } from './management-routing.module';
import { ManagementPage } from './management.page';
import { UserComponentsModule } from 'src/app/pages/dashboard/component/user/user-component.module';
import { AnnouncementComponentsModule } from 'src/app/pages/dashboard/component/announcement/announcement-component.module';
import { EnabledItemAnnouncementPageModule } from 'src/app/pages/dashboard/auth/announcement/pages/enabled-item/enabled-item.module';
import { DeletedItemAnnouncememtPageModule } from 'src/app/pages/dashboard/auth/announcement/pages/deleted-item/deleted-item.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MaintenancePageRoutingModule,
    UserComponentsModule,
    EnabledItemAnnouncementPageModule,
    AnnouncementComponentsModule,
    DeletedItemAnnouncememtPageModule,
  ],
  declarations: [ManagementPage],
})
export class ManagementPageModule {}
