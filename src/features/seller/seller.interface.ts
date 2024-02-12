import { PAYMENT_TYPE } from '@/shared/shared.interface'

export interface IBuyerDetails {
  fullName: string
  email: string
  mobileNumber: string
}

export interface IOrderPlaced {
  completeAddress: string
  landMark?: string
  pinCode: string
  city: string
  state: string
  country: string
}

export interface IOrderDetails {
  productName: string
  quantity: number
  unitPrice: number
  totalAmount: number
}

export interface IPackageDetails {
  deadWeight: number
  packageDimension: {
    length: number
    width: number
    height: number
  }
}

export interface IPaymentDetails {
  paymentMode: PAYMENT_TYPE
}

export interface ICreateOrderPayload {
  sellerId: string | string[]
  buyerDetails: IBuyerDetails
  orderPlaced: IOrderPlaced
  orderDetails: IOrderDetails
  packageDetails: IPackageDetails
  paymentDetails: IPaymentDetails
  isSavedToShiprocket: boolean
}

export enum SELLER_QUERY_KEYS {
  GET_TABLE_DATA = 'getTableData'
}
