import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnouncementPageRoutingModule } from './announcement-routing.module';

import { AnnouncementPage } from './announcement.page';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { AnnouncementUtilities } from 'src/app/utilities/announcement/announcement-utilities.service';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { SocialNetworkComponentModule } from '../../../component/announcement/social-network/social-network.module';
import { MapComonentModule } from '../../../component/announcement/map/map.module';
import { AddressComponentModule } from '../../../component/announcement/address/address.module';
import { ContantComponentModule } from '../../../component/announcement/contant/contant.module';
import { CityComponentModule } from '../../../component/announcement/city/city.module';
import { GaleryComponentModule } from '../../../component/announcement/galery/component/galery-component.module';
import { StateComponentModule } from '../../../component/announcement/state/state.module';
import { OpeningHourComponentModule } from '../../../component/announcement/opening-hour/opening-hour.component.module';
import { CategoryComponentModule } from '../../../component/announcement/category/category.component.module';
import { AnnouncementComponentModule } from '../../../component/announcement/announcement/announcement.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AnnouncementPageRoutingModule,
    HeaderModalModule,
    SocialNetworkComponentModule,
    MapComonentModule,
    AddressComponentModule,
    ContantComponentModule,
    CityComponentModule,
    GaleryComponentModule,
    StateComponentModule,
    OpeningHourComponentModule,
    CategoryComponentModule,
    AnnouncementComponentModule,
    HeaderModule,
    FooterModule,
    PipeModule,
  ],
  declarations: [AnnouncementPage],
  providers: [AnnouncementUtilities],
})
export class AnnouncementPageModule {}
