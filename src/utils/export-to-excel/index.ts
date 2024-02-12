import ExcelJS from 'exceljs'
import { ICreateOrderPayload } from '@/features/seller/seller.interface'

export const handleExportToExcel = async (jsonData: ICreateOrderPayload[]) => {
  try {
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('Sheet1')

    worksheet.addRow(['buyerDetails', 'orderDetails'])

    jsonData.forEach((row) => {
      worksheet.addRow([row.buyerDetails.email, row.orderDetails.productName])
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
