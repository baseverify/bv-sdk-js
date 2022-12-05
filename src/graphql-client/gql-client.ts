// import axios, { Axios } from 'axios';
import { GraphQLClient } from 'graphql-request'

export class AxiosClient extends GraphQLClient {
  constructor(token: string) {
    super('https://graphql-dev.baseverify.com', {headers: { "x-api-key": token}})
  }
}
