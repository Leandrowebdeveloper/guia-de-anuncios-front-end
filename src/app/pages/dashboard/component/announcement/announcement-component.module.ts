import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AnnouncementStateComponent } from './state/state.component';
import { AnnouncementFormSocialNetworkComponent } from './social-network/form/form.component';
import { AnnouncementSocialNetworkComponent } from './social-network/social-network.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { AnnouncementSegmentComponent } from './segment/segment.component';
import { AnnouncementMapComponent } from './map/map.component';
import { ListItemAnnouncementComponentRoutingModule } from './list-item/list-item.component-routing.module';
import { AnnouncementListItemComponent } from './list-item/list-item.component';
import { AnnouncementFormCityComponent } from './city/form/form.component';
import { AnnouncementCityComponent } from './city/city.component';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { AnnouncementCardComponent } from './card/card.component';
import { CardAnnouncementComponentRoutingModule } from './card/card.component-routing.module';
import { AnnouncementFormContactComponent } from './contant/form/form.component';
import { AnnouncementContactComponent } from './contant/contant.component';
import { AnnouncementButtonCreateComponent } from './button-create/auth/button-create.component';
import { AnnouncementFormAddressComponent } from './address/form/form.component';
import { AnnouncementAddressComponent } from './address/address.component';
import { PresentPlanComponentModule } from 'src/app/components/present-plan/present-plan.module';
import { AnnouncementBlockadeComponent } from './blockade/blockade.component';
import { AnnouncementSearchMenuComponent } from './search/filter/filter-menu.component';
import { SearchAnnouncementService } from './search/service/search.service';
import { AnnouncementSearchComponent } from './search/search.component';
import { StateAnnouncementService } from './state/service/state.service';
import { AnnouncementOpenFormComponent } from './announcement/announcement.component';
import { AnnouncementAdminButtonCreateComponent } from './button-create/admin/button-create.component';
import { CoordinateAnnouncementService } from './map/service/map.service';
import { AddressService } from './address/service/address.service';
import { SocialNetworkAnnouncementService } from './social-network/service/social-network.service';
import { ContactAnnouncementService } from './contant/service/contact.service';
import { CityAnnouncementService } from './city/service/city.service';
import { CardHeaderComponent } from './card/components/header/header.component';
import { MaskPipe } from 'src/app/pipe/mask/mask.pipe';
import { AnnouncementFormComponent } from 'src/app/pages/dashboard/component/announcement/announcement/form/form.component';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { AdminAnnouncementService } from '../../administrator/announcement/service/admin-announcement.service';
import { WorkDayAnnouncementComponent } from './work-days/work-days.component';
import { ShowAnnouncementComponentModule } from 'src/app/pages/public/components/announcement-component.module';
import { GaleryComponentModule } from './galery/galery-component.module';
import { AnnouncementSearchHomeComponent } from './search-home/search.component';
import { SearchHomeAnnouncementService } from './search-home/service/search-home.service';

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
    AnnouncementSocialNetworkComponent,
    AnnouncementFormSocialNetworkComponent,
    SkeletonComponent,
    AnnouncementSegmentComponent,
    AnnouncementMapComponent,
    AnnouncementListItemComponent,
    AnnouncementFormCityComponent,
    AnnouncementCityComponent,
    AnnouncementCardComponent,
    AnnouncementFormContactComponent,
    AnnouncementContactComponent,
    AnnouncementButtonCreateComponent,
    AnnouncementAdminButtonCreateComponent,
    AnnouncementFormAddressComponent,
    AnnouncementAddressComponent,
    AnnouncementBlockadeComponent,
    AnnouncementSearchMenuComponent,
    AnnouncementSearchComponent,
    AnnouncementFormComponent,
    AnnouncementOpenFormComponent,
    CardHeaderComponent,
    AnnouncementSearchHomeComponent,
  ],
  exports: [
    AnnouncementStateComponent,
    AnnouncementSocialNetworkComponent,
    SkeletonComponent,
    AnnouncementSegmentComponent,
    AnnouncementMapComponent,
    AnnouncementListItemComponent,
    AnnouncementCityComponent,
    AnnouncementCardComponent,
    AnnouncementContactComponent,
    AnnouncementButtonCreateComponent,
    AnnouncementAdminButtonCreateComponent,
    AnnouncementAddressComponent,
    AnnouncementBlockadeComponent,
    AnnouncementSearchMenuComponent,
    AnnouncementSearchComponent,
    AnnouncementFormComponent,
    AnnouncementOpenFormComponent,
    CardHeaderComponent,
    AnnouncementSearchHomeComponent,
  ],
  providers: [
    AdminAnnouncementService,
    SearchAnnouncementService,
    StateAnnouncementService,
    MaskPipe,
    CoordinateAnnouncementService,
    AddressService,
    SocialNetworkAnnouncementService,
    CityAnnouncementService,
    ContactAnnouncementService,
    SearchHomeAnnouncementService,
    //
    AnnouncementAddressComponent,
    AnnouncementCityComponent,
    AnnouncementContactComponent,
    WorkDayAnnouncementComponent,
    AnnouncementMapComponent,
    AnnouncementSocialNetworkComponent,
  ],
})
export class AnnouncementComponentsModule {}
