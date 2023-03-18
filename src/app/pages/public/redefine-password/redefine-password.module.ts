import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { RedefinePasswordPage } from './redefine-password.page';

import { FormComponentModule } from 'src/app/components/form/form.module';
import { RedefinePasswordResolver } from './guard/resolve.guard';
import { RedefinePasswordService } from './services/redefine-password.service';
import { RedefinePasswordPageRoutingModule } from './redefine-password-routing.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedefinePasswordPageRoutingModule,
    FormComponentModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [RedefinePasswordPage],
  providers: [RedefinePasswordResolver, RedefinePasswordService]
})
export class RedefinePasswordPageModule {}
