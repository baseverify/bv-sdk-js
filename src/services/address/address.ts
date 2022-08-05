import { AxiosClient } from "../../axios/axios.service";
import { CreateAddress, VerifyAddress } from "../../interfaces/phone.interface";

const API_URL: string = "http://localhost:3000/v1";

export class Address {
    constructor(
        private axiosClient: AxiosClient,
    ) { }

    async create(createAddress: CreateAddress): Promise<any> {
        try {
            const response = await this.axiosClient.post(`${API_URL}/address`, createAddress);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async list(): Promise<any> {
        try {
            const response = await this.axiosClient.get(`${API_URL}/address`);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async get(id: string): Promise<any> {
        try {
            const response = await this.axiosClient.get(`${API_URL}/address/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    async verify(verifyAddress: VerifyAddress): Promise<any> {
        try {
            const response = await this.axiosClient.patch(`${API_URL}/address/verify`, verifyAddress);
            return response.data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

}