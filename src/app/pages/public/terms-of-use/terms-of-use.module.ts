import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { TermsOfUsePage } from './terms-of-use.page';
import { TermsOfUsePageRoutingModule } from './terms-of-use-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsOfUsePageRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [TermsOfUsePage],
})
export class TermsOfUsePageModule {}
