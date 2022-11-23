import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityComponent } from './city.component';
import { FormPageModule } from './form/form.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FormPageModule],
  declarations: [CityComponent],
  exports: [CityComponent],
})
export class CityComponentModule {}
