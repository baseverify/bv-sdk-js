export enum VERIFCATION_TYPE {
    OTP = 'OTP',
}

export interface CreatePhone {
    phone: string;
    verificationType: VERIFCATION_TYPE;
    redirectUri: string;
}

export interface CreateManyPhones {
    phones: CreatePhone[];
}

export interface VerifyPhone {
    number: string,
    otp: string,
}

export interface CreateAddress {
    customerName: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    country: string;
}

export interface VerifyAddress {
    identifier: string;
}

export interface CreateDomain {
    domain: string;
    email: string;
}

export interface createManyDomain {
    domain: CreateDomain[]
}

export interface CreateEmail {
    email: string,
    redirectUri: string,
}

export interface CreateManyEmails {
    emails: CreateEmail[];
}

export interface DeleteEmail {
    email: string;
}

export interface VerifyEmail {
    hash: string;
    email: string;
}