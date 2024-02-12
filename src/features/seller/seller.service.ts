import HttpService from '@/services/HttpService'
import toast from 'react-hot-toast'
import { ICreateOrderPayload } from './seller.interface'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const createOrder = async (createOrderPayload: ICreateOrderPayload) => {
  try {
    const {
      sellerId,
      buyerDetails,
      orderPlaced,
      orderDetails,
      packageDetails,
      paymentDetails
    } = createOrderPayload
    const { data } = await HttpService.post(`${baseUrl}/${sellerId}/order`, {
      buyerDetails,
      orderPlaced,
      orderDetails,
      packageDetails,
      paymentDetails
    })
    toast(data.message)
    return data
  } catch (error) {
    throw error
  }
}

const getSellerOrdersList = async ({
  sellerId,
  appliedFilters
}: {
  sellerId: string | string[]
  appliedFilters: string
}) => {
  try {
    const { data } = await HttpService.get(
      `${baseUrl}/seller/${sellerId}/orders?filters=date:${appliedFilters}`
    )
    return data.orders as ICreateOrderPayload[]
  } catch (error) {
    throw error
  }
}

const SellerService = {
  createOrder,
  getSellerOrdersList
}

export default SellerService
