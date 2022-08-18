import { STATUS } from "./create.interface";

export interface Requester {
    name: string;
    logo: string;
}

export interface Total {
    pages: number;
    records: number;
}
export interface Metadata {
    page: number;
    limit: number;
    total: Total;
}

export interface GetAllPhone {
    id: string;
    requesterId: string;
    requester: Requester;
    identifier: string;
    verificationType: string;
    number: string;
    status: STATUS;
    verifiedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface GetAllPhoneRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: {
        items: GetAllPhone[];
        metadata: Metadata;
    };
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
    status: STATUS;
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
    data: {
        items: CreateManyPhone[];
        metadata: Metadata;
    };
}

export interface DeletePhoneRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: string;
}

export interface EmailData {
    id: string;
    requesterId: string;
    requester: Requester;
    identifier: string;
    email: string;
    status: STATUS;
    verifiedAt?: any;
    createdAt: Date;
    updatedAt: Date;
    deleted: boolean;
}

export interface CreateManyEmailsData {
    message: string;
    data: EmailData;
}

export interface CreateManyEmailsRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: {
        items: CreateManyEmailsData[];
        metadata: Metadata;
    };
}

export interface CreateEmailRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: EmailData;
}

export interface GetEmailsRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: {
        items: EmailData[];
        metadata: Metadata;
    };
}

export interface GetEmailRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: EmailData;
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
    status: STATUS;
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

export interface DomainType {
    id: string;
    requesterId: string;
    requester: Requester;
    name: string;
    email: string;
    status: STATUS;
    verifiedAt?: any;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface GetManyDomainRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: {
        items: DomainType[];
        metadata: Metadata;
    };
}

export interface GetDomainRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: DomainType;
}

export interface DeleteDomainRootObject {
    status: boolean;
    statusCode: number;
    message: string;
    data: string;
}
