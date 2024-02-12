'use client'

import useSellerStore from '../../store/seller.store'
import { Container } from '@/components/atoms/container'
import { TableComponent } from '@/components/organisms/table'
import { CreateOrderForm } from '@/features/shared/components/create-order-form'

const formData = [
  {
    buyerDetails: {
      fullName: 'test',
      email: 'test@gmail.com',
      mobileNumber: '7878786756'
    },
    orderPlaced: {
      completeAddress: 'test',
      landMark: 'test',
      pinCode: '121212',
      city: 'test',
      state: 'test',
      country: 'test'
    },
    orderDetails: {
      productName: '1',
      quantity: 1,
      unitPrice: 1,
      totalAmount: 1
    },
    packageDetails: {
      packageDimension: {
        length: 1,
        width: 1,
        height: -1
      },
      deadWeight: 1
    },
    paymentDetails: {
      paymentMode: 'COD'
    },
    _id: '65ca0128564ace62ca277fa9',
    sellerId: '65c9fdd3564ace62ca277fa6',
    isSavedToShiprocket: false,
    createdAt: '2024-02-12T11:29:44.761Z',
    __v: 0
  },
  {
    buyerDetails: {
      fullName: 'test',
      email: 'test@gmail.com',
      mobileNumber: '8585858585'
    },
    orderPlaced: {
      completeAddress: 'test',
      pinCode: '858585',
      city: 'test',
      state: 'test',
      country: 'test'
    },
    orderDetails: {
      productName: '1',
      quantity: 1,
      unitPrice: 1,
      totalAmount: 1
    },
    packageDetails: {
      packageDimension: {
        length: 1,
        width: 1,
        height: 1
      },
      deadWeight: -2
    },
    paymentDetails: {
      paymentMode: 'COD'
    },
    _id: '65ca1ab645996e3dd716c758',
    sellerId: '65c9fdd3564ace62ca277fa6',
    isSavedToShiprocket: false,
    createdAt: '2024-02-12T13:18:46.680Z',
    __v: 0
  },
  {
    buyerDetails: {
      fullName: 'test Kumar',
      email: 'john.doe@example.com',
      mobileNumber: '1234567890'
    },
    orderPlaced: {
      completeAddress: '123 Main St, Anytown USA',
      landMark: 'q',
      pinCode: '123456',
      city: 'Anytown',
      state: 'USA',
      country: 'USA'
    },
    orderDetails: {
      productName: 'Product 1',
      quantity: 2,
      unitPrice: 500,
      totalAmount: 1000
    },
    packageDetails: {
      packageDimension: {
        length: 10,
        width: 5,
        height: 2
      },
      deadWeight: 3.5
    },
    paymentDetails: {
      paymentMode: 'COD'
    },
    _id: '65ca03f4564ace62ca277fb9',
    userId: '65ca0145564ace62ca277fad',
    sellerId: '65c9fdd3564ace62ca277fa6',
    isSavedToShiprocket: false,
    createdAt: '2024-02-12T11:41:40.778Z',
    __v: 0
  },
  {
    buyerDetails: {
      fullName: 'test',
      email: 'test@gmail.com',
      mobileNumber: '8876543456'
    },
    orderPlaced: {
      completeAddress: 'test',
      pinCode: '121212',
      city: 'test',
      state: 'test',
      country: 'test'
    },
    orderDetails: {
      productName: 'test',
      quantity: 2,
      unitPrice: 2,
      totalAmount: 2
    },
    packageDetails: {
      packageDimension: {
        length: 3,
        width: 3,
        height: 3
      },
      deadWeight: 3
    },
    paymentDetails: {
      paymentMode: 'PREPAID'
    },
    _id: '65ca0476564ace62ca277fbd',
    userId: '65ca0145564ace62ca277fad',
    sellerId: '65c9fdd3564ace62ca277fa6',
    isSavedToShiprocket: false,
    createdAt: '2024-02-12T11:43:50.144Z',
    __v: 0
  },
  {
    buyerDetails: {
      fullName: 'test',
      email: 'test@gmail.com',
      mobileNumber: '8876543456'
    },
    orderPlaced: {
      completeAddress: 'test',
      pinCode: '121212',
      city: 'test',
      state: 'test',
      country: 'test'
    },
    orderDetails: {
      productName: 'test',
      quantity: 2,
      unitPrice: 2,
      totalAmount: 2
    },
    packageDetails: {
      packageDimension: {
        length: 3,
        width: 3,
        height: 3
      },
      deadWeight: 3
    },
    paymentDetails: {
      paymentMode: 'PREPAID'
    },
    _id: '65ca04d3564ace62ca277fc1',
    userId: '65ca0145564ace62ca277fad',
    sellerId: '65c9fdd3564ace62ca277fa6',
    isSavedToShiprocket: false,
    createdAt: '2024-02-12T11:45:23.575Z',
    __v: 0
  },
  {
    buyerDetails: {
      fullName: 'testing',
      email: 'a@gmail.com',
      mobileNumber: '1212232323'
    },
    orderPlaced: {
      completeAddress: 'test',
      pinCode: '121212',
      city: 'test',
      state: 'test',
      country: 'est'
    },
    orderDetails: {
      productName: 'e',
      quantity: 1,
      unitPrice: 1,
      totalAmount: 1
    },
    packageDetails: {
      packageDimension: {
        length: 1,
        width: 1,
        height: 1
      },
      deadWeight: 1
    },
    paymentDetails: {
      paymentMode: 'PREPAID'
    },
    _id: '65ca16ad45996e3dd716c74f',
    userId: '65ca0145564ace62ca277fad',
    sellerId: '65c9fdd3564ace62ca277fa6',
    isSavedToShiprocket: false,
    createdAt: '2024-02-12T13:01:33.815Z',
    __v: 0
  },
  {
    buyerDetails: {
      fullName: 'test',
      email: 'test@gmail.com',
      mobileNumber: '9999999999'
    },
    orderPlaced: {
      completeAddress: 'test',
      pinCode: '999999',
      city: 'test',
      state: 'test',
      country: 'test'
    },
    orderDetails: {
      productName: 'test',
      quantity: 1,
      unitPrice: 1,
      totalAmount: 1
    },
    packageDetails: {
      packageDimension: {
        length: 1,
        width: 1,
        height: 1
      },
      deadWeight: 1
    },
    paymentDetails: {
      paymentMode: 'COD'
    },
    _id: '65ca191245996e3dd716c753',
    userId: '65ca0145564ace62ca277fad',
    sellerId: '65c9fdd3564ace62ca277fa6',
    isSavedToShiprocket: false,
    createdAt: '2024-02-12T13:11:46.339Z',
    __v: 0
  }
]

const columns = [{ key: 'fullName', label: 'Name', text: 'buyerDetails' }]

const data = formData[0]
const initialValues = {
  ...data.buyerDetails,
  ...data.orderPlaced,
  ...data.paymentDetails,
  ...data.paymentDetails,
  ...data.orderDetails,
  ...data.packageDetails.packageDimension,
  isSavedToShiprocket: true,
  deadWeight: data.packageDetails.deadWeight
}

export const OrderHistory = () => {
  const { isViewOrderDetailsOpen } = useSellerStore()
  const { setIsViewOrderDetailsOpen } = useSellerStore()
  const getFormData = (data: Record<string, string | number | boolean>) => {
    console.log(data)
  }
  return (
    <Container className="px-4 sm:px-0">
      <button
        onClick={() => setIsViewOrderDetailsOpen(!isViewOrderDetailsOpen)}
      >
        toggle
      </button>
      {!isViewOrderDetailsOpen && (
        <CreateOrderForm
          disabled
          showSubmitButton={false}
          initialValues={initialValues}
          getFormData={getFormData}
        />
      )}
      {isViewOrderDetailsOpen && (
        <TableComponent data={formData} columns={columns} />
      )}
    </Container>
  )
}
