export interface PagSeguro {
  // paymentMode: string;
  paymentMethod: 'creditCard' | 'boleto';
  // receiverEmail: string;
  // currency: 'BRL';s
  // extraAmount: string;

  // notificationURL: string;

  // senderCPF?: number;

  senderHash: string;
  // shippingAddressRequired: boolean;
  // shippingCost: string;
  creditCardToken: string;
  installmentQuantity: number;
  installmentValue: string;
  // noInterestInstallmentQuantity: number;
  creditCardHolderName: string;
  creditCardHolderCPF: number;
  // creditCardHolderBirthDate: string;
  // creditCardHolderAreaCode: number;
  // creditCardHolderPhone: number;
  // billingAddressStreet: string;
  // billingAddressNumber: string;
  // billingAddressComplement: string;
  // billingAddressDistrict: string;
  // billingAddressPostalCode: number;
  // billingAddressCity: string;
  // billingAddressState: string;
  // billingAddressCountry: 'BRL';

  itemId1: string;
  itemDescription1: string; // s'PRODUTO 1'
  itemAmount1: string; //Sempre com decimais
  itemQuantity1: number;
  itemWeight1?: string;
  // reference: string; // 'REF1234'
  // senderName: string; // 'NOME_DO_SEU_CLIENTE'
  // senderAreaCode: number;
  // senderPhone: number; // 'LEFONE'
  // senderEmail: string; // 'EMAIL_DO_SEU_CLIENTE'
  // shippingType?: string; // Formas de envio, consulte a documentacao
  // shippingAddressStreet?: string; // 'ONDE_O_TOP_MORA'
  // shippingAddressNumber?: string; //     'NUMEROZIN'
  // shippingAddressComplement?: string; // 'COMPLEMENTO';
  // shippingAddressDistrict?: string; // 'DECIMO_TERCEIRO_DISTRITO';
  // shippingAddressPostalCode?: number; // 'CEP';
  // shippingAddressCity?: string; // 'CIDADE';
  // shippingAddressState?: string; // 'ESTADO';
  // shippingAddressCountry?: string; // 'BRA';
  _csrf: string;
  code?: string;
}
