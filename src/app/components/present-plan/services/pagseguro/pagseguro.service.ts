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
    user: User,
    announcement: Announcement,
    purchaseSummary: {
      amount?: number;
      payment_plan: string;
      total: string;
    },
    dataCard: FormCard,
    boleto?: { cpf: string }
  ): PagSeguro | void {
    if (
      user &&
      announcement.citie &&
      announcement.contact &&
      announcement.address
    ) {
      const { mobilePhone } = announcement.contact;
      // const type = plan.filter((item) => item.value === planDataValue)[0];
      const { name, email, slug, _csrf } = user;
      // const description = this.amount > 1 ? `com ${this.amount} contas.` : '';
      const {
        zip_code,
        numberr,
        district,
        block,
        allotment,
        street,
        complement,
      } = announcement.address;
      const { city, uf } = announcement.citie;

      const {
        creditCardToken,
        creditCardHolderName,
        installmentQuantity,
        installmentValue,
        installmentTotal,
      } = dataCard;

      if (mobilePhone && dataCard) {
        return {
          paymentMode: 'default',
          paymentMethod: 'creditCard',
          receiverEmail: 'guiajussarago@gmail.com',
          currency: 'BRL',
          extraAmount: '1.00',

          itemId1: purchaseSummary.payment_plan,
          itemAmount1: purchaseSummary.total,
          itemDescription1: purchaseSummary.payment_plan,
          itemQuantity1: this.itemQuantity(purchaseSummary),

          notificationURL: 'https://montesbelos.app/notificacoes',
          reference: slug,
          senderCPF: 22111944785,

          senderHash: dataCard.senderHash,
          shippingAddressRequired: true,

          senderName: name,
          senderEmail: email,
          senderAreaCode: this.getPreFix(mobilePhone),
          senderPhone: this.getSuFix(mobilePhone),

          shippingType: '3',
          shippingCost: '0.00',
          shippingAddressPostalCode: Number(zip_code),
          shippingAddressNumber: String(numberr),
          shippingAddressCity: String(city),
          shippingAddressState: String(uf),
          shippingAddressDistrict: String(district),
          shippingAddressCountry: 'BRA',
          shippingAddressStreet: `${street}, Qd ${block}, Lt ${allotment}`,
          shippingAddressComplement: String(complement),
          _csrf,

          creditCardToken,
          installmentQuantity,
          installmentValue,
          noInterestInstallmentQuantity: 2,
          creditCardHolderName,
          creditCardHolderCPF: 22111944785,
          creditCardHolderBirthDate: '10/08/1980',
          creditCardHolderAreaCode: this.getPreFix(mobilePhone),
          creditCardHolderPhone: this.getSuFix(mobilePhone),
          billingAddressStreet: `${street}, Qd ${block}, Lt ${allotment}`,
          billingAddressNumber: String(numberr),
          billingAddressComplement: String(complement),
          billingAddressDistrict: String(district),
          billingAddressPostalCode: Number(zip_code),
          billingAddressCity: String(city),
          billingAddressState: String(uf),
          billingAddressCountry: 'BRL',
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

  private getPreFix(mobilePhone: number): number {
    return Number(mobilePhone.toString()[0] + mobilePhone.toString()[1]);
  }

  private getSuFix(mobilePhone: number): number {
    const suFix = mobilePhone.toString().slice(2);
    return Number(suFix);
  }
}
