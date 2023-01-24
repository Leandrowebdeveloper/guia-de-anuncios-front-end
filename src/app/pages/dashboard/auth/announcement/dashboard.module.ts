import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';

import { FooterModule } from 'src/app/footer/footer.module';
import { HeaderModule } from 'src/app/header/header.module';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { AnnouncementComponentsModule } from 'src/app/pages/dashboard/component/announcement/announcement-component.module';
import { AddressPipe } from 'src/app/utilities/pipe/address/address.pipe';
import { WorkDaysPipe } from 'src/app/utilities/pipe/workDays/workDays.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    HeaderModule,
    FooterModule,
    PipeModule,
    AnnouncementComponentsModule,
  ],
  declarations: [DashboardPage],
  providers: [AddressPipe, WorkDaysPipe],
})
export class DashboardPageModule {}
