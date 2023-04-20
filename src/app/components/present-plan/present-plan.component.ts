import { ModalController, Platform } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { HelpsService } from 'src/app/services/helps/helps.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Announcement } from 'src/app/interface';
import { PagseguroService } from './services/pagseguro/pagseguro.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Browser } from '@capacitor/browser';
import { PagSeguro } from './interface';

declare let PagSeguroLightbox: any;

@Component({
  selector: 'app-present-plan',
  templateUrl: './present-plan.component.html',
  styleUrls: ['./present-plan.component.scss'],
})
export class PresentPlanComponent implements OnInit {
  @Input() announcement!: Announcement;
  public planDataValue!: string;
  public typePlan!: { label: string; value: string }[];
  private amount!: number;
  private valueBasic = 19.9;
  private $pagSeguro!: Subscription;
  private callback = {
    success: (transactionCode: any) => {
      //Insira os comandos para quando o usuário finalizar o pagamento.
      //O código da transação estará na variável "transactionCode"
      console.log(
        'Compra feita com sucesso, código de transação: ' + transactionCode
      );
    },
    abort: () => {
      //Insira os comandos para quando o usuário abandonar a tela de pagamento.
      console.log('abortado');
    },
  };
  constructor(
    private authService: AuthService,
    private modalController: ModalController,
    private pagseguroService: PagseguroService,
    private plt: Platform
  ) {}

  ngOnInit() {
    this.typePlan = this.createTypePlan();
  }

  public pagSeguro(): void {
    const data = this.buildData();
    this.$pagSeguro = this.pagseguroService.getPagseguro(data).subscribe({
      next: async (data: any) => {
        if (data.code[0]) {
          if (this.plt.is('desktop')) {
            PagSeguroLightbox(data.code[0], this.callback);
          } else {
            await Browser.open({
              url: `https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=${data.code[0]}`,
              windowName: '_blank',
            });
          }
        }
      },
      error: (error: HttpErrorResponse) => console.log(error),
      complete: () => {
        setTimeout(() => this.$pagSeguro.unsubscribe(), 2000);
      },
    });
  }

  public createTypePlan(value?: number) {
    const data = value || this.valueBasic;
    return [
      {
        label: `30 dias ${HelpsService.numberFormat(data)}`,
        value: data.toFixed(2),
      },
      {
        label: `90 dias ${HelpsService.numberFormat(data * 3)}`,
        value: (data * 3).toFixed(2),
      },
      {
        label: `180 dias ${HelpsService.numberFormat(data * 6)}`,
        value: (data * 6).toFixed(2),
      },
      {
        label: `365 dias ${HelpsService.numberFormat(data * 12)}`,
        value: (data * 12).toFixed(2),
      },
    ];
  }

  public updateTypePlan(value?: number) {
    const data = value || this.valueBasic;
    this.typePlan.forEach((item, i) => {
      item.value = this.createTypePlan(data)[i].value;
      item.label = this.createTypePlan(data)[i].label;
    });
  }

  public setPlan(event: Event) {
    const data = event as CustomEvent;
    const { value } = data.detail;
    if (value) {
      this.planDataValue = value;
    }
  }

  public setAmount(event: Event) {
    const data = event as CustomEvent;
    const { value } = data.detail;

    if (Object.prototype.toString.call(data) === '[object String]') return;
    this.amount = value;
    const calc = Number((this.valueBasic / 3).toFixed(2)) * value;
    const result = (calc + this.valueBasic).toFixed(2);
    this.updateTypePlan(Number(result));
  }

  public buildData(): PagSeguro | void {
    const user = this.authService.getUser;
    if (
      user &&
      this.announcement.citie &&
      this.announcement.contact &&
      this.announcement.address
    ) {
      const { phone } = this.announcement.contact;
      const type = this.typePlan.filter(
        (item) => item.value === this.planDataValue
      )[0];
      const { name, email, slug, _csrf } = user;
      const description = this.amount > 1 ? `com ${this.amount} contas.` : '';
      const {
        zip_code,
        numberr,
        district,
        block,
        allotment,
        street,
        complement,
      } = this.announcement.address;
      const { city, uf } = this.announcement.citie;

      return {
        senderEmail: email,
        senderName: name,
        reference: slug,
        senderPhone: String(phone),

        itemId1: String(type.label),
        itemAmount1: type.value,
        itemDescription1: `Plano ${type.label.split('R$')[0]} ${description}`,
        itemQuantity1: 1,

        shippingType: '3',
        shippingAddressPostalCode: Number(zip_code),
        shippingAddressNumber: String(numberr),
        shippingAddressCity: String(city),
        shippingAddressState: String(uf),
        shippingAddressDistrict: String(district),
        shippingAddressCountry: 'BRA',
        shippingAddressStreet: `${street}, Qd ${block}, Lt ${allotment}`,
        shippingAddressComplement: String(complement),
        _csrf,
      };
    }
  }

  public close() {
    this.modalController.dismiss();
  }
}
