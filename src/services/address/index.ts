import { gql } from 'graphql-request';
import { BaseVerifyGqlClient } from '../../graphql-client/gql-client';
import { CreateAddressDto, FindManyAddressDto,  RemoveAddressDto, VerifyAddressOtpInput  } from '../../interfaces/create.interface';
import { AddresscreateResponse, AddressDeleteResponse,  AddressVerify,  AdressListResponse, SingleAddressResponse } from '../../interfaces/response.interface';

export class Address {
  constructor(private graphQLClient: BaseVerifyGqlClient) { }

  async create(createAddressDto: CreateAddressDto): Promise<AddresscreateResponse> {
    try {
      const mutation = gql`mutation Address_addressCreate($createAddressDto: CreateAddressDto!) {
        address_addressCreate(createAddressDto: $createAddressDto) {
          id
          requesterId
          identifier
          customerName
          tier
          address
          address2
          city
          state
          zipCode
          country
          otp
          status
          verifiedAt
          createdAt
          updatedAt
          deleted
        }
      }`

      const variables = {
        createAddressDto
      }
      const response:AddresscreateResponse = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async list(findManyAddressDto:FindManyAddressDto): Promise<AdressListResponse> {
    try {
      const query = gql`query Address_addressList($findManyAddressDto: FindManyAddressDto!) {
        address_addressList(findManyAddressDto: $findManyAddressDto) {
          data {
            id
            requesterId
            identifier
            customerName
            tier
            address
            address2
            city
            state
            zipCode
            country
            otp
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
      }`
      const variables = {
        findManyAddressDto,
      } 
      const response:AdressListResponse = await this.graphQLClient.request(query, variables);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async get(id: string): Promise<SingleAddressResponse> {
    try {
      const  query = gql`query Address_addressShow($addressAddressShowId: String!) {
        address_addressShow(id: {"addressAddressShowId": "${id}"}) {
          id
          requesterId
          identifier
          customerName
          tier
          address
          address2
          city
          state
          zipCode
          country
          otp
          status
          verifiedAt
          createdAt
          updatedAt
          deleted
        }
      }`
      const response:SingleAddressResponse = await this.graphQLClient.request(query);
      return response;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async delete(removeAddressDto: RemoveAddressDto): Promise<AddressDeleteResponse> {
    try {
      const mutation = gql`mutation Address_addressDelete($removeAddressDto: RemoveAddressDto!) {
        address_addressDelete(removeAddressDto: $removeAddressDto)
      }`

      const variables = {
        removeAddressDto
      }
      const response:AddressDeleteResponse = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error) {
      throw new Error(String(error));
    }
  }


  async verify(verifyAddressOtpInput: VerifyAddressOtpInput): Promise<AddressVerify> {
    try {
      const mutation = gql`mutation Address_addressVerify($verifyAddressOtpInput: VerifyAddressOtpInput!) {
        address_addressVerify(verifyAddressOtpInput: $verifyAddressOtpInput) {
          message
        }
      }`
      const variables = {
        verifyAddressOtpInput
      }
      const response = await this.graphQLClient.request(mutation, variables);
      return response;
    } catch (error) {
      throw new Error(String(error));
    }
  }
}
