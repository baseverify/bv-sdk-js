import { AxiosClient } from '../../axios/axios.service';
import { CreateEmail, CreateManyPhones, VerifyPhone } from '../../interfaces/phone.interface';
const API_URL: string = 'http://localhost:3000/v1';


export class Phone {
    constructor(
        private axiosClient: AxiosClient,
    ) { }

    async create(createEmail: CreateEmail): Promise<any> {
        try {
            const response = await this.axiosClient.post(`${API_URL}/email`, createEmail);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async createMany(createManyPhones: CreateManyPhones): Promise<any> {
        try {
            const response = await this.axiosClient.post(`${API_URL}/email/create-many`, createManyPhones);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async list(): Promise<any> {
        try {
            const response = await this.axiosClient.get(`${API_URL}/email`);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async get(id: string): Promise<any> {
        try {
            const response = await this.axiosClient.get(`${API_URL}/email/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async verify(verifyPhone: VerifyPhone): Promise<any> {
        try {
            const response = await this.axiosClient.patch(`${API_URL}/email/verify`, verifyPhone);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    //TODO: define Delete Interface
    async delete(id: string): Promise<any> {
        try {
            const response = await this.axiosClient.delete(`${API_URL}/email/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

}