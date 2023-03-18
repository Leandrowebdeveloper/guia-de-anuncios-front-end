import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequisitionLimitComponent } from './requisition-limit.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [RequisitionLimitComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [RequisitionLimitComponent]
})
export class RequisitionLimitComponentModule { }
