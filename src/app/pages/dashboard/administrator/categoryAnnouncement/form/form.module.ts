import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { FormComponent } from './form.component';
import { CategoryUtilities } from 'src/app/utilities/category/category-utilities.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormComponentModule,
    HeaderModalModule,
  ],
  declarations: [FormComponent],
  providers: [CategoryUtilities],
})
export class FormPageModule {}
