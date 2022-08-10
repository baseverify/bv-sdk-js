
export interface Requester {
    name: string;
    logo: string;
}

export interface GetAllPhone {
    id: string;
    requesterId: string;
    requester: Requester;
    identifier: string;
    verificationType: string;
    number: string;
    verified: boolean;
    verifiedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface GetAllPhoneRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: GetAllPhone[];
}

export interface CreatePhoneRootObject {
    status: boolean;
    statusCode: number;
    message: string;
}

export interface GetPhone {
    id: string;
    requesterId: string;
    requester: Requester;
    identifier: string;
    verificationType: string;
    number: string;
    verified: boolean;
    verifiedAt?: any;
    createdAt: Date;
    updatedAt: Date;
}

export interface GetPhoneRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: GetPhone;
}

export interface CreateManyPhone {
    message: string;
}

export interface CreateManyPhoneRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: CreateManyPhone[];
}

export interface DeletePhoneRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: string;
}

export interface Email {
    id: string;
    requesterId: string;
    requester: Requester;
    identifier: string;
    email: string;
    verified: boolean;
    verifiedAt?: any;
    createdAt: Date;
    updatedAt: Date;
    deleted: boolean;
}

export interface CreateManyEmailsData {
    message: string;
    data: Email;
}

export interface CreateManyEmailsRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: CreateManyEmailsData[];
}

export interface CreateEmailRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: Email;
}

export interface GetEmailsRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: Email[];
}

export interface GetEmailRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: Email;
}

export interface DeleteEmailRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: string;
}
export interface AddressType {
    id: string;
    requesterId: string;
    identifier: string;
    requesterName: string;
    customerName: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    otp: string;
    verified: boolean;
    verifiedAt?: any;
    createdAt: Date;
    updatedAt: Date;
    deleted: boolean;
}

export interface AddressData {
    data: AddressType;
    otp: string;
}

export interface CreateAddressRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: AddressData;
}

export interface VerifyAddressRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: AddressType;
}


export interface GetSingleAddressRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: AddressType;
}

export interface GetManyRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: AddressType[];
}

export interface DomainCreateMany {
    message: string;
    data: string;
}

export interface DomainCreateManyRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: DomainCreateMany[];
}

export interface CreateDomainRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: string;
}

export interface Domain {
    id: string;
    requesterId: string;
    requester: Requester;
    name: string;
    email: string;
    verified: boolean;
    verifiedAt?: any;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface GetManyDomainRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: Domain[];
}


export interface GetDomainRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: Domain;
}

export interface DeleteDomainRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: string;
}