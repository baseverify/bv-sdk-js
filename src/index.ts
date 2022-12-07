import { GraphQLClient } from 'graphql-request';
import { Address } from './services/address';
import { Domain } from './services/domain';
import { Email } from './services/email';
import { Phone } from './services/phone';

export class BaseVerify {
  private graphQLClient: GraphQLClient;
  phone: Phone;
  address: Address;
  domain: Domain;
  email: Email;

  constructor(token: string) {
    this.graphQLClient = new GraphQLClient(token);
    this.phone = new Phone(this.graphQLClient);
    this.address = new Address(this.graphQLClient);
    this.domain = new Domain(this.graphQLClient);
    this.email = new Email(this.graphQLClient);
  }
}