import { GraphQLClient, gql } from 'graphql-request';

import { CreateManyPhoneDto, CreatePhoneDto, DeletePhoneDto, FindManyPhonesDto, VerifyPhoneDto } from '../../interfaces';
// import { CreateManyPhones, CreatePhone, Filter, Pagination, VerifyPhone } from '../../interfaces/create.interface';
import { GetAllPhoneData, GetPhone } from '../../interfaces/response.interface';

export class Phone {
  constructor(private graphQLClient: GraphQLClient) {}
  async create(createPhoneDto: CreatePhoneDto): Promise<any> {
    try {
      const mutation = gql`
        mutation Phone_phoneCreate($createPhoneDto: CreatePhoneDto!) {
          phone_phoneCreate(createPhoneDto: $createPhoneDto) {
            id
            requesterId
            number
            identifier
            verificationType
            tier
            status
            verifiedAt
            createdAt
            updatedAt
            deleted
          }
        }
      `;
      const variables = {
        createPhoneDto,
      };
      const response = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async createMany(createManyPhoneDto: CreateManyPhoneDto): Promise<any> {
    try {
      const mutation = gql`
        mutation Phone_phoneCreateMany($createManyPhoneDto: CreateManyPhoneDto!) {
          phone_phoneCreateMany(createManyPhoneDto: $createManyPhoneDto) {
            id
            requesterId
            number
            identifier
            verificationType
            tier
            status
            verifiedAt
            createdAt
            updatedAt
            deleted
          }
        }
      `;
      const variables = {
        createManyPhoneDto,
      };
      const response = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async list(findManyAddressDto?: FindManyPhonesDto): Promise<GetAllPhoneData> {
    try {
      const query = gql`
        query getAllPhone($findManyAddressDto: FindManyPhoneDto!) {
          phone_phoneList(findManyAddressDto: $findManyAddressDto) {
            data {
              id
              requesterId
              number
              identifier
              verificationType
              tier
              status
              verifiedAt
              createdAt
              updatedAt
              deleted
            }
            metadata {
              page
              limit
              total {
                pages
                records
              }
            }
          }
        }
      `;

      const variables = {
        findManyAddressDto: findManyAddressDto,
      };

      const response = await this.graphQLClient.request(query, variables);
      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async get(id: string): Promise<GetPhone> {
    try {
      const query = gql`query Phone_phoneShow($phonePhoneShowId: String!) {
        phone_phoneShow(id: {"phonePhoneShowId": "${id}"}) {
          id
          requesterId
          number
          identifier
          verificationType
          tier
          status
          verifiedAt
          createdAt
          updatedAt
          deleted
        }
      }`;
      const response = await this.graphQLClient.request(query);
      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async verify(verifyPhoneDto: VerifyPhoneDto): Promise<any> {
    try {
      const mutation = gql`mutation Phone_phoneVerify($verifyPhoneDto: VerifyPhoneDto!) {
        phone_phoneVerify(verifyPhoneDto: $verifyPhoneDto)
      }`
      
      const variables = {
        verifyPhoneDto
      }
      const response = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async delete(deletePhoneDto: DeletePhoneDto): Promise<any> {
    try {
      const mutation = gql`mutation Phone_phoneDelete($deletePhoneDto: DeletePhoneDto!) {
        phone_phoneDelete(deletePhoneDto: $deletePhoneDto)
      }`
      const variables = {
        deletePhoneDto
      }
      const response = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
