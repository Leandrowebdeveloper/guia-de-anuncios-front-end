import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpeningHourComponent } from './opening-hour.component';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { FormComponent } from './component/form/form.component';
import { DaysOfTheWeekComponent } from './component/days-of-the-week/days-of-the-week.component';
import { ButtonOpeningHourComponent } from './component/button-opening-hour/button-opening-hour.component';

@NgModule({
  declarations: [
    OpeningHourComponent,
    DaysOfTheWeekComponent,
    FormComponent,
    ButtonOpeningHourComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [OpeningHourComponent, ButtonOpeningHourComponent],
})
export class OpeningHourComponentModule {}
