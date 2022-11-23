import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailComponent } from './email.component';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormComponentModule,
    HeaderModalModule,
  ],
  declarations: [EmailComponent, FormComponent],
  exports: [EmailComponent],
})
export class EmailComponentModule {}
