import { Axios } from "axios";

export class AxiosClient extends Axios {
    constructor(
        private token: string, //gonna be apikey for service
    ) {
        super();
        this.defaults.baseURL = 'http://localhost:3000/v1';
    }
}
//TODO: gonna replace the classes with this