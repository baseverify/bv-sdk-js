import { AxiosClient } from './axios/axios.service';
import { Phone } from './services/phone/phone';

const API_URL: string = 'http://localhost:3000/v1';


export class BaseVerify {
    private axiosClient: AxiosClient;
    phone: Phone;

    constructor(
        token: string,
    ) {
        this.axiosClient = new AxiosClient(token);
        this.phone = new Phone(this.axiosClient);
    }

}