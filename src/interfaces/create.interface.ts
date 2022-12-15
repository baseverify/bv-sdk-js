export enum VERIFCATION_TYPE {
  OTP = 'OTP',
  TOKEN = 'TOKEN',
}

export enum REQUEST_STATUS {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  INVALID = 'INVALID',
}

export enum RECORD_STATUS {
  PENDING = 'PENDING',
  READY = 'READY',
  PRINTING = 'PRINTING',
  PROCESSED_FOR_DELIVERY = 'PROCESSED_FOR_DELIVERY',
  COMPLETED = 'COMPLETED',
  VERIFIED = 'VERIFIED',
  INVALID = 'INVALID',
  CANCELLED = 'CANCELLED',
}

export enum ADDRESS_VERIFICATION_TYPE {
  EXPRESS='EXPRESS',
  POSTCARD='POSTCARD'
};

export interface Filter {
  status: REQUEST_STATUS;
}

export interface Pagination {
  limit: number;
  page: number;
}

export interface FindManyPhonesDto {
  filter?: Filter;
  pagination?: Pagination;
}

export interface CreatePhoneDto {
  number: string;
  redirectUri?: string;
  verificationType: VERIFCATION_TYPE;
}

export interface CreateManyPhoneDto {
  phone: CreatePhoneDto[];
}

export interface VerifyPhoneDto {
  number: string;
  otp: string;
}

export interface DeletePhoneDto {
  id: string;
}

export interface CreateAddressDto {
  address: string;
  address2: string;
  city: string;
  country: string;
  customerName: string;
  redirectUri?: string;
  state: string;
  zipCode: string;
}
export interface AddressFilter {
  status: RECORD_STATUS;
}

export interface FindManyAddressDto {
  filter?: AddressFilter;
  pagination?: Pagination;
}
export interface RemoveAddressDto {
  id: string;
}

export interface CreateEmailDto {
  email: string;
  redirectUri?: string;
}

export interface CreateManyEmailDto {
  email: CreateEmailDto[];
}

export interface FindManyEmailDto {
  filter?: Filter;
  pagination?: Pagination;
}

export interface DeleteEmailDto {
  email: string;
}

export interface CreateDomainDto {
  domain: string;
  email?: string;
}

export interface CreateManyDomainDto {
  domain: CreateDomainDto[];
}

  export interface FindManyDomainDto {
      filter: Filter;
      pagination: Pagination;
  }

  export interface DeleteDomainDto {
    id: string;
}