import { AxiosClient } from './axios/axios.service';
import { Address } from './services/address/address';
import { Domain } from './services/domain/domain';
import { Email } from './services/email/email';
import { Phone } from './services/phone/phone';

export class BaseVerify {
  private axiosClient: AxiosClient;
  phone: Phone;
  address: Address;
  domain: Domain;
  email: Email;
  constructor(token: string) {
    this.axiosClient = new AxiosClient(token);
    this.phone = new Phone(this.axiosClient);
    this.address = new Address(this.axiosClient);
    this.domain = new Domain(this.axiosClient);
    this.email = new Email(this.axiosClient);
  }
}
