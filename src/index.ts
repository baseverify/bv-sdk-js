import { BaseVerifyGqlClient } from './graphql-client/gql-client';
import { Address } from './services/address';
import { Domain } from './services/domain';
import { Email } from './services/email';
import { Phone } from './services/phone';

export class BaseVerify {
  private graphQLClient: BaseVerifyGqlClient;
  phone: Phone;
  address: Address;
  domain: Domain;
  email: Email;

  constructor(token: string) {
    this.graphQLClient = new BaseVerifyGqlClient(token);
    this.phone = new Phone(this.graphQLClient);
    this.address = new Address(this.graphQLClient);
    this.domain = new Domain(this.graphQLClient);
    this.email = new Email(this.graphQLClient);
  }
}