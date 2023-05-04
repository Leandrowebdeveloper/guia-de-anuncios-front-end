import { StorageService } from 'src/app/services/storage/storage.service';
import {
  IonContent,
  IonSegment,
  ModalController,
  SegmentCustomEvent,
} from '@ionic/angular';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Announcement, User } from 'src/app/interface';
import { PagseguroService } from './services/pagseguro/pagseguro.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormCard } from './PagSeguro';
import { PagSeguro } from './interface';

declare let PagSeguroDirectPayment: any;

@Component({
  selector: 'app-present-plan',
  templateUrl: './present-plan.component.html',
  styleUrls: ['./present-plan.component.scss'],
})
export class PresentPlanComponent implements OnInit, OnDestroy {
  @ViewChild(IonContent, { static: true }) content!: IonContent;
  @Input() announcement!: Announcement;
  @ViewChild(IonSegment, { static: true }) segment!: IonSegment;
  public code!: string;

  public planDataValue!: string;
  public typePlan!: { label: string; value: string }[];
  public purchaseSummary!: {
    amount?: number;
    payment_plan: string;
    total: string;
  };
  public formPlans!: FormGroup;

  public toggle: boolean = true;
  public typePlayment!: 'card' | 'pix' | 'ticket';
  private segmentIonChange!: Subscription;
  private $pagSeguro!: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private modalController: ModalController,
    private pagseguroService: PagseguroService,
    private storageService: StorageService
  ) {}

  ngOnDestroy(): void {
    this.segmentIonChange.unsubscribe();
  }

  ngOnInit() {
    this.typePlan = this.pagseguroService.createTypePlan();
    this.toggleSegment();
    this.initFormPlans();
    this.setAmount();
  }

  public getFormCard(formPayment: FormCard): void | PagSeguro {
    if (this.authService.getUser) {
      const dataPagSeguro = this.pagseguroService.buildDataCard(
        this.authService.getUser,
        this.announcement,
        this.purchaseSummary,
        formPayment
      );
      console.log(dataPagSeguro);

      this.pagseguroService
        .payments(dataPagSeguro)
        .subscribe((result) => console.log(result));
    }
  }

  private initFormPlans(): void {
    this.formPlans = this.fb.group({
      amount: [''],
      payment_plan: ['', [Validators.required]],
    });
    this.isCheckout();
  }

  private isCheckout(): void {
    this.storageService
      .find('checkout')
      .then((checkout: { amount: number; payment_plan: number }) => {
        if (checkout) {
          this.formPlans.setValue({
            amount: checkout.amount,
            payment_plan: checkout.payment_plan,
          });
          this.openPayments();
        }
      });
  }

  public onSubmitPlan(): void {
    this.openPayments();
    this.updateCheckout();
  }

  private openPayments(): void {
    this.segment.value = 'payments';
    this.toggle = false;
  }

  private async updateCheckout(): Promise<void> {
    await this.storageService.create('checkout', { ...this.formPlans.value });
  }

  public onTypePlayment(value: 'card' | 'pix' | 'ticket'): void {
    this.typePlayment = value;
    this.pagSeguro();
    setTimeout(() => this.content.scrollToBottom(750), 1200);
  }

  private toggleSegment(): Subscription {
    return (this.segmentIonChange = this.segment.ionChange.subscribe({
      next: (segment: SegmentCustomEvent) => {
        if (segment?.detail?.value === 'plans') return (this.toggle = true);
        return (this.toggle = false);
      },
    }));
  }

  public pagSeguro(): void {
    const _csrf = this.authService.getCsrf;
    this.$pagSeguro = this.pagseguroService.getPagseguro({ _csrf }).subscribe({
      next: async (data: any) => {
        if (data.code[0]) this.code = data.code[0];
      },
      error: (error: HttpErrorResponse) => console.log(error),
      complete: () => {
        setTimeout(() => this.$pagSeguro.unsubscribe(), 2000);
      },
    });
  }

  public updateTypePlan(value?: number): void {
    const data = value || this.pagseguroService.valueBasic;
    this.typePlan.forEach((item, i) => {
      item.value = this.pagseguroService.createTypePlan(data)[i].value;
      item.label = this.pagseguroService.createTypePlan(data)[i].label;
    });
  }

  public setPlan(event: Event): void {
    const data = event as CustomEvent;
    const { value } = data.detail;
    if (value) {
      this.planDataValue = value;
    }
  }

  public setAmount(): void {
    if (this.formPlans?.value)
      this.formPlans.valueChanges.subscribe({
        next: (data) => {
          const {
            amount,
            payment_plan,
          }: { amount: number; payment_plan: number } = data;
          this.updateTypePlan(this.pagseguroService.calc(amount));
          this.updatePurchaseSummary(payment_plan, amount);
        },
      });
  }

  private updatePurchaseSummary(payment_plan: number, amount?: number): void {
    this.purchaseSummary = {
      amount,
      payment_plan: this.typePlan[payment_plan].label,
      total: this.typePlan[payment_plan].value,
    };
  }

  public close() {
    this.modalController.dismiss();
  }

  public async removePaymentMethod() {
    await this.storageService.destroy('checkout');
    this.segment.value = 'plans';
  }
}
