import { Axios, AxiosRequestConfig } from "axios";

export class AxiosClient extends Axios {
    constructor(
        private token: string,
    ) {
        super(
            {
                baseURL: "http://localhost:3000/v1",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": token
                }
            }
        );
    }
}