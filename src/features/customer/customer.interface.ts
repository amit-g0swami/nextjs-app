import {
  IBuyerDetails,
  IOrderDetails,
  IOrderPlaced,
  IPackageDetails,
  IPaymentDetails
} from '../seller/seller.interface'

export enum CUSTOMER_QUERY_KEYS {
  SEARCHED_STORES = 'searchedStore'
}

export interface IAddSellerIdPayload {
  userId: string
  sellerId: string
}

export interface ICreateCustomerOrderPayload {
  sellerId: string | string[]
  createOrderPayload: {
    buyerDetails: IBuyerDetails
    orderPlaced: IOrderPlaced
    orderDetails: IOrderDetails
    packageDetails: IPackageDetails
    paymentDetails: IPaymentDetails
    isSavedToShiprocket: boolean
    userId: string
  }
}
