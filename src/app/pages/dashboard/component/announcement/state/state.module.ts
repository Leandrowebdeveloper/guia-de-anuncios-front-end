import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StateComponent } from './state.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [StateComponent],
  exports: [StateComponent],
})
export class StateComponentModule {}
