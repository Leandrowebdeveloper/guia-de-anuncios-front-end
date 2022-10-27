import { Observable } from 'rxjs';

export interface User {
  readonly id: number;
  auth: boolean;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  plan: 'free' | 'basic' | 'special';
  password: string;
  isPassword?: boolean;
  level: '1' | '2';
  slug: string;
  authState: boolean;
  token: string;
  active: boolean;
  state: boolean;
  desabled: boolean;
  key: string;
  blockade: boolean;
  passwordConfirmation?: string;
  stayConnected?: boolean;
  image: Image;
  activateAccount?: ActivateAccount;
  updatedAt: string;
  createdAt: string;
  deletedAt: string;
  association: {
    readonly id: number;
  };
  _csrf: string;
  message: string;
  socialLogin: SocialLogin;
  requisitionLimit: RequisitionLimit;
}

export interface RequisitionLimit {
  count: number;
  delay: string;
  desabled: boolean;
  time: string;
}

export interface ActivateAccount {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly userId: number;
  activation: boolean;
  message: string;
}

export interface Image {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly userId: number;
  filename: string;
  url: string;
  _csrf: string;
}

export interface Galery {
  readonly id?: number;
  readonly advertId?: number;
  filename?: string;
  url?: string;
  message?: string;
  order: number[];
  _csrf?: string;
}

export interface Breadcrumb {
  label: string;
  link: string;
}

// Interface de funções
export interface Http<T> {
  index: () => Observable<T[]>;
  findAll: (url?: string) => Observable<T>;
  create: (data: T, url?: string) => Observable<T>;
  update: (data: T) => Observable<T | number[]>;
  find: (id: string | number) => Observable<T>;
  patch: (data: T, url?: string) => Observable<T | number[]>;
  destroy: (data: T, url: string) => Observable<T | number>;
  upload: (url: string, formData: FormData) => Observable<any>;
}

export interface LocalStorage {
  create: (key: string, value: string | object) => Promise<any>;
  update: (key: string, value: string | object) => Promise<any>;
  find: (key: string) => Promise<any>;
  destroy: (key: string) => Promise<any>;
}

export interface LocalFile {
  name: string;
  path: string;
  data: string;
}

export interface HttpResponse {
  headers: Headers;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  type: number;
  body: Body;
}

export type UserSearch =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'name'
  | 'createdAt'
  | 'state'
  | 'blockade'
  | 'updatedAt';

export type CategorySearch =
  | 'name'
  | 'orderName'
  | 'state'
  | 'position'
  | 'createdAt'
  | 'updatedAt';

export interface SocialLogin {
  sid: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  slug?: string;
  token: string;
  image: {
    filename: string;
  };
  _csrf: string;
}

export interface BuildSocialLogin {
  id: string;
  name: string;
  email: string;
  imageUrl?: string;
  picture?: {
    data: {
      url: string;
    };
  };
}

export interface Facebook {
  id: string;
  name: string;
  email: string;
  picture: {
    data: {
      url: string;
    };
  };
}

export interface Google {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
}
export interface Category {
  id?: number;
  name?: string;
  description?: string;
  password?: string;
  state?: boolean;
  slug?: string;
  position?: number;
  updatedAt?: string;
  createdAt?: string;
  image?: Image;
  message?: string;
  _csrf?: string;
  order?: number[];
}
/************************************** */

export interface Address {
  advertId?: number;
  allotment?: string;
  block?: string;
  complement?: string;
  district?: string;
  number_?: number;
  street?: string;
  message?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  zip_code?: string;
  _csrf?: string;
}
export interface Citie {
  advertId?: number;
  city: string;
  readonly uf: 'GO';
  message?: string;
  _csrf?: string;
}

export interface Contact {
  advertId?: number;
  mobilePhone?: string;
  phone?: string;
  whatsapp?: string;
  message?: string;
  _csrf?: string;
}
export interface Coordinate {
  advertId?: number;
  latitude?: number;
  longitude?: number;
  message?: string;
  _csrf?: string;
}
export interface Like {
  advertId?: number;
  not?: number;
  yes?: number;
  message?: string;
}

export interface OpeningHour {
  advertId?: number;
  sunday?: FieldsOpeningHour | null;
  monday?: FieldsOpeningHour | null;
  third?: FieldsOpeningHour | null;
  fourth?: FieldsOpeningHour | null;
  thursday?: FieldsOpeningHour | null;
  friday?: FieldsOpeningHour | null;
  saturday?: FieldsOpeningHour | null;
  message?: string;
  _csrf?: string;
}

export interface FieldsOpeningHour {
  start: string;
  startInterval: string;
  endInterval: string;
  end: string;
}

export interface Advert {
  id?: number;
  userId?: number;
  title?: string;
  description?: string;
  order?: number[];
  position?: number;
  blockade?: boolean;
  slug?: string;
  state?: boolean;
  message?: string;
  updatedAt?: string;
  createdAt?: string;
  deletedAt?: string;
  _csrf?: string;
  level?: '1' | '2' | '3';
  coordinate?: Coordinate;
  openingHour?: OpeningHour;
  socialNetwork?: SocialNetwork;
  like?: Like;
  contact?: Contact;
  address?: Address;
  citie?: Citie;
  galery?: Galery[];
  categoryAdvert?: CategoryAdvert;
}

export interface CategoryAdvert {
  id: number;
  advertId: number;
  catAdId: number;
  _csrf?: string;
  message?: string;
}

export interface SocialNetwork {
  advertId?: number;
  facebook?: string;
  instagran?: string;
  message?: string;
  _csrf: string;
}

export interface OpeningHourFields {
  start: string | null;
  startInterval: string | null;
  endInterval: string | null;
  end: string | null;
}

export type DaysOfTheWeek =
  | 'sunday'
  | 'monday'
  | 'third'
  | 'fourth'
  | 'thursday'
  | 'friday'
  | 'saturday';
