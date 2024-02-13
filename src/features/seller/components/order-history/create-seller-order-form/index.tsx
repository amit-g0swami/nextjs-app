import React from 'react'
import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { CreateOrderForm } from '@/features/shared/components/create-order-form'

type CreateSellerOrderFormProps = {
  initialValues: Record<string, string | number | boolean>
  totalAmount: number
  getFormData: (data: Record<string, string | number | boolean>) => void
  setIsViewOrderDetailsOpen: (data: boolean) => void
}

export const CreateSellerOrderForm = ({
  initialValues,
  totalAmount,
  getFormData,
  setIsViewOrderDetailsOpen
}: CreateSellerOrderFormProps) => {
  return (
    <React.Fragment>
      <Container className="flex items-center justify-start">
        <Button
          btnText="Close"
          className="rounded-md bg-indigo-600 px-8 py-2 mb-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setIsViewOrderDetailsOpen(false)}
        />
      </Container>
      <CreateOrderForm
        disabled
        showSubmitButton={false}
        totalAmount={totalAmount}
        initialValues={initialValues}
        getFormData={getFormData}
      />
    </React.Fragment>
  )
}
