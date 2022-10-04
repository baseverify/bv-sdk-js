export enum VERIFCATION_TYPE {
  OTP = 'OTP',
  TOKEN = 'TOKEN',
}

export enum STATUS {
  VERIFIED = 'VERIFIED',
  UNVERIFIED = 'UNVERIFIED',
  INVALID = 'INVALID',
}

export enum RECORD_STATUS {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  INVALID = 'INVALID',
}

export interface Pagination {
  page: number;
  limit: number;
}

export enum ADDRESS_VERIFICATION_TYPE {
  EXPRESS='EXPRESS',
  POSTCARD='POSTCARD'
};

export interface Filter {
  status: RECORD_STATUS;
}

export interface CreatePhone {
  number: string;
  verificationType: VERIFCATION_TYPE;
  redirectUri?: string;
}

export interface CreateManyPhones {
  phone: CreatePhone[];
}

export interface VerifyPhone {
  number: string;
  otp: string;
}

export interface CreateAddress {
  customerName: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  type: ADDRESS_VERIFICATION_TYPE,
  zipCode: string;
}

export interface VerifyAddress {
  identifier: string;
  otp: string;
}

export interface CreateDomain {
  domain: string;
  email: string;
}

export interface createManyDomain {
  domain: CreateDomain[];
}

export interface CreateEmail {
  email: string;
  redirectUri: string;
}

export interface CreateManyEmails {
  email: CreateEmail[];
}

export interface DeleteEmail {
  email: string;
}

export interface VerifyEmail {
  hash: string;
  email: string;
}
