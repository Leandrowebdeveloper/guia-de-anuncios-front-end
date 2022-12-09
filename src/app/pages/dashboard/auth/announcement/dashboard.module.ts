import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';

import { FooterModule } from 'src/app/footer/footer.module';
import { HeaderModule } from 'src/app/header/header.module';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { EnabledItemAnnouncementPageModule } from './pages/enabled-item/enabled-item.module';
import { AnnouncementComponentModule } from 'src/app/pages/dashboard/component/announcement/announcement/announcement.module';
import { AnnouncementComponentsModule } from 'src/app/pages/dashboard/component/announcement/announcement-component.module';
import { DeletedItemAnnouncememtPageModule } from './pages/deleted-item/deleted-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    HeaderModule,
    FooterModule,
    PipeModule,
    EnabledItemAnnouncementPageModule,
    DeletedItemAnnouncememtPageModule,
    AnnouncementComponentModule,
    AnnouncementComponentsModule,
  ],
  declarations: [DashboardPage],
})
export class DashboardPageModule {}
