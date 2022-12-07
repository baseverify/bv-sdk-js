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

// export enum STATUS {
//   VERIFIED = 'VERIFIED',
//   UNVERIFIED = 'UNVERIFIED',
//   INVALID = 'INVALID',
// }

// export enum RECORD_STATUS {
//   PENDING = 'PENDING',
//   VERIFIED = 'VERIFIED',
//   INVALID = 'INVALID',
// }

// export interface Pagination {
//   page: number;
//   limit: number;
// }

// export enum ADDRESS_VERIFICATION_TYPE {
//   EXPRESS='EXPRESS',
//   POSTCARD='POSTCARD'
// };

// export interface Filter {
//   status: RECORD_STATUS;
// }

// export interface CreatePhone {
//   number: string;
//   verificationType: VERIFCATION_TYPE;
//   redirectUri?: string;
// }

// export interface CreateManyPhones {
//   phone: CreatePhone[];
// }

// export interface VerifyPhone {
//   number: string;
//   otp: string;
// }

// export interface CreateAddress {
//   customerName: string;
//   address: string;
//   address2: string;
//   city: string;
//   state: string;
//   country: string;
//   type: ADDRESS_VERIFICATION_TYPE,
//   zipCode: string;
// }

// export interface VerifyAddress {
//   identifier: string;
//   otp: string;
// }

// export interface CreateDomain {
//   domain: string;
//   email: string;
// }

// export interface createManyDomain {
//   domain: CreateDomain[];
// }

// export interface CreateEmail {
//   email: string;
//   redirectUri: string;
// }

// export interface CreateManyEmails {
//   email: CreateEmail[];
// }

// export interface DeleteEmail {
//   email: string;
// }

// export interface VerifyEmail {
//   hash: string;
//   email: string;
// }
