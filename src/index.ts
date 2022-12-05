import { GraphQLClient } from 'graphql-request';
import { AxiosClient } from './axios/axios.service';
import { Address } from './services/address';
import { Domain } from './services/domain';
import { Email } from './services/email';
import { Phone } from './services/phone';

export class BaseVerify {
  private axiosClient: AxiosClient;
  private graphQLClient: GraphQLClient;
  phone: Phone;
  address: Address;
  domain: Domain;
  email: Email;

  constructor(token: string) {
    this.axiosClient = new AxiosClient(token);
    this.graphQLClient = new GraphQLClient(token);
    this.phone = new Phone(this.graphQLClient);
    this.address = new Address(this.axiosClient);
    this.domain = new Domain(this.axiosClient);
    this.email = new Email(this.axiosClient);
  }
}