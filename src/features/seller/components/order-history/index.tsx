'use client'

import React from 'react'
import useSellerStore from '../../store/seller.store'
import { Container } from '@/components/atoms/container'
import { TableComponent } from '@/components/organisms/table'
import { IColumnData } from '@/components/organisms/table/table.interface'
import { CreateOrderForm } from '@/features/shared/components/create-order-form'
import { ICreateOrderPayload } from '../../seller.interface'
import { Button } from '@/components/atoms/button'
import { useGetSellerOrdersTableData } from '../../hooks/useGetSellerOrdersTableData'
import { useParams } from 'next/navigation'
import { handleExportToExcel } from '@/utils/export-to-excel'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'

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

  const { data, isLoading } = useGetSellerOrdersTableData({
    sellerId,
    appliedFilters
  })

  return (
    <Container className="px-4 sm:px-0">
      {isViewOrderDetailsOpen && (
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
            initialValues={initialValues}
            getFormData={getFormData}
          />
        </React.Fragment>
      )}
      {!isViewOrderDetailsOpen && (
        <React.Fragment>
          <Container className="flex items-center justify-end">
            {!isLoading && data?.length !== 0 && (
              <Button
                btnText={
                  <Container className="flex items-center justify-center gap-2">
                    Export Orders
                    <ArrowDownTrayIcon className="h-4 w-4" />
                  </Container>
                }
                className="rounded-md bg-indigo-600 px-8 py-2 -mb-10 text-sm font-semibold text-white shadow-sm
               hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
               disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => data && handleExportToExcel(data)}
              />
            )}
          </Container>
          <TableComponent
            rowData={data || []}
            columns={columns}
            handleEdit={(rowData) => handleViewClick(rowData)}
            getAppliedFilter={(value) => handleFilterChange(value)}
          />
        </React.Fragment>
      )}
    </Container>
  )
}
