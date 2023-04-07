import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './system-access-admin-routing.module';

import { SystemAccessAdminPage } from './system-access-admin.page';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { LoginAdminService } from './services/login-admin.service';
import { RequisitionLimitComponentModule } from 'src/app/components/requisitionLimit/requisition-limit.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoginPageRoutingModule,
    FormComponentModule,
    RequisitionLimitComponentModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [SystemAccessAdminPage],
  providers: [LoginAdminService],
})
export class SystemAccessAdminPageModule {}
