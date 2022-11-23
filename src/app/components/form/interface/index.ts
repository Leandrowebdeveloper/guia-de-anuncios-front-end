export interface InputName {
  id: number;
  firstName: Attributes;
  name: Attributes;
  title: Attributes;
  description: Attributes;
  lastName: Attributes;
  email: Attributes;
  level: Attributes;
  plan: Attributes;
  password: Attributes;
  passwordCurrent: Attributes;
  passwordConfirmation: Attributes;
  stayConnected: Attributes;
  terms: Attributes;
  allotment: Attributes;
  block: Attributes;
  complement: Attributes;
  district: Attributes;
  number_: Attributes;
  street: Attributes;
  mobilePhone: Attributes;
  phone: Attributes;
  whatsapp: Attributes;
  facebook: Attributes;
  instagran: Attributes;
  city: Attributes;
  uf: Attributes;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  zip_code: Attributes;
  _csrf: Attributes;
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
  invalid?: string;
  empty?: string;
  min?: string;
  max?: string;
  mustMatch?: string;
}
