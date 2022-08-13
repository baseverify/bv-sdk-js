import { Axios } from 'axios';

export class AxiosClient extends Axios {
  constructor(token: string) {
    super({
      baseURL: 'https://api.baseverify.com/v1',
      headers: {
        'Content-Type': 'application/json',
        apikey: token,
      },
    });
  }
}
