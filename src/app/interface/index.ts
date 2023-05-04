/* eslint-disable @typescript-eslint/naming-convention */
import { Observable } from 'rxjs';

export interface User {
  readonly id: number;
  auth: boolean;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  plan?: Plan;
  password: string;
  isPassword: boolean;
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
  image?: Image | null;
  activateAccount?: ActivateAccount;
  updatedAt: string;
  createdAt: string;
  deletedAt: string;
  association: {
    readonly id: number;
  };
  _csrf: string;
  message: string;
  messages: Messages[];
  socialLogin: SocialLogin;
  requisitionLimit: RequisitionLimit;
  authSocial: AuthSocial;
}

export interface AuthSocial {
  userId: number;
  sid: null;
  token: string;
}

export interface RequisitionLimit {
  count: number;
  delay: string;
  desabled: boolean;
  time: string;
}

export interface ActivateAccount {
  readonly userId: number;
  activation: boolean;
  message: string;
}

export interface Image {
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
  order: (number | undefined)[];
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
export type SearchCategory =
  | 'name'
  | 'position'
  | 'state'
  | 'blockade'
  | 'createdAt'
  | 'updatedAt';

export type Search =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'name'
  | 'createdAt'
  | 'state'
  | 'blockade'
  | 'updatedAt';

export type SearchAnnouncement =
  | 'title'
  | 'createdAt'
  | 'state'
  | 'blockade'
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
  id: number;
  name: string;
  description: string;
  password: string;
  state: boolean;
  slug: string;
  position: number;
  updatedAt: string;
  createdAt: string;
  image: Required<
    Pick<Image & { catAdId: number }, 'catAdId' | '_csrf' | 'filename' | 'url'>
  >;
  message: string;
  _csrf: string;
  order: (number | undefined)[];
  // announcement?: Announcement[];
  associationId?: number;
}
/************************************** */

export interface Address {
  id?: number;
  announcementId: number | null;
  allotment: string | null;
  block: string | null;
  complement: string | null;
  district: string | null;
  numberr: number | null;
  street: string | null;
  message?: string | null;
  zip_code: string | number | null;
  _csrf?: string | null;
}
export interface Citie {
  id?: number;
  announcementId?: number;
  city: string | null;
  readonly uf: 'GO';
  message?: string;
  _csrf?: string;
}

export interface Contact {
  id?: number;
  announcementId: number;
  mobilePhone: number | null;
  phone: number | null;
  whatsapp: number | null;
  message?: string;
  _csrf?: string;
}
export interface Coordinate {
  id?: number;
  announcementId: number;
  latitude: number;
  longitude: number;
  message?: string;
  _csrf?: string;
}
export interface Like {
  id?: number;
  announcementId?: number;
  not: number;
  yes: number;
  message?: string;
  _csrf?: string;
}

export interface WorkDays {
  id?: number;
  announcementId?: number;
  sunday: WorkDaysFields;
  monday: WorkDaysFields;
  tuesday: WorkDaysFields;
  wednesday: WorkDaysFields;
  thursday: WorkDaysFields;
  friday: WorkDaysFields;
  saturday: WorkDaysFields;
  message?: string;
  _csrf?: string;
}

export interface WorkDaysFields {
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
  order?: (number | undefined)[];
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
  coordinate?: Coordinate | null;
  workDays?: WorkDays | null;
  socialNetwork?: SocialNetwork | null;
  like?: Like | null;
  pageView?: PagView | null;
  contact?: Contact | null;
  address?: Address | null;
  citie?: Citie | null;
  galery?: Galery[];
  categoryAnnouncement?: CategoryAnnouncement;
  announcement?: { user: User };
  messages?: Messages[];
  plan?: Plan;
  category?: Category;
  user?: User;
  authSocial?: AuthSocial;
  price?: Price;
}
export interface Price {
  announcementId?: number;
  value?: string;
}
export interface PagView {
  announcementId?: number;
  views?: number;
}
export interface CategoryAnnouncement {
  id: number;
  announcementId?: number;
  catAdId?: number;
  _csrf?: string;
  message?: string;
  category?: Category;
}

export interface SocialNetwork {
  id?: number;
  announcementId: number;
  facebook: string;
  instagran: string;
  message?: string;
  _csrf?: string;
}

export interface WorkDayFields {
  start: string | null;
  startInterval: string | null;
  endInterval: string | null;
  end: string | null;
}

export type DaysOfTheWeek =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
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
  password?: string;
  message?: string;
  _csrf?: string;
}

export interface Messages {
  id?: number;
  userId: number;
  announcementId: number;
  description: string;
  type: 'info' | 'warning' | 'success' | 'danger';
  response: boolean;
  sender: number;
  userSender: Required<Pick<User, 'slug' | 'name' | 'email' | 'image'>>;
  message?: string;
  password?: string;
  _csrf?: string;
}

export interface DataUpload {
  _csrf?: string;
  id: number;
}

export interface City {
  'São Luiz dos Montes Belos': number;
  Firminópolis: number;
  Aurilândia: number;
  Sanclerlândia: number;
  Turvânia: number;
  'Córrego do Ouro': number;
}

export type AnnouncementRoute = 'WorkDays' | 'announcement' | 'galery';
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
  | 'messages'
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
