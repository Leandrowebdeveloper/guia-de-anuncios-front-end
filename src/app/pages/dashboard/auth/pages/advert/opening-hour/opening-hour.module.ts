import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpeningHourPageRoutingModule } from './opening-hour-routing.module';

import { OpeningHourPage } from './opening-hour.page';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OpeningHourPageRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [OpeningHourPage],
})
export class OpeningHourPageModule {}
