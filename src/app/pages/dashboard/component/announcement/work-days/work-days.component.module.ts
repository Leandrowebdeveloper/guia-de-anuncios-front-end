import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkDayAnnouncementComponent } from './work-days.component';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { FormComponent } from './component/form/form.component';
import { DaysOfTheWeekComponent } from './component/days-of-the-week/days-of-the-week.component';
import { ButtonWorkDayComponent } from './component/button-work-days/button-work-days.component';

@NgModule({
  declarations: [
    WorkDayAnnouncementComponent,
    DaysOfTheWeekComponent,
    FormComponent,
    ButtonWorkDayComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [WorkDayAnnouncementComponent, ButtonWorkDayComponent],
})
export class WorkDayComponentModule {}
