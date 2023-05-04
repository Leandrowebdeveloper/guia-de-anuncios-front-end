export interface Root {
  error: boolean;
  paymentMethods: PaymentMethods;
}

export interface PaymentMethods {
  BOLETO: Boleto;
  ONLINE_DEBIT: OnlineDebit;
  CREDIT_CARD: CreditCard;
}

export interface Boleto {
  name: string;
  options: Options;
  code: number;
}

export interface Options {
  BOLETO: Boleto2;
}

export interface Boleto2 {
  name: string;
  displayName: string;
  status: string;
  code: number;
  images: Images;
}

export interface Images {
  SMALL: Small;
  MEDIUM: Medium;
}

export interface Small {
  size: string;
  path: string;
}

export interface Medium {
  size: string;
  path: string;
}

export interface OnlineDebit {
  name: string;
  options: Options2;
  code: number;
}

export interface Options2 {
  BANCO_BRASIL: BancoBrasil;
}

export interface BancoBrasil {
  name: string;
  displayName: string;
  status: string;
  code: number;
  images: Images2;
}

export interface Images2 {
  SMALL: Small2;
  MEDIUM: Medium2;
}

export interface Small2 {
  size: string;
  path: string;
}

export interface Medium2 {
  size: string;
  path: string;
}

export interface CreditCard {
  name: string;
  options: Options3;
  code: number;
}

export interface Options3 {
  [key: string]: Operator;
}

export interface Operator {
  name: string;
  displayName: string;
  status: string;
  code: number;
  images: Images3;
}

export interface Images3 {
  SMALL: Small3;
  MEDIUM: Medium3;
}

export interface Small3 {
  size: string;
  path: string;
}

export interface Medium3 {
  size: string;
  path: string;
}

export interface RootBrand {
  brand: Brand;
}

export interface Brand {
  name: string;
  bin: number;
  cvvSize: number;
  expirable: boolean;
  validationAlgorithm: string;
}

export interface RootInstallments {
  error: boolean;
  installments: { [key: string]: AttrOperator[] };
}

export interface AttrOperator {
  quantity: number;
  totalAmount: number;
  installmentAmount: number;
  interestFree: boolean;
}

export interface CreditCardToken {
  card: { token: string };
}

export interface FormCard {
  card_number: string;
  card_month: string;
  card_year: string;
  card_cvv: string;
  creditCardHolderName: string;
  card_installment: string;
  installmentValue: number;
  installmentTotal: number;
  senderHash: string;
  creditCardToken: string;
  installmentQuantity: number;
}
