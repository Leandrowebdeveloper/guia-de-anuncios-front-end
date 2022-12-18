import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancePageRoutingModule } from './management-routing.module';

import { ManagementPage } from './management.page';
import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';

import { FormPageModule } from '../form/form.module';
import { CategoryAnnouncementComponentModule } from '../../../component/category-announcement/category-announcement.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenancePageRoutingModule,
    HeaderModalModule,
    PipeModule,
    FormPageModule,
    CategoryAnnouncementComponentModule,
  ],
  declarations: [ManagementPage],
})
export class ManagementPageModule {}
