import { HeaderComponent } from './button-upload/button-upload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleryComponent } from './galery-component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [GaleryComponent, HeaderComponent],
  exports: [GaleryComponent, HeaderComponent],
})
export class GaleryComponentModule {}
