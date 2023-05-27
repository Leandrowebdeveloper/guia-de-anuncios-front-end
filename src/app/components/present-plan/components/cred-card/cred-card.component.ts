import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  AttrOperator,
  Brand,
  CreditCardToken,
  FormCard,
  Root,
  RootBrand,
  RootInstallments,
} from './../../PagSeguro';
import { AlertService } from 'src/app/utilities/alert/alert.service';

declare let PagSeguroDirectPayment: any;

@Component({
  selector: 'app-cred-card',
  templateUrl: './cred-card.component.html',
  styleUrls: [
    './cred-card.component.scss',
    '../../present-plan.component.scss',
  ],
})
export class CredCardComponent implements OnInit {
  @Output() data = new EventEmitter<FormCard>();
  @Input() valueBasic!: number;
  @Input() paymentRoute!: 'card' | 'ticket' | 'pix';
  @Input() purchaseSummary!: {
    amount?: number;
    payment_plan: string;
    total: string;
  };
  public formPayments!: FormGroup;
  public brandError!: { error: boolean };
  public brand!: Brand;
  @Input() payments!: Root;
  public installment!: AttrOperator[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initFormPayments();
    this.formPaymentsEvent();
  }

  public get fPayments(): {
    [key: string]: AbstractControl<any, any>;
  } {
    return this.formPayments.controls;
  }

  public onSubmit() {
    this.sendFormPayments();
  }

  private initFormPayments(): void {
    this.formPayments = this.fb.group({
      card_number: ['', [Validators.required]],
      card_month: ['', [Validators.required]],
      card_year: ['', [Validators.required]],
      card_cvv: ['', [Validators.required]],
      senderName: ['', [Validators.required]],
      creditCardHolderName: ['', [Validators.required]],
      card_installment: ['', [Validators.required]],
      creditCardHolderCPF: ['', [Validators.required]],
      senderHash: [''],
      installmentValue: [''],
      installmentTotal: [''],
      installmentQuantity: [''],
      creditCardToken: [''],
    });
  }

  public formPaymentsEvent(): void {
    if (this.formPayments?.value)
      this.formPayments.valueChanges.subscribe({
        next: (data: FormCard) => {
          if (data) {
            this.getBrand(data);
          }
          if (data.card_installment) {
            this.installmentValue(data);
          }
        },
      });
  }

  private installmentValue(data: FormCard) {
    const dt = this.installment.filter(
      (item) => item.quantity === Number(data.card_installment.split('x')[0])
    )[0];
    this.formPayments.value['installmentValue'] = dt.installmentAmount;
    this.formPayments.value['installmentTotal'] = dt.totalAmount;
    this.formPayments.value['installmentQuantity'] = dt.quantity;
    this.createCardToken();
  }

  private getBrand(data: { card_number: string }): void {
    if (data.card_number.length >= 6) {
      if (!this.brand)
        PagSeguroDirectPayment.getBrand({
          cardBin: data.card_number,
          success: (success: RootBrand) => (this.brand = success.brand),
          error: (error: any) => (this.brandError = error),
          complete: () => this.getInstallments(),
        });
    }
  }

  private onSenderHashReady(): void {
    PagSeguroDirectPayment.onSenderHashReady(
      (response: any): void | boolean => {
        if (response.status == 'error') {
          return false;
        }
        const { senderHash } = response; //Hash estará disponível nesta variável.
        this.formPayments.patchValue({ senderHash });
      }
    );
  }

  private getInstallments(): void {
    if (this.purchaseSummary?.total && this.brand.name) {
      PagSeguroDirectPayment.getInstallments({
        amount: this.purchaseSummary.total,
        maxInstallmentNoInterest: 2,
        brand: this.brand.name,
        success: (success: RootInstallments) => {
          this.installment = success.installments[this.brand.name];
          // Retorna as opções de parcelamento disponíveis
        },
        error: (error: any) => {
          console.log(error);
          // callback para chamadas que falharam.
        },
        complete: (response: any) => {
          // Callback para todas chamadas.
        },
      });
    }
  }

  private createCardToken(): void {
    if (
      this.formPayments.value.card_number &&
      this.brand.name &&
      this.formPayments.value.card_cvv &&
      this.formPayments.value.card_month &&
      this.formPayments.value.card_year &&
      !this.formPayments.value['creditCardToken']
    ) {
      PagSeguroDirectPayment.createCardToken({
        cardNumber: this.formPayments.value.card_number,
        brand: this.brand.name,
        cvv: this.formPayments.value.card_cvv,
        expirationMonth: this.formPayments.value.card_month,
        expirationYear: this.formPayments.value.card_year,
        success: (success: CreditCardToken) => {
          if (success) {
            this.formPayments.patchValue({
              creditCardToken: success.card.token,
            });
            this.onSenderHashReady();
          }
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }

  private sendFormPayments() {
    this.data.emit({
      ...this.formPayments.value,
    });
  }
}
