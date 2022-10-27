import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { AdvertUtilities } from 'src/app/utilities/advert/advert-utilities.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertPageRoutingModule } from './advert-routing.module';

import { AdvertPage } from './advert.page';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { FormPageModule } from './form/form.module';
import { AdvertGaleryComponentModule } from 'src/app/components/galery/adverts/galery-component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AdvertPageRoutingModule,
    FormPageModule,
    HeaderModalModule,
    AdvertGaleryComponentModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [AdvertPage],
  providers: [AdvertUtilities],
})
export class AdvertPageModule {}
