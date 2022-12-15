import { gql, GraphQLClient } from 'graphql-request';
import { CreateAddressDto, FindManyAddressDto,  RemoveAddressDto  } from '../../interfaces/create.interface';
import { AddresscreateResponse, AddressData, AddressDeleteResponse, AddressType, AdressListResponse, GetManyAddressDataObject, SingleAddressResponse } from '../../interfaces/response.interface';

export class Address {
  constructor(private graphQLClient: GraphQLClient) { }

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
  // async create(createAddress: CreateAddress): Promise<AddressData> {
  //   try {
  //     const response = await this.graphQLClient.post('/address', createAddress);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error(`${error}`);
  //   }
  // }

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

  // async list(findManyAddressDto:FindManyAddressDto): Promise<GetManyAddressDataObject> {
  //   try {
  //     const response = await this.graphQLClient.get('/address', { params: { ...pagination, ...filter } });
  //     return response.data;
  //   } catch (error) {
  //     throw new Error(`${error}`);
  //   }
  // }

  // async get(id: string): Promise<AddressType> {
  //   try {
  //     const response = await this.graphQLClient.get(`/address/${id}`);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error(`${error}`);
  //   }
  // }

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


  // async verify(verifyAddress: VerifyAddress): Promise<AddressType> {
  //   try {
  //     const response = await this.graphQLClient.patch('/address', verifyAddress);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error(String(error));
  //   }
  // }
}
