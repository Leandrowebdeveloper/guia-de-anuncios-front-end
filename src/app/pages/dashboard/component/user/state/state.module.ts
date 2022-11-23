import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './state.component';

@NgModule({
  declarations: [StateComponent],
  imports: [CommonModule, IonicModule],
  exports: [StateComponent],
})
export class StateComponentModule {}
