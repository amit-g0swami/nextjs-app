import { PAYMENT_TYPE } from '@/shared/shared.interface'

interface IBuyerDetails {
  fullName: string
  email: string
  mobileNumber: string
}

interface IOrderPlaced {
  completeAddress: string
  landMark: string
  pinCode: string
  city: string
  state: string
  country: string
}

interface IOrderDetails {
  productName: string
  quantity: number
  unitPrice: number
  totalAmount: number
}

interface IPackageDetails {
  deadWeight: number
  packageDimension: {
    length: number
    width: number
    height: number
  }
}

interface IPaymentDetails {
  paymentMode: PAYMENT_TYPE
}

export interface ICreateOrderPayload {
  sellerId: string | string[]
  buyerDetails: IBuyerDetails
  orderPlaced: IOrderPlaced
  orderDetails: IOrderDetails[]
  packageDetails: IPackageDetails
  paymentDetails: IPaymentDetails
}
