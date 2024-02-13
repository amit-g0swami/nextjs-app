'use client'

import React from 'react'
import useSellerStore from '../../store/seller.store'
import { Container } from '@/components/atoms/container'
import { TableComponent } from '@/components/organisms/table'
import { IColumnData } from '@/components/organisms/table/table.interface'
import { ICreateOrderPayload } from '../../seller.interface'
import { useGetSellerOrdersTableData } from '../../hooks/useGetSellerOrdersTableData'
import { useParams } from 'next/navigation'
import { CreateSellerOrderForm } from './create-seller-order-form'

const columns: IColumnData[] = [
  {
    key: 'buyerDetails',
    label: 'User Name',
    value: 'fullName'
  },
  {
    key: 'orderDetails',
    label: 'Product Name',
    value: 'productName'
  },
  {
    key: 'orderDetails',
    label: 'Quantity',
    value: 'quantity'
  },
  {
    key: 'orderDetails',
    label: 'Total Amount',
    value: 'totalAmount'
  },
  {
    key: 'paymentDetails',
    label: 'Payment Mode',
    value: 'paymentMode'
  }
]

export const OrderHistory = () => {
  const params = useParams()
  const { isViewOrderDetailsOpen } = useSellerStore()
  const { selectedRowdata } = useSellerStore()
  const { appliedFilters } = useSellerStore()
  const { setIsViewOrderDetailsOpen } = useSellerStore()
  const { setSelectedRowdata } = useSellerStore()
  const { setAppliedFilters } = useSellerStore()

  const getFormData = (data: Record<string, string | number | boolean>) => {
    console.log(data)
  }
  const handleViewClick = (rowData: ICreateOrderPayload) => {
    setIsViewOrderDetailsOpen(true)
    setSelectedRowdata(rowData)
  }
  const handleFilterChange = (value: string) => {
    setAppliedFilters(value)
  }

  const sellerId = params?.id

  const initialValues = {
    ...(selectedRowdata?.buyerDetails ?? {}),
    ...(selectedRowdata?.orderPlaced ?? {}),
    ...(selectedRowdata?.paymentDetails ?? {}),
    ...(selectedRowdata?.orderDetails ?? {}),
    ...(selectedRowdata?.packageDetails?.packageDimension ?? {}),
    deadWeight: selectedRowdata?.packageDetails?.deadWeight ?? '',
    isSavedToShiprocket: selectedRowdata?.isSavedToShiprocket ?? false
  }

  const { data, isLoading, isError } = useGetSellerOrdersTableData({
    sellerId,
    appliedFilters
  })

  return (
    <Container className="px-4 sm:px-0">
      {isViewOrderDetailsOpen && (
        <CreateSellerOrderForm
          initialValues={initialValues}
          getFormData={getFormData}
          setIsViewOrderDetailsOpen={setIsViewOrderDetailsOpen}
        />
      )}
      {!isViewOrderDetailsOpen && (
        <TableComponent
          rowData={data || []}
          isLoading={isLoading}
          isError={isError}
          columns={columns}
          handleEdit={(rowData) => handleViewClick(rowData)}
          getAppliedFilter={(value) => handleFilterChange(value)}
        />
      )}
    </Container>
  )
}
