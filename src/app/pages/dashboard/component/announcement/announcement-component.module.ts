import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AnnouncementStateComponent } from './state/state.component';
import { FormSocialNetworkAnnouncementComponent } from './social-network/form/form.component';
import { SocialNetworkAnnouncementComponent } from './social-network/social-network.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SegmentAnnouncementComponent } from './segment/segment.component';
import { MapAnnouncementComponent } from './map/map.component';
import { ListItemAnnouncementComponentRoutingModule } from './list-item/list-item.component-routing.module';
import { ListItemAnnouncementComponent } from './list-item/list-item.component';
import { FormCityAnnouncementComponent } from './city/form/form.component';
import { CityAnnouncementComponent } from './city/city.component';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { CardAnnouncementComponent } from './card/card.component';
import { CardAnnouncementComponentRoutingModule } from './card/card.component-routing.module';
import { FormContactAnnouncementComponent } from './contant/form/form.component';
import { ContactAnnouncementComponent } from './contant/contant.component';
import { ButtonCreateAnnouncementComponent } from './button-create/auth/button-create.component';
import { FormAddressAnnouncementComponent } from './address/form/form.component';
import { AddressAnnouncementComponent } from './address/address.component';
import { PresentPlanComponentModule } from 'src/app/components/present-plan/present-plan.module';
import { AnnouncementBlockadeComponent } from './blockade/blockade.component';
import { SearchMenuAnnouncementComponent } from './search/filter/filter-menu.component';
import { SearchAnnouncementService } from './search/service/search.service';
import { SearchAnnouncementComponent } from './search/search.component';
import { StateAnnouncementService } from './state/service/state.service';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AdminButtonCreateAnnouncementComponent } from './button-create/admin/button-create.component';
import { CoordinateAnnouncementService } from './map/service/map.service';
import { AddressService } from './address/service/address.service';
import { SocialNetworkAnnouncementService } from './social-network/service/social-network.service';
import { ContactAnnouncementService } from './contant/service/contact.service';
import { CityAnnouncementService } from './city/service/city.service';
import { CardHeaderComponent } from './card/components/header/header.component';
import { CardCitieComponent } from './card/components/citie/citie.component';
import { CardAddressComponent } from './card/components/address/address.component';
import { CardContactComponent } from './card/components/contact/contact.component';
import { CardWorkDayComponent } from './card/components/work-days/work-days.component';
import { CardMapsComponent } from './card/components/maps/maps.component';
import { CardSocialNetworkComponent } from './card/components/social-network/social-network.component';
import { MaskPipe } from 'src/app/utilities/pipe/mask/mask.pipe';
import { FormAnnouncementComponent } from 'src/app/pages/dashboard/component/announcement/announcement/form/form.component';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { DeleteAddressService } from './card/components/address/service/service.service';
import { DeleteCitieService } from './card/components/citie/service/service.service';
import { AdminAnnouncementService } from '../../administrator/announcement/service/admin-announcement.service';
import { DeleteContactService } from './card/components/contact/service/service.service';
import { DeleteWorkDayService } from './card/components/work-days/service/service.service';
import { WorkDayAnnouncementComponent } from './work-days/work-days.component';
import { GaleryComponentModule } from './galery/component/galery-component.module';
import { ShowAnnouncementComponentModule } from 'src/app/pages/public/components/announcement-component.module';
import { DeleteCoordinateService } from './card/components/maps/service/service.service';
import { DeleteSocialNetworkService } from './card/components/social-network/service/service.service';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    GaleryComponentModule,
    ShowAnnouncementComponentModule,
  ],
  declarations: [
    AnnouncementStateComponent,
    SocialNetworkAnnouncementComponent,
    FormSocialNetworkAnnouncementComponent,
    SkeletonComponent,
    SegmentAnnouncementComponent,
    MapAnnouncementComponent,
    ListItemAnnouncementComponent,
    FormCityAnnouncementComponent,
    CityAnnouncementComponent,
    CardAnnouncementComponent,
    FormContactAnnouncementComponent,
    ContactAnnouncementComponent,
    ButtonCreateAnnouncementComponent,
    AdminButtonCreateAnnouncementComponent,
    FormAddressAnnouncementComponent,
    AddressAnnouncementComponent,
    AnnouncementBlockadeComponent,
    SearchMenuAnnouncementComponent,
    SearchAnnouncementComponent,
    FormAnnouncementComponent,
    AnnouncementComponent,
    CardHeaderComponent,
    CardCitieComponent,
    CardContactComponent,
    CardAddressComponent,
    CardWorkDayComponent,
    CardSocialNetworkComponent,
    CardMapsComponent,
  ],
  exports: [
    AnnouncementStateComponent,
    SocialNetworkAnnouncementComponent,
    SkeletonComponent,
    SegmentAnnouncementComponent,
    MapAnnouncementComponent,
    ListItemAnnouncementComponent,
    CityAnnouncementComponent,
    CardAnnouncementComponent,
    ContactAnnouncementComponent,
    ButtonCreateAnnouncementComponent,
    AdminButtonCreateAnnouncementComponent,
    AddressAnnouncementComponent,
    AnnouncementBlockadeComponent,
    SearchMenuAnnouncementComponent,
    SearchAnnouncementComponent,
    FormAnnouncementComponent,
    AnnouncementComponent,
    CardMapsComponent,
    CardSocialNetworkComponent,
    CardHeaderComponent,
    CardWorkDayComponent,
    CardCitieComponent,
    CardContactComponent,
    CardAddressComponent,
  ],
  providers: [
    AdminAnnouncementService,
    SearchAnnouncementService,
    StateAnnouncementService,
    MaskPipe,
    CoordinateAnnouncementService,
    AddressService,
    DeleteAddressService,
    SocialNetworkAnnouncementService,
    CityAnnouncementService,
    ContactAnnouncementService,
    DeleteContactService,
    DeleteCitieService,
    DeleteWorkDayService,
    DeleteCoordinateService,
    DeleteSocialNetworkService,
    //
    AddressAnnouncementComponent,
    CityAnnouncementComponent,
    ContactAnnouncementComponent,
    WorkDayAnnouncementComponent,
    MapAnnouncementComponent,
    SocialNetworkAnnouncementComponent,
  ],
})
export class AnnouncementComponentsModule {}
