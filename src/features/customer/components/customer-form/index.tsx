'use client'

import useCustomerStore from '../../store/customer.store'
import React, { useState } from 'react'
import { BackGroundDiv } from '@/features/shared/components/background-dev'
import { useAddressMutation } from '@/features/customer/hooks/useAddressMutation'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import { useParams } from 'next/navigation'
import { USE_LOCAL_STORAGE } from '@/shared/shared.interface'
import { Container } from '@/components/atoms/container'
import { CreateOrderForm } from '@/features/shared/components/create-order-form'
import { ICreateCustomerOrderPayload } from '../../customer.interface'
import { Loader } from '@/components/molecules/loader'

export const CustomerFormComponent = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [applicableWeight, setApplicableWeight] = useState<number>(0)

  const { getItem } = useLocalStorage(USE_LOCAL_STORAGE.USER_DETAILS)
  const { setIsCreateCustomerOrderFormSubmitted } = useCustomerStore()
  const { isCreateCustomerOrderFormSubmitted } = useCustomerStore()

  const params = useParams()
  const userId = getItem()
  const useAddressMutate = useAddressMutation()

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
      totalAmount: totalAmount
    }
    const packageDetails = {
      deadWeight: data.deadWeight,
      packageDimension: {
        length: data.length,
        width: data.width,
        height: data.height,
        applicableWeight: applicableWeight
      }
    }
    const paymentDetails = {
      paymentMode: data.paymentMode
    }
    const isSavedToShiprocket = data.isSavedToShiprocket || false
    const createCustomerOrderPayload = {
      sellerId: params.id,
      createOrderPayload: {
        buyerDetails,
        orderPlaced,
        orderDetails,
        packageDetails,
        paymentDetails,
        isSavedToShiprocket,
        userId
      }
    } as ICreateCustomerOrderPayload

    setIsCreateCustomerOrderFormSubmitted(true)
    useAddressMutate.mutate(createCustomerOrderPayload)
  }

  return (
    <React.Fragment>
      {!isCreateCustomerOrderFormSubmitted && (
        <Container className="bg-white py-8 sm:py-10 h-screen">
          <BackGroundDiv>
            <CreateOrderForm
              totalAmount={totalAmount}
              applicableWeight={applicableWeight}
              getFormData={getFormData}
              setTotalAmount={setTotalAmount}
              setApplicableWeight={setApplicableWeight}
            />
          </BackGroundDiv>
        </Container>
      )}
      {isCreateCustomerOrderFormSubmitted && <Loader />}
    </React.Fragment>
  )
}
