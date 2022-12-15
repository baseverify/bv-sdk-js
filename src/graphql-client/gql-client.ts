// import axios, { Axios } from 'axios';
import { GraphQLClient } from 'graphql-request'

export class BaseVerifyGqlClient extends GraphQLClient {
  constructor(token: string) {
    super('https://graphql-dev.baseverify.com', {headers: { "x-api-key": token}})
  }
}
