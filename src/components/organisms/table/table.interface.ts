import { ICreateOrderPayload } from '@/features/seller/seller.interface'

type ColumnDataKey =
  | 'buyerDetails'
  | 'orderPlaced'
  | 'orderDetails'
  | 'packageDetails'
  | 'paymentDetails'

type BuyerDetailsKey = 'fullName' | 'email' | 'mobileNumber'
type OrderPlacedKey = 'completeAddress' | 'landMark' | 'pinCode'
type OrderDetailKey = 'productName' | 'quantity' | 'unitPrice' | 'totalAmount'
type PackageDetailsKey = 'packageDimension' | 'deadWeight'
type PaymentDetailsKey = 'paymentMode'

type ColumnValueMap = {
  buyerDetails: BuyerDetailsKey
  orderPlaced: OrderPlacedKey
  orderDetails: OrderDetailKey
  packageDetails: PackageDetailsKey
  paymentDetails: PaymentDetailsKey
}

export type IColumnData = {
  [K in ColumnDataKey]: {
    key: K
    label: string
    value: ColumnValueMap[K]
  }
}[ColumnDataKey]

export interface TableComponentProps {
  rowData: ICreateOrderPayload[]
  columns: IColumnData[]
  handleEdit: (row: ICreateOrderPayload) => void
  getAppliedFilter: (value: string) => void
}

export interface ITableBodyProps {
  rowData: ICreateOrderPayload[]
  columns: IColumnData[]
  handleEdit: (row: ICreateOrderPayload) => void
}

export interface IToolTipProps {
  getAppliedFilter: (value: string) => void
}
