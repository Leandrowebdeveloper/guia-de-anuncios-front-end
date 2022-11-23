import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan.component';
import { FormComponentModule } from 'src/app/components/form/form.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [PlanComponent, FormComponent],
  imports: [CommonModule, IonicModule, FormComponentModule, HeaderModalModule],
  exports: [PlanComponent],
})
export class PlanComponentModule {}
