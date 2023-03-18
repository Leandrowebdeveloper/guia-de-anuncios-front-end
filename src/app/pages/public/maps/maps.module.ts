import { HeaderModule } from './../../../header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsPage } from './maps.page';

import { GoogleMapsModule } from '@angular/google-maps';
import { MapsPageRoutingModule } from './maps-routing.module';
import { CoordinateAnnouncementService } from '../../dashboard/component/announcement/map/service/map.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsPageRoutingModule,
    HeaderModule,
    GoogleMapsModule,
  ],
  declarations: [MapsPage],
  exports: [MapsPage],
  providers: [CoordinateAnnouncementService],
})
export class MapsPageModule {}
