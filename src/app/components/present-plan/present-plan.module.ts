import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentPlanComponent } from './present-plan.component';
import { PagseguroService } from './services/pagseguro/pagseguro.service';

@NgModule({
  declarations: [PresentPlanComponent],
  imports: [CommonModule, IonicModule],
  exports: [PresentPlanComponent],
  providers: [PagseguroService],
})
export class PresentPlanComponentModule {}
