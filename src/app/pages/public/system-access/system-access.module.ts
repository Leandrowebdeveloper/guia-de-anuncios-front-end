import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './system-access-routing.module';

import { SystemAccessPage } from './system-access.page';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { RegisterService } from './services/register/service';
import { RecoverService } from './services/recover/service';
import { LoginService } from './services/login/login.service';
import { SystemAccessService } from './services/system-access.service';
import { ButtonsAccessComponent } from './components/buttons/buttons-sccess-component';
import { RequisitionLimitComponentModule } from 'src/app/components/requisitionLimit/requisition-limit.module';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { SocialLoginService } from './services/social-login/social-login.service';
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
  declarations: [
    SystemAccessPage,
    ButtonsAccessComponent,
    SocialLoginComponent,
  ],
  providers: [
    SystemAccessService,
    RegisterService,
    RecoverService,
    LoginService,
    SocialLoginService,
    SystemAccessPage,
  ],
})
export class SystemAccessPageModule {}
