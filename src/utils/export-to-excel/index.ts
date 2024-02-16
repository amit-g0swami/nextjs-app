import ExcelJS from 'exceljs'
import { ICreateOrderPayload } from '@/features/seller/seller.interface'

const getHeaders = (): string[] => {
  return [
    'Full Name',
    'Email',
    'Mobile Number',
    'Complete Address',
    'Land Mark',
    'Pin Code',
    'City',
    'State',
    'Country',
    'Product Name',
    'Quantity',
    'Unit Price',
    'Total Amount',
    'Dead Weight',
    'Package Dimension Length',
    'Package Dimension Height',
    'Package Dimension Width',
    'Applicable Weight',
    'Payment Mode'
  ]
}

const getRowDetails = (row: ICreateOrderPayload): (string | number)[] => {
  return [
    row.buyerDetails.fullName,
    row.buyerDetails.email,
    row.buyerDetails.mobileNumber,
    row.orderPlaced.completeAddress,
    row.orderPlaced.landMark || '',
    row.orderPlaced.pinCode,
    row.orderPlaced.city,
    row.orderPlaced.state,
    row.orderPlaced.country,
    row.orderDetails.productName,
    row.orderDetails.quantity,
    row.orderDetails.unitPrice,
    row.orderDetails.totalAmount,
    row.packageDetails.deadWeight,
    row.packageDetails.packageDimension.length,
    row.packageDetails.packageDimension.width,
    row.packageDetails.packageDimension.height,
    row.packageDetails.packageDimension.applicableWeight,
    row.paymentDetails.paymentMode
  ]
}

export const handleExportToExcel = async (
  jsonData: ICreateOrderPayload[]
): Promise<void> => {
  try {
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('Sheet1')

    worksheet.addRow(getHeaders())

    jsonData.forEach((row) => {
      worksheet.addRow(getRowDetails(row))
    })

    await workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Orders.xlsx'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    })
  } catch (error) {
    console.error('Error exporting data:', error)
  }
}
