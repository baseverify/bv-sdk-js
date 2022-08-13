import { AxiosClient } from '../../axios/axios.service';
import { CreateManyPhones, CreatePhone, VerifyPhone } from '../../interfaces/create.interface';
import { GetAllPhone, GetPhone } from '../../interfaces/response.interface';

export class Phone {
  constructor(private axiosClient: AxiosClient) {}

  async create(createPhone: CreatePhone): Promise<any> {
    try {
      const response = await this.axiosClient.post('/phone', createPhone);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async createMany(createManyPhones: CreateManyPhones): Promise<any> {
    try {
      const response = await this.axiosClient.post('/phone/create-many', createManyPhones);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async list(): Promise<GetAllPhone> {
    try {
      const response = await this.axiosClient.get('/phone');
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async get(id: string): Promise<GetPhone> {
    try {
      const response = await this.axiosClient.get(`/phone/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async verify(verifyPhone: VerifyPhone): Promise<any> {
    try {
      const response = await this.axiosClient.patch('/phone/verify', verifyPhone);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async delete(id: string): Promise<any> {
    try {
      const response = await this.axiosClient.delete(`/phone/${id}`);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
