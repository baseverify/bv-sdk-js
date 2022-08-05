import { AxiosError } from 'axios';
import { AxiosClient } from '../../axios/axios.service';
import { CreateManyPhones, CreatePhone, VerifyPhone } from '../../interfaces/phone.interface';
const API_URL: string = 'http://localhost:3000/v1';


export class Phone {
    constructor(
        private axiosClient: AxiosClient,
    ) {
        // this.axiosClient = axiosClient;
    }



    async create(createPhone: CreatePhone): Promise<any> {
        try {
            const response = await this.axiosClient.post(`${API_URL}/phone`, createPhone);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async createMany(createManyPhones: CreateManyPhones): Promise<any> {
        try {
            const response = await this.axiosClient.post(`${API_URL}/phone/create-many`, createManyPhones);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async list(): Promise<any> {
        try {
            const response = await this.axiosClient.get(`${API_URL}/phone`);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async get(id: string): Promise<any> {
        try {
            const response = await this.axiosClient.get(`${API_URL}/phone/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async verify(verifyPhone: VerifyPhone): Promise<any> {
        try {
            const response = await this.axiosClient.patch(`${API_URL}/phone/verify`, verifyPhone);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async delete(id: string): Promise<any> {
        try {
            const response = await this.axiosClient.delete(`${API_URL}/phone/${id}`);
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

}