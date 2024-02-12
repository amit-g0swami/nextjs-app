'use client'

import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { CreateOrderForm } from '@/features/shared/components/create-order-form'

const formData = [
  {
    buyerDetails: {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      mobileNumber: '1234567890'
    },
    orderPlaced: {
      completeAddress: '123 Main St, Anytown USA',
      landMark: 'Anytown USA',
      pinCode: '123456',
      city: 'Anytown',
      state: 'USA',
      country: 'USA'
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
    _id: '65c9300be2172f0bc68cf8d2',
    sellerId: '65bfcd8ad579297be5b611f6',
    orderDetails: [
      {
        productName: 'Product 1',
        quantity: 2,
        unitPrice: 500,
        totalAmount: 1000,
        _id: '65c9300be2172f0bc68cf8d3'
      },
      {
        productName: 'Product 2',
        quantity: 1,
        unitPrice: 800,
        totalAmount: 800,
        _id: '65c9300be2172f0bc68cf8d4'
      }
    ],
    createdAt: '2024-02-11T20:37:31.883Z',
    __v: 0
  }
]

export const OrderHistory = () => {
  const getFormData = (data: Record<string, string | number | boolean>) => {
    console.log(data)
  }
  const data = formData[0]
  const initialValues = {
    ...data.buyerDetails,
    ...data.orderPlaced,
    ...data.paymentDetails,
    ...data.paymentDetails,
    ...data.orderDetails[0],
    ...data.packageDetails.packageDimension,
    deadWeight: data.packageDetails.deadWeight
  }
  return (
    <Container className="px-4 sm:px-0">
      <Text as="h3" className="text-base font-semibold leading-7 text-gray-900">
        <CreateOrderForm
          disabled
          showSubmitButton={false}
          initialValues={initialValues}
          getFormData={getFormData}
        />
      </Text>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Phone
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">John Doe</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  john.doe@example.com
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">123-456-7890</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  )
}
