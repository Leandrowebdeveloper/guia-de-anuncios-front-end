import { DeletedItemPageModule } from './pages/deleted-item/deleted-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';

import { FooterModule } from 'src/app/footer/footer.module';
import { HeaderModule } from 'src/app/header/header.module';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { EnabledItemPageModule } from './pages/enabled-item/enabled-item.module';
import { ButtonCreateComponent } from 'src/app/pages/dashboard/component/announcement/button-create/button-create.component';
import { SegmentComponent } from 'src/app/pages/dashboard/component/announcement/segment/segment.component';
import { AnnouncementComponentModule } from 'src/app/pages/dashboard/component/announcement/announcement/announcement.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    HeaderModule,
    FooterModule,
    PipeModule,
    EnabledItemPageModule,
    DeletedItemPageModule,
    AnnouncementComponentModule,
  ],
  declarations: [DashboardPage, SegmentComponent, ButtonCreateComponent],
})
export class DashboardPageModule {}
