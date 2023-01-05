export interface Total {
  pages: number;
  records: number;
}

export interface Metadata {
  page: number;
  limit: number;
  total: Total;
}
export interface Email {
  id: string;
  requesterId: string;
  identifier: string;
  email: string;
  tier: string;
  status: string;
  verifiedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
}
export interface EmailList {
  data: Email[];
  metadata: Metadata;
}
export interface Phone {
  id: string;
  requesterId: string;
  number: string;
  identifier: string;
  verificationType: string;
  tier: string;
  status: string;
  verifiedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
}
export interface PhoneList {
  data: Phone[];
  metadata: Metadata;
}
export interface PhoneCreateBulk {
  phone_phoneCreateMany: Phone[];
}
export interface DataForPhoneDelete {
  phone_phoneDelete: string;
}
export interface PhoneDelete {
  data: DataForPhoneDelete;
}

//DOMAINS

//domain create
export interface DomainCreate {
  txtRecord: string;
}

export interface DomainCreateData {
  domainCreateData: DomainCreate;
}

export interface DomainCreateResponse {
  data: DomainCreateData;
}

//domain create many

export interface DomainCreateDataMany {
  domain_domainCreateMany: DomainCreate[];
}

export interface DomainCreateManyResponse {
  data: DomainCreateDataMany;
}

//list domain
export interface Domain {
  id: string;
  requesterId: string;
  name: string;
  email: string;
  tier: string;
  status: string;
  verifiedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
}

export interface PaginatedDomain {
  data: Domain[];
  metadata: Metadata;
}

export interface PaginatedDomainData {
  paginatedDomain: PaginatedDomain;
}

export interface DomainListResponse {
  data: PaginatedDomainData;
}

// Single Domain

export interface SingleDomainData {
  domain: Domain;
}

export interface SingleDomainResponse {
  data: SingleDomainData;
}

// Domain delete

export interface DomainDeleteMessage {
  domain_domainDelete: string;
}

export interface DomainDeleteResponse {
  data: DomainDeleteMessage;
}

// Email Create

export interface EmailCreateData {
  email_emailCreate: Email;
}

export interface EmailCreateResponse {
  data: EmailCreateData;
}

// Create Many Email

export interface EmailCreateManyData {
  email_emailCreateMany: Email[];
}

export interface CreateManyDataResponse {
  data: EmailCreateManyData;
}

// Email List


export interface EmailListResonse {
  data: EmailList;
}

// Single Email

export interface SingleEmailData {
  email_emailShow: Email;
}

export interface SingleEmailResponse {
  data: SingleEmailData;
}

// Email Delete

export interface EmailDeleteData {
  email_emailDelete: string;
}

export interface EmailDeleteResponse {
  data: EmailDeleteData;
}

// Create Phone

export interface NumberCreateData {
  phone_phoneCreate: Phone;
}

export interface NumberCreateResponse {
  data: NumberCreateData;
}

// create Many Phone

export interface PhoneManyData {
  phone_phoneCreateMany: Phone[];
}

export interface PhoneManyResponse {
  data: PhoneManyData;
}

// Phone list

export interface PhoneList {
  metadata: Metadata;
  data: Phone[];
}

export interface PhoneListData {
  phone_phoneList: PhoneList;
}

export interface PhoneListResponse {
  data: PhoneListData;
}

// Single Phone

export interface SinglePhoneData {
  phone_phoneShow: Phone;
}

export interface SinglePhoneResponse {
  data: SinglePhoneData;
}

// Verify Phone

export interface PhoneVerifyData {
  phone_phoneVerify: string;
}

export interface PhoneVerifyResponse {
  data: PhoneVerifyData;
}

// Delete Phone

export interface PhoneDeleteData {
  phone_phoneDelete: string;
}

export interface PhoneDeleteResponse {
  data: PhoneDeleteData;
}

// Create Address

export interface Address {
  id: string;
  requesterId: string;
  identifier: string;
  customerName: string;
  tier: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  otp?: any;
  status: string;
  verifiedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
}

export interface AddressCreateData {
  address_addressCreate: Address;
}

export interface AddresscreateResponse {
  data: AddressCreateData;
}

// Delete Address

export interface AddressDeleteData {
  address_addressDelete: string;
}

export interface AddressDeleteResponse {
  data: AddressDeleteData;
}

//Address verify


  export interface AddressAddressVerify {
      message: string;
  }

  export interface AddressAddressVerifyData {
      address_addressVerify: AddressAddressVerify;
  }

  export interface AddressVerify {
      data: AddressAddressVerifyData;
  }

// Adress List 


   
    export interface AddressList {
        data: Address[];
        metadata: Metadata;
    }

    export interface AdressListData {
        address_addressList: AddressList;
    }

    export interface AdressListResponse {
        data: AdressListData;
    }



// Single Address 


   
    export interface SingleAddressData {
        address_addressShow: Address;
    }

    export interface SingleAddressResponse {
        data: SingleAddressData;
    }

