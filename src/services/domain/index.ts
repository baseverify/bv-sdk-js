import { AxiosClient } from '../../axios/axios.service';
import { CreateDomain, createManyDomain } from '../../interfaces/create.interface';
import { DomainCreateMany, DomainType } from '../../interfaces/response.interface';

export class Domain {
  constructor(private axiosClient: AxiosClient) {}

  async create(createDomain: CreateDomain): Promise<String> {
    try {
      const response = await this.axiosClient.post('/domain', createDomain);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async createMany(createManyDomains: createManyDomain): Promise<DomainCreateMany[]> {
    try {
      const response = await this.axiosClient.post('/domain/create-many', createManyDomains);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async list(): Promise<DomainType[]> {
    try {
      const response = await this.axiosClient.get('/domain');
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async get(id: string): Promise<DomainType> {
    try {
      const response = await this.axiosClient.get(`/domain/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async delete(id: string): Promise<String> {
    try {
      const response = await this.axiosClient.delete(`/domain/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
