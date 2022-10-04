import axios, { Axios } from 'axios';

export class AxiosClient extends Axios {
  constructor(token: string) {
    super({
      ...axios.defaults,
      baseURL: 'https://api-dev.baseverify.com/v1',
      headers: {
        'Content-Type': 'application/json',
        apikey: token,
      },
    });
  }
}
