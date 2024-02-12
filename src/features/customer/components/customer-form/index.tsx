'use client'

import { BackGroundDiv } from '@/features/shared/components/background-dev'
import { useAddressMutation } from '@/features/customer/hooks/useAddressMutation'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import { useParams } from 'next/navigation'
import { USE_LOCAL_STORAGE } from '@/shared/shared.interface'
import { Container } from '@/components/atoms/container'
import { CreateOrderForm } from '@/features/shared/components/create-order-form'
import { ICreateCustomerOrderPayload } from '../../customer.interface'

export const CustomerFormComponent = () => {
  const { getItem } = useLocalStorage(USE_LOCAL_STORAGE.USER_DETAILS)

  const useAddressMutate = useAddressMutation()
  const params = useParams()
  const userId = getItem()

  const getFormData = (data: Record<string, string | number | boolean>) => {
    if (!userId || !params) return

    const buyerDetails = {
      fullName: data.fullName,
      email: data.email,
      mobileNumber: data.mobileNumber
    }
    const orderPlaced = {
      completeAddress: data.completeAddress,
      landMark: data.landMark,
      pinCode: data.pinCode,
      city: data.city,
      state: data.state,
      country: data.country
    }
    const orderDetails = {
      productName: data.productName,
      quantity: data.quantity,
      unitPrice: data.unitPrice,
      totalAmount: data.totalAmount
    }
    const packageDetails = {
      deadWeight: data.deadWeight,
      packageDimension: {
        length: data.length,
        width: data.width,
        height: data.height
      }
    }
    const paymentDetails = {
      paymentMode: data.paymentMode
    }
    const createCustomerOrderPayload = {
      sellerId: params.id,
      createOrderPayload: {
        buyerDetails,
        orderPlaced,
        orderDetails,
        packageDetails,
        paymentDetails,
        userId
      }
    } as ICreateCustomerOrderPayload

    useAddressMutate.mutate(createCustomerOrderPayload)
  }

  return (
    <Container className="bg-white py-8 sm:py-10 h-screen">
      <BackGroundDiv>
        <CreateOrderForm getFormData={getFormData} />
      </BackGroundDiv>
    </Container>
  )
}
