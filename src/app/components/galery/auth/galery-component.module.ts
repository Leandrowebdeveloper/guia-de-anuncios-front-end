import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserGaleryComponent } from './galery-component';
import { HeaderModalModule } from '../../header-modal/header-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModalModule
  ],
  declarations: [UserGaleryComponent],
  providers: [UserGaleryComponent]
})
export class UserGaleryComponentModule {}
