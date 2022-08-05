import { AxiosClient } from "../../axios/axios.service";
import { CreateDomain, createManyDomain } from "../../interfaces/phone.interface";

const API_URL: string = "http://localhost:3000/v1";

export class Domain {
    constructor(
        private axiosClient: AxiosClient,
    ) { }

    async create(createDomain: CreateDomain): Promise<any> {
        try {
            const response = await this.axiosClient.post(`${API_URL}/domain`, createDomain);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async createMany(createManyDomains: createManyDomain): Promise<any> {
        try {
            const response = await this.axiosClient.post(`${API_URL}/domain/create-many`, createManyDomains);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async list(): Promise<any> {
        try {
            const response = await this.axiosClient.get(`${API_URL}/domain`);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async get(id: string): Promise<any> {
        try {
            const response = await this.axiosClient.get(`${API_URL}/domain/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async delete(id: string): Promise<any> {
        try {
            const response = await this.axiosClient.delete(`${API_URL}/domain/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

}