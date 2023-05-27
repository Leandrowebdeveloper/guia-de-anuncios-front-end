import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { PagSeguro } from '../../interface';
import { Announcement, User } from 'src/app/interface';
import { FormCard } from '../../PagSeguro';

@Injectable()
export class PagseguroService extends HttpService<PagSeguro> {
  public valueBasic = 19.9;
  private operator = 1.7;
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService
  ) {
    super(http, storageService);
    this.setApi = `ckeckout`;
  }

  public getPagseguro(data: any): Observable<PagSeguro> {
    return this.patch(data);
  }

  public payments(data: any): Observable<PagSeguro> {
    return this.create(data);
  }

  public createTypePlan(value?: number): {
    label: string;
    value: string;
  }[] {
    const data = value || this.valueBasic;
    return [
      {
        label: `30 dias ${HelpsService.numberFormat(data).replace(
          /\d{1}$/g,
          '0'
        )}`,
        value: data.toFixed(2).replace(/\d{1}$/g, '0'),
      },
      {
        label: `90 dias ${HelpsService.numberFormat(data * 3).replace(
          /\d{1}$/g,
          '0'
        )}`,
        value: (data * 3).toFixed(2).replace(/\d{1}$/g, '0'),
      },
      {
        label: `180 dias ${HelpsService.numberFormat(data * 6).replace(
          /\d{1}$/g,
          '0'
        )}`,
        value: (data * 6).toFixed(2).replace(/\d{1}$/g, '0'),
      },
      {
        label: `365 dias ${HelpsService.numberFormat(data * 12).replace(
          /\d{1}$/g,
          '0'
        )}`,
        value: (data * 12).toFixed(2).replace(/\d{1}$/g, '0'),
      },
    ];
  }

  public calc(amount: number): number {
    const calc = Number((this.valueBasic / this.operator).toFixed(2)) * amount;
    return Number((calc + this.valueBasic).toFixed(2));
  }

  public buildDataCard(
    _csrf: string,
    purchaseSummary: {
      amount?: number;
      payment_plan: string;
      total: string;
    },
    dataCard: FormCard,
    paymentMethod: 'creditCard' | 'boleto'
  ): PagSeguro | void {
    if (_csrf) {
      const {
        creditCardToken,
        creditCardHolderName,
        installmentQuantity,
        installmentValue,
        creditCardHolderCPF,
      } = dataCard;

      if (dataCard) {
        return {
          paymentMethod,

          itemId1: purchaseSummary.payment_plan,
          itemAmount1: purchaseSummary.total,
          itemDescription1: purchaseSummary.payment_plan,
          itemQuantity1: this.itemQuantity(purchaseSummary),

          senderHash: dataCard.senderHash,

          creditCardToken,
          installmentQuantity,
          installmentValue: installmentValue.toFixed(2),
          creditCardHolderName,
          creditCardHolderCPF,

          _csrf,
        };
      }
    }
  }

  private itemQuantity(purchaseSummary: {
    amount?: number | undefined;
    payment_plan: string;
    total: string;
  }): number {
    return purchaseSummary.amount ? purchaseSummary.amount : 1;
  }
}
