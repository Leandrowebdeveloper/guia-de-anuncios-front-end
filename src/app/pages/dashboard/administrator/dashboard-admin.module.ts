import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardAdminPageRoutingModule } from './dashboard-admin-routing.module';

import { DashboardPage } from './dashboard-admin.page';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardAdminPageRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [DashboardPage],
})
export class DashboardAdminPageModule {}
