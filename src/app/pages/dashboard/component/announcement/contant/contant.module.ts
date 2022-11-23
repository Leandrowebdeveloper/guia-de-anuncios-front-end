import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContantComponent } from './contant.component';
import { FormPageModule } from './form/form.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FormPageModule],
  declarations: [ContantComponent],
  exports: [ContantComponent],
})
export class ContantComponentModule {}
