import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnnouncementPage } from './announcement.page';

import { AnnouncementPageRoutingModule } from './announcement-routing.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { AnnouncementService } from './service/service.service';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { ShowAnnouncementComponentModule } from 'src/app/pages/public/components/announcement-component.module';
import { AddressPipe } from 'src/app/utilities/pipe/address/address.pipe';
import { WorkDaysPipe } from 'src/app/utilities/pipe/workDays/workDays.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AnnouncementPageRoutingModule,
    HeaderModule,
    FooterModule,
    PipeModule,
    ShowAnnouncementComponentModule,
  ],
  declarations: [AnnouncementPage],
  providers: [AnnouncementService, AddressPipe, WorkDaysPipe],
})
export class AnnouncementPageModule {}
