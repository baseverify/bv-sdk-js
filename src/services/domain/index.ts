import { gql } from 'graphql-request';
import { BaseVerifyGqlClient } from '../../graphql-client/gql-client';

import {
  CreateDomainDto,
  CreateManyDomainDto,
  DeleteDomainDto,
  FindManyDomainDto,
} from '../../interfaces';
import { DomainCreateManyResponse, DomainCreateResponse, DomainDeleteResponse, DomainListResponse, SingleDomainResponse } from '../../interfaces/response.interface';

export class Domain {
  constructor(
    private graphQLClient: BaseVerifyGqlClient
  ) {}

  async create(createDomainDto: CreateDomainDto): Promise<DomainCreateResponse> {
    try {
      const mutation = gql`
        mutation Domain_domainCreate($createDomainDto: CreateDomainDto!) {
          domain_domainCreate(createDomainDto: $createDomainDto) {
            txtRecord
          }
        }
      `;
      const variables = {
        createDomainDto,
      };
      const response: DomainCreateResponse = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async createMany(createManyDomains: CreateManyDomainDto): Promise<DomainCreateManyResponse> {
    try {
      const mutation = gql`
        mutation Domain_domainCreateMany($createManyDomainDto: CreateManyDomainDto!) {
          domain_domainCreateMany(createManyDomainDto: $createManyDomainDto) {
            txtRecord
          }
        }
      `;
      const variables = {
        createManyDomains,
      };
      const response: DomainCreateManyResponse = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async list(findManyDomainDto: FindManyDomainDto): Promise<DomainListResponse> {
    try {
      const query = gql`
        query Domain_domainList(
          $findManyAddressDto: FindManyDomainDto!
          $findManyDomainDto: FindManyDomainDto!
        ) {
          domain_domainList(
            findManyAddressDto: $findManyAddressDto
            findManyDomainDto: $findManyDomainDto
          ) {
            data {
              id
              requesterId
              name
              email
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
        findManyDomainDto,
      };
      const response: DomainListResponse = await this.graphQLClient.request(query, variables);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async get(id: string): Promise<SingleDomainResponse> {
    try {
      const query = gql`query Domain_domainShow($domainDomainShowId: String!) {
        domain_domainShow(id: {"$domainDomainShowId: ${id}"}) {
          id
          requesterId
          name
          email
          tier
          status
          verifiedAt
          createdAt
          updatedAt
          deleted
        }
      }`;
      const response: SingleDomainResponse = await this.graphQLClient.request(query);
      
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async delete(deleteDomainDto: DeleteDomainDto): Promise<DomainDeleteResponse> {
    try {
      const mutation = gql`
        mutation Domain_domainDelete($deleteDomainDto: DeleteDomainDto!) {
          domain_domainDelete(deleteDomainDto: $deleteDomainDto)
        }
      `;
      const variables = {
        deleteDomainDto,
      };
      const response:DomainDeleteResponse = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
