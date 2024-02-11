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
    console.error('Error during login request:', error)
    throw error
  }
}

const SellerService = {
  createOrder
}

export default SellerService
