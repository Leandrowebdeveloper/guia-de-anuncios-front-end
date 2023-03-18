import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserManagementPage } from './management.page';

import { UserPageRoutingModule } from './management-routing.module';

import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { UserComponentsModule } from 'src/app/pages/dashboard/component/user/user-component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UserPageRoutingModule,

    HeaderModule,
    FooterModule,
    UserComponentsModule,
  ],
  declarations: [UserManagementPage],
})
export class UserPageModule {}
