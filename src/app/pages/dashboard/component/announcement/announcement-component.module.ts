import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AnnouncementStateComponent } from './state/state.component';
import { FormSocialNetworkAnnouncementComponent } from './social-network/form/form.component';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SegmentAnnouncementComponent } from './segment/segment.component';
import { MapComponent } from './map/map.component';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { ListItemAnnouncementComponentRoutingModule } from './list-item/list-item.component-routing.module';
import { ListItemAnnouncementComponent } from './list-item/list-item.component';
import { FormCityAnnouncementComponent } from './city/form/form.component';
import { CityComponent } from './city/city.component';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { CardAnnouncementComponent } from './card/card.component';
import { CardAnnouncementComponentRoutingModule } from './card/card.component-routing.module';
import { FormContactAnnouncementComponent } from './contant/form/form.component';
import { ContantAnnouncementComponent } from './contant/contant.component';
import { ButtonCreateAnnouncementComponent } from './button-create/button-create.component';
import { FormAddressAnnouncementComponent } from './address/form/form.component';
import { AddressAnnouncementComponent } from './address/address.component';
import { PresentPlanComponentModule } from 'src/app/components/present-plan/present-plan.module';
import { AnnouncementBlockadeComponent } from './blockade/blockade.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormComponentModule,
    HeaderModalModule,
    PipeModule,
    ListItemAnnouncementComponentRoutingModule,
    CardAnnouncementComponentRoutingModule,
    PresentPlanComponentModule,
  ],
  declarations: [
    AnnouncementStateComponent,
    SocialNetworkComponent,
    FormSocialNetworkAnnouncementComponent,
    SkeletonComponent,
    SegmentAnnouncementComponent,
    MapComponent,
    ListItemAnnouncementComponent,
    FormCityAnnouncementComponent,
    CityComponent,
    CardAnnouncementComponent,
    FormContactAnnouncementComponent,
    ContantAnnouncementComponent,
    ButtonCreateAnnouncementComponent,
    FormAddressAnnouncementComponent,
    AddressAnnouncementComponent,
    AnnouncementBlockadeComponent,
  ],
  exports: [
    AnnouncementStateComponent,
    SocialNetworkComponent,
    SkeletonComponent,
    SegmentAnnouncementComponent,
    MapComponent,
    ListItemAnnouncementComponent,
    CityComponent,
    CardAnnouncementComponent,
    ContantAnnouncementComponent,
    ButtonCreateAnnouncementComponent,
    AddressAnnouncementComponent,
    AnnouncementBlockadeComponent,
  ],
})
export class AnnouncementComponentsModule {}
