import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { PrivacyPolicyPage } from './privacy-policy.page';
import { PrivacyPolicyPageRoutingModule } from './privacy-policy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyPolicyPageRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [PrivacyPolicyPage],
})
export class PrivacyPolicyPageModule {}
