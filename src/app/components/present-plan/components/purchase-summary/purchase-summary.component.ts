import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-purchase-summary',
  templateUrl: './purchase-summary.component.html',
  styleUrls: [
    './purchase-summary.component.scss',
    '../../present-plan.component.scss',
  ],
})
export class PurchaseSummaryComponent {
  @Input() purchaseSummary!: {
    amount?: number;
    payment_plan: string;
    total: number;
  };
}
