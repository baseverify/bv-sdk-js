import { AxiosClient } from '../../axios/axios.service';
import { CreateEmail, CreateManyEmails, CreateManyPhones, VerifyEmail, VerifyPhone } from '../../interfaces/create.interface';
import { CreateManyEmailsData, Email } from '../../interfaces/response.interface';
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

    async createMany(createManyEmails: CreateManyEmails): Promise<CreateManyEmailsData> {
        try {
            const response = await this.axiosClient.post(`${API_URL}/email/create-many`, createManyEmails);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async list(): Promise<Email[]> {
        try {
            const response = await this.axiosClient.get(`${API_URL}/email`);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async get(id: string): Promise<Email> {
        try {
            const response = await this.axiosClient.get(`${API_URL}/email/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async verify(verifyEmail: VerifyEmail): Promise<any> {
        try {
            const response = await this.axiosClient.patch(`${API_URL}/email/verify`, verifyEmail);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    //TODO: define Delete Interface
    async delete(id: string): Promise<string> {
        try {
            const response = await this.axiosClient.delete(`${API_URL}/email/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

}