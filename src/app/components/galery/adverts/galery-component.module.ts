import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertGaleryComponent } from './galery-component';
import { HeaderModalModule } from '../../header-modal/header-modal.module';
import { PipeModule } from 'src/app/utilities/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModalModule,
    PipeModule,
  ],
  declarations: [AdvertGaleryComponent],
  providers: [AdvertGaleryComponent],
})
export class AdvertGaleryComponentModule {}
