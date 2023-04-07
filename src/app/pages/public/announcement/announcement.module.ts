import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnnouncementPage } from './announcement.page';

import { AnnouncementPageRoutingModule } from './announcement-routing.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { AnnouncementService } from './service/service.service';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { ShowAnnouncementComponentModule } from 'src/app/pages/public/components/announcement-component.module';
import { AddressPipe } from 'src/app/pipe/address/address.pipe';
import { WorkDaysPipe } from 'src/app/pipe/workDays/workDays.pipe';
import { MapsPageModule } from '../maps/maps.module';
import { GoogleMapsDirectionService } from 'src/app/services/google-maps/google-maps-direction.service';

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
    MapsPageModule,
  ],
  declarations: [AnnouncementPage],
  providers: [
    AnnouncementService,
    AddressPipe,
    WorkDaysPipe,
    GoogleMapsDirectionService,
  ],
})
export class AnnouncementPageModule {}
