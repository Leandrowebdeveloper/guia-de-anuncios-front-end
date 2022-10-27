import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancePageRoutingModule } from './management-routing.module';

import { ManagementPage } from './management.page';
import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { FormPageModule } from '../form/form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenancePageRoutingModule,
    HeaderModalModule,
    PipeModule,
    HeaderModule,
    FooterModule,
    FormPageModule,
  ],
  declarations: [ManagementPage],
})
export class ManagementPageModule {}
