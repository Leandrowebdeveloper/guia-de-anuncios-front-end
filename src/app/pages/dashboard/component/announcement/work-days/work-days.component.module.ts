import { RouterModule } from '@angular/router';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
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
import { DeleteWorkDayService } from './component/button-work-days-admin/service/service.service';
import { AdminManagementWorkDayComponent } from './component/button-work-days-admin/work-days.component';

@NgModule({
  declarations: [
    WorkDayAnnouncementComponent,
    DaysOfTheWeekComponent,
    FormComponent,
    ButtonWorkDayComponent,
    AdminManagementWorkDayComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    PipeModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [WorkDayAnnouncementComponent, ButtonWorkDayComponent],
  providers: [DeleteWorkDayService],
})
export class WorkDayComponentModule {}
