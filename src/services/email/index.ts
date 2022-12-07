import { GraphQLClient, gql } from 'graphql-request';

import { AxiosClient } from '../../axios/axios.service';
import { CreateEmailDto, DeleteEmailDto, FindManyEmailDto } from '../../interfaces';
//   CreateEmail,
//   CreateEmailDto,
//   CreateManyEmails,
//   CreateManyPhones,
//   Filter,
//   Pagination,
//   VerifyEmail,
//   VerifyPhone,
// } from '../../interfaces/create.interface';
import { CreateManyEmailsData } from '../../interfaces/response.interface';

export class Email {
  constructor(
    // private axiosClient: AxiosClient
    private graphQLClient: GraphQLClient
  ) {}

  async create(createEmailDto: CreateEmailDto): Promise<any> {
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
      const response = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async createMany(createManyEmails: CreateManyEmailsData): Promise<CreateManyEmailsData> {
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
        createManyEmails,
      };
      const response = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async list(findManyEmailDto: FindManyEmailDto) {
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
      const response = await this.graphQLClient.request(query, variables);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async get(id: string): Promise<Email> {
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

      const response = await this.graphQLClient.request(query);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  // async verify(verifyEmail: VerifyEmail): Promise<any> {
  //   try {
  //     const response = await this.graphQLClient.patch('/email/verify', verifyEmail);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error(`${error}`);
  //   }
  // }

  //TODO: define Delete Interface
  async delete(deleteEmailDto: DeleteEmailDto): Promise<string> {
    try {
      const mutation = gql`
        mutation Email_emailDelete($deleteEmailDto: DeleteEmailDto!) {
          email_emailDelete(deleteEmailDto: $deleteEmailDto)
        }
      `;
      const variables = {
        deleteEmailDto,
      };
      const response = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
