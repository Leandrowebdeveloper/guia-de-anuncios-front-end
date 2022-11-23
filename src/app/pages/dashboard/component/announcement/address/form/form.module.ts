import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { FormComponent } from './form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormComponentModule,
    HeaderModalModule,
  ],
  declarations: [FormComponent],
})
export class FormAddressModule {}
