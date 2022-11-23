import { FormComponent } from './form/form.component';
import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NameComponent } from './name.component';
import { FormComponentModule } from 'src/app/components/form/form.module';

@NgModule({
  imports: [CommonModule, IonicModule, FormComponentModule, HeaderModalModule],
  declarations: [NameComponent, FormComponent],
  exports: [NameComponent],
})
export class NameComponentModule {}
