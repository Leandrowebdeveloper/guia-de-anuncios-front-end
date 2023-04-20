export interface PagSeguro {
  itemId1: string;
  itemDescription1: string; // s'PRODUTO 1'
  itemAmount1: string; //Sempre com decimais
  itemQuantity1: number;
  itemWeight1?: string;
  reference: string; // 'REF1234'
  senderName: string; // 'NOME_DO_SEU_CLIENTE'
  senderAreaCode?: string;
  senderPhone: string; // 'LEFONE'
  senderEmail: string; // 'EMAIL_DO_SEU_CLIENTE'
  shippingType?: string; // Formas de envio, consulte a documentacao
  shippingAddressStreet?: string; // 'ONDE_O_TOP_MORA'
  shippingAddressNumber?: string; //     'NUMEROZIN'
  shippingAddressComplement?: string; // 'COMPLEMENTO';
  shippingAddressDistrict?: string; // 'DECIMO_TERCEIRO_DISTRITO';
  shippingAddressPostalCode?: number; // 'CEP';
  shippingAddressCity?: string; // 'CIDADE';
  shippingAddressState?: string; // 'ESTADO';
  shippingAddressCountry?: string; // 'BRA';
  _csrf: string;
}
