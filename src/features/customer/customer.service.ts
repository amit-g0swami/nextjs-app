import HttpService from '@/services/HttpService'
import { IUser } from '../login/login.interface'
import {
  IAddSellerIdPayload,
  ICreateCustomerOrderPayload
} from './customer.interface'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const createCustomerOrder = async (
  addressPayload: ICreateCustomerOrderPayload
) => {
  try {
    const { sellerId, createOrderPayload } = addressPayload
    const {
      userId,
      buyerDetails,
      orderPlaced,
      orderDetails,
      packageDetails,
      paymentDetails
    } = createOrderPayload

    const { data } = await HttpService.post(`${baseUrl}/order/${sellerId}`, {
      userId,
      buyerDetails,
      orderPlaced,
      orderDetails,
      packageDetails,
      paymentDetails
    })
    return data
  } catch (error) {
    throw error
  }
}

const getSearchedSeller = async (sellerId: string | null) => {
  try {
    const { data } = await HttpService.get(`${baseUrl}/seller/${sellerId}`)
    const seller: IUser[] | [] = data.seller || []
    return seller
  } catch (error) {
    throw error
  }
}

const addSellerId = async (addSellerIdPayload: IAddSellerIdPayload) => {
  try {
    const { userId, sellerId } = addSellerIdPayload
    const { data } = await HttpService.put(`${baseUrl}/${userId}/sellerId`, {
      sellerId
    })
    return data
  } catch (error) {
    throw error
  }
}

const CustomerService = {
  createCustomerOrder,
  getSearchedSeller,
  addSellerId
}

export default CustomerService
