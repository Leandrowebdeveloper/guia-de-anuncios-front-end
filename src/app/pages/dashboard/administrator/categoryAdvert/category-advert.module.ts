import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryAdvertisementPageRoutingModule } from './category-advert-routing.module';

import { CategoryPage } from './category-advert.page';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { FormPageModule } from './form/form.module';
import { CategoryAdvertSearchModule } from 'src/app/components/categotyAdvertsementSearch/search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryAdvertisementPageRoutingModule,
    CategoryAdvertSearchModule,
    PipeModule,
    HeaderModule,
    FooterModule,
    FormPageModule,
  ],
  declarations: [CategoryPage],
})
export class CategoryAdvertisementPageModule {}
