import { Observable } from 'rxjs';

export interface User {
  readonly id: number;
  auth: boolean;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  plan: Plan;
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
  userMessage: UserMessage[];
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
  readonly announcementId?: number;
  filename?: string;
  url?: string;
  position?: number;
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
  upload: (formData: FormData, url?: string) => Observable<any>;
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
  id?: number;
  announcementId?: number;
  allotment?: string;
  block?: string;
  complement?: string;
  district?: string;
  numberr?: number;
  street?: string;
  message?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  zip_code?: string;
  _csrf?: string;
}
export interface Citie {
  id?: number;
  announcementId?: number;
  city: string;
  readonly uf: 'GO';
  message?: string;
  _csrf?: string;
}

export interface Contact {
  id?: number;
  announcementId?: number;
  mobilePhone?: string;
  phone?: string;
  whatsapp?: string;
  message?: string;
  _csrf?: string;
}
export interface Coordinate {
  id?: number;
  announcementId?: number;
  latitude?: number;
  longitude?: number;
  message?: string;
  _csrf?: string;
}
export interface Like {
  id?: number;
  announcementId?: number;
  not?: number;
  yes?: number;
  message?: string;
}

export interface OpeningHour {
  id?: number;
  announcementId?: number;
  sunday: FieldsOpeningHour;
  monday: FieldsOpeningHour;
  third: FieldsOpeningHour;
  fourth: FieldsOpeningHour;
  thursday: FieldsOpeningHour;
  friday: FieldsOpeningHour;
  saturday: FieldsOpeningHour;
  message?: string;
  _csrf?: string;
}

export interface FieldsOpeningHour {
  start: string;
  startInterval: string;
  endInterval: string;
  end: string;
}

export interface Announcement {
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
  categoryAnnouncement?: CategoryAnnouncement;
}

export interface CategoryAnnouncement {
  id: number;
  announcementId: number;
  catAdId: number;
  _csrf?: string;
  message?: string;
  category?: Category;
}

export interface SocialNetwork {
  id?: number;
  announcementId?: number;
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

export type DayOfTheWeekPT =
  | 'segunda'
  | 'terca'
  | 'quarta'
  | 'quinta'
  | 'sexta'
  | 'sabado'
  | 'domingo';

export interface Plan {
  end: string;
  start: string;
  period: '03' | '06' | '12';
  type: 'free' | 'basic' | 'special';
  userId: number;
  message?: string;
  _csrf?: string;
}

export interface UserMessage {
  id: number;
  description: string;
  type: 'info' | 'warning' | 'success' | 'danger';
  userId: number;
  message?: string;
  response: boolean;
  sender: number;
  userSender: Omit<User, UserSender>;
  _csrf?: string;
}

export interface DataUpload {
  _csrf?: string;
  id: number;
}

export type AnnouncementRoute = 'OpeningHours' | 'announcement' | 'galery';
export type UserSender =
  | 'updatedAt'
  | 'deletedAt'
  | 'firstName'
  | 'lastName'
  | 'isPassword'
  | 'password'
  | 'state'
  | 'message'
  | 'id'
  | 'blockade'
  | 'userMessage'
  | '_csrf'
  | 'plan'
  | 'level'
  | 'active'
  | 'activateAccount'
  | 'association'
  | 'auth'
  | 'token'
  | 'key'
  | 'authState'
  | 'passwordConfirmation'
  | 'desabled'
  | 'requisitionLimit'
  | 'stayConnected'
  | 'createdAt'
  | 'socialLogin';
