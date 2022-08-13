import { AxiosClient } from '../../axios/axios.service';
import { CreateAddress, VerifyAddress } from '../../interfaces/create.interface';
import { AddressData, AddressType } from '../../interfaces/response.interface';

export class Address {
  constructor(private axiosClient: AxiosClient) {}

  async create(createAddress: CreateAddress): Promise<AddressData> {
    try {
      const response = await this.axiosClient.post('/address', createAddress);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async list(): Promise<AddressType[]> {
    try {
      const response = await this.axiosClient.get('/address');
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async get(id: string): Promise<AddressType> {
    try {
      const response = await this.axiosClient.get(`/address/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async verify(verifyAddress: VerifyAddress): Promise<AddressType> {
    try {
      const response = await this.axiosClient.patch('/address/verify', verifyAddress);
      return response.data;
    } catch (error) {
      throw new Error(String(error));
    }
  }
}
