'use client'

import useSellerStore from '../../store/seller.store'
import { useParams } from 'next/navigation'
import { useCreateOrderMutation } from '../../hooks/useCreateOrderMutation'
import { ICreateOrderPayload } from '../../seller.interface'
import { CreateOrderForm } from '../../../shared/components/create-order-form'
import React from 'react'
import { Loader } from '@/components/molecules/loader'

export const CreateOrder = () => {
  const params = useParams()
  const sellerId = params?.id

  const useCreateOrderMutate = useCreateOrderMutation()
  const { isCreateSellerOrderFormSubmitted } = useSellerStore()
  const { setIsCreateSellerOrderFormSubmitted } = useSellerStore()

  const getFormData = (data: Record<string, string | number | boolean>) => {
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
    const isSavedToShiprocket = data.isSavedToShiprocket || false

    const orderPayload = {
      sellerId,
      buyerDetails,
      orderPlaced,
      orderDetails,
      packageDetails,
      paymentDetails,
      isSavedToShiprocket
    } as ICreateOrderPayload

    setIsCreateSellerOrderFormSubmitted(true)
    useCreateOrderMutate.mutate(orderPayload)
  }

  return (
    <React.Fragment>
      {!isCreateSellerOrderFormSubmitted && (
        <CreateOrderForm getFormData={getFormData} />
      )}
      {isCreateSellerOrderFormSubmitted && <Loader />}
    </React.Fragment>
  )
}
