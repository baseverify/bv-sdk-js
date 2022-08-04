import axios, { AxiosError } from 'axios';
import { CreateManyPhones, CreatePhone, VerifyPhone } from '../../interfaces/phone.interface';
const API_URL: string = 'http://localhost:3000/v1';


export class Phone {
    constructor(
        private token: string,
    ) { }

    async create(createPhone: CreatePhone): Promise<any> {
        try {
            const response = await axios.post(`${API_URL}/phone`, createPhone, {
                headers: {
                    "Content-Type": "application/json",
                    'ApiKey': this.token,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async createMany(createManyPhones: CreateManyPhones): Promise<any> {
        try {
            const response = await axios.post(`${API_URL}/phone/create-many`, createManyPhones, {
                headers: {
                    "Content-Type": "application/json",
                    'ApiKey': this.token,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async list(): Promise<any> {
        try {
            const response = await axios.get(`${API_URL}/phone`, {
                headers: {
                    "Content-Type": "application/json",
                    'ApiKey': this.token,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async get(id: string): Promise<any> {
        try {
            const response = await axios.get(`${API_URL}/phone/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    'ApiKey': this.token,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async verify(verifyPhone: VerifyPhone): Promise<any> {
        try {
            const response = await axios.patch(`${API_URL}/phone/verify`, verifyPhone, {
                headers: {
                    "Content-Type": "application/json",
                    'ApiKey': this.token,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async delete(id: string): Promise<any> {
        try {
            const response = await axios.delete(`${API_URL}/phone/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    'ApiKey': this.token,
                },
            });
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

}