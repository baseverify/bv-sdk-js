import { AxiosClient } from '../../axios/axios.service';
import {
  CreateEmail,
  CreateManyEmails,
  CreateManyPhones,
  VerifyEmail,
  VerifyPhone,
} from '../../interfaces/create.interface';
import { CreateManyEmailsData } from '../../interfaces/response.interface';

export class Email {
  constructor(private axiosClient: AxiosClient) {}

  async create(createEmail: CreateEmail): Promise<any> {
    try {
      const response = await this.axiosClient.post('/email', createEmail);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async createMany(createManyEmails: CreateManyEmails): Promise<CreateManyEmailsData> {
    try {
      const response = await this.axiosClient.post('/email/create-many', createManyEmails);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async list(): Promise<Email[]> {
    try {
      const response = await this.axiosClient.get('/email');
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async get(id: string): Promise<Email> {
    try {
      const response = await this.axiosClient.get(`/email/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async verify(verifyEmail: VerifyEmail): Promise<any> {
    try {
      const response = await this.axiosClient.patch('/email/verify', verifyEmail);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  //TODO: define Delete Interface
  async delete(id: string): Promise<string> {
    try {
      const response = await this.axiosClient.delete(`/email/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
