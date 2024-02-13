import React from 'react'
import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { ICreateOrderPayload } from '@/features/seller/seller.interface'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { handleExportToExcel } from '@/utils/export-to-excel'

type ExportToExcelButtonProps = {
  data: ICreateOrderPayload[] | undefined
  isLoading: boolean
  isError: boolean
}

export const ExportToExcelButton = ({
  data,
  isLoading,
  isError
}: ExportToExcelButtonProps) => {
  return (
    <React.Fragment>
      {!isLoading && !isError && data && (
        <Button
          btnText={
            <Container className="flex items-center justify-center gap-2">
              Export Orders
              <ArrowDownTrayIcon className="h-4 w-4" />
            </Container>
          }
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm
               hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
               disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!data || data.length === 0}
          onClick={() => handleExportToExcel(data)}
        />
      )}
    </React.Fragment>
  )
}
