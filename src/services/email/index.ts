import { gql } from 'graphql-request';

import { BaseVerifyGqlClient } from '../../graphql-client/gql-client';
import {
  CreateEmailDto,
  CreateManyEmailDto,
  DeleteEmailDto,
  FindManyEmailDto,
} from '../../interfaces';
import {
  CreateManyDataResponse,
  EmailCreateResponse,
  EmailDeleteResponse,
  EmailListResonse,
  SingleEmailResponse,
} from '../../interfaces/response.interface';

export class Email {
  constructor(private graphQLClient: BaseVerifyGqlClient) {}

  async create(createEmailDto: CreateEmailDto): Promise<EmailCreateResponse> {
    try {
      const mutation = gql`
        mutation Email_emailCreate($createEmailDto: CreateEmailDto!) {
          email_emailCreate(createEmailDto: $createEmailDto) {
            id
            requesterId
            identifier
            email
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
        createEmailDto,
      };
      const response: EmailCreateResponse = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async createMany(createManyEmailDto: CreateManyEmailDto): Promise<CreateManyDataResponse> {
    try {
      const mutation = gql`
        mutation Email_emailCreateMany($createManyEmailDto: CreateManyEmailDto!) {
          email_emailCreateMany(createManyEmailDto: $createManyEmailDto) {
            id
            requesterId
            identifier
            email
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
        createManyEmails: createManyEmailDto,
      };
      const response: CreateManyDataResponse = await this.graphQLClient.request(
        mutation,
        variables
      );
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async list(findManyEmailDto: FindManyEmailDto): Promise<EmailListResonse> {
    try {
      const query = gql`
        query Email_emailList($findManyEmailDto: FindManyEmailDto!) {
          email_emailList(findManyEmailDto: $findManyEmailDto) {
            data {
              id
              requesterId
              identifier
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
        findManyEmailDto,
      };
      const response: EmailListResonse = await this.graphQLClient.request(query, variables);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async get(id: string): Promise<SingleEmailResponse> {
    try {
      const query = gql`query Email_emailShow($emailEmailShowId: String!) {
        email_emailShow(id: {"emailEmailShowId: ${id}"}) {
          id
          requesterId
          identifier
          email
          tier
          status
          verifiedAt
          createdAt
          updatedAt
          deleted
        }
      }`;

      const response: SingleEmailResponse = await this.graphQLClient.request(query);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async delete(deleteEmailDto: DeleteEmailDto): Promise<EmailDeleteResponse> {
    try {
      const mutation = gql`
        mutation Email_emailDelete($deleteEmailDto: DeleteEmailDto!) {
          email_emailDelete(deleteEmailDto: $deleteEmailDto)
        }
      `;
      const variables = {
        deleteEmailDto,
      };
      const response: EmailDeleteResponse = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
