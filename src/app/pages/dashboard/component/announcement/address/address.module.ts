import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressComponent } from './address.component';
import { FormAddressModule } from './form/form.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FormAddressModule],
  declarations: [AddressComponent],
  exports: [AddressComponent],
})
export class AddressComponentModule {}
