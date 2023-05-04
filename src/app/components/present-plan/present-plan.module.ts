import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentPlanComponent } from './present-plan.component';
import { PagseguroService } from './services/pagseguro/pagseguro.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardNumbersDirective } from './directive/card-numbers/card-numbers.directive';
import { CardMonthDirective } from './directive/card-month/card-month.directive';
import { CardYearDirective } from './directive/card-year/card-year.directive';
import { CardCvvDirective } from './directive/card-cvv/card-cvv.directive';
import { CredCardPipe } from './pipe/cred-card/cred-card.pipe';
import { CredCardComponent } from './components/cred-card/cred-card.component';
import { InstallmentPipe } from './pipe/installment/installment.pipe';
import { SlideComponent } from './components/slides/slide.component';
import { PurchaseSummaryComponent } from './components/purchase-summary/purchase-summary.component';

@NgModule({
  declarations: [
    PresentPlanComponent,
    CredCardComponent,
    SlideComponent,
    PurchaseSummaryComponent,
    CardNumbersDirective,
    CardMonthDirective,
    CardYearDirective,
    CardCvvDirective,
    CredCardPipe,
    InstallmentPipe,
  ],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [PresentPlanComponent],
  providers: [PagseguroService],
})
export class PresentPlanComponentModule {}
