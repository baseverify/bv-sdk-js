import { AxiosClient } from './axios/axios.service';
import { VERIFCATION_TYPE } from './interfaces/create.interface';
import { Address } from './services/address';
import { Domain } from './services/domain';
import { Email } from './services/email';
import { Phone } from './services/phone';

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

const bv = new BaseVerify('YOUR_TOKEN');