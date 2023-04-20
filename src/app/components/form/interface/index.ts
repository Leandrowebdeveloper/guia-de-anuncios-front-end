export interface InputName {
  id: number | null;
  firstName: Attributes;
  name: Attributes;
  title: Attributes;
  description: Attributes;
  lastName: Attributes;
  email: Attributes;
  level: Attributes;
  type: Attributes | undefined;
  period: Attributes;
  password: Attributes;
  passwordCurrent: Attributes;
  passwordConfirmation: Attributes;
  stayConnected: Attributes;
  terms: Attributes;
  allotment: Attributes;
  block: Attributes;
  blockade: Attributes;
  complement: Attributes;
  district: Attributes;
  numberr: Attributes;
  street: Attributes;
  mobilePhone: Attributes;
  phone: Attributes;
  whatsapp: Attributes;
  facebook: Attributes;
  instagran: Attributes;
  city: Attributes;
  response: Attributes;
  uf: Attributes;
  zip_code: Attributes;
  _csrf?: Attributes | null;
  price: Attributes;
}

export interface Attributes {
  name: string;
  label: string;
  placeholder: string;
  actionLabel: string;
  type: string;
  readonly: boolean;
  msg: Message;
}

export interface Message {
  invalid?: string | null;
  empty?: string | null;
  min?: string | null;
  max?: string | null;
  mustMatch?: string | null;
}
