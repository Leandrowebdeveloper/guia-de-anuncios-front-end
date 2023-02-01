import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceTermsPageRoutingModule } from './service-terms-routing.module';

import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { ServiceTermsPage } from './service-terms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceTermsPageRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [ServiceTermsPage],
})
export class ServiceTermsPageModule {}
