import { ViewfinderCircleIcon } from '@heroicons/react/20/solid'
import { ITableBodyProps } from '../table.interface'
import { ICreateOrderPayload } from '@/features/seller/seller.interface'
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'

export const TableBody: React.FC<ITableBodyProps> = ({
  rowData,
  columns,
  handleEdit
}: ITableBodyProps) => {
  const handleEditClick = (row: ICreateOrderPayload) => {
    handleEdit(row)
  }
  if (rowData.length === 0) {
    return (
      <tbody className="divide-y divide-gray-100">
        <tr>
          <td
            colSpan={columns.length}
            className="whitespace-nowrap text-center"
          >
            <div className="flex flex-col items-center mt-40">
              <DocumentMagnifyingGlassIcon className="text-gray-500 h-24 w-24" />
              <div className="text-sm leading-6 text-gray-500">
                No data found
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    )
  }
  return (
    <tbody className="divide-y divide-gray-100">
      {rowData.map((data, index) => (
        <tr key={index}>
          {columns.map((column, columnIndex) => (
            <td key={columnIndex} className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm leading-6 text-gray-500">
                {(data[column.key] as any)[column.value]}
              </div>
            </td>
          ))}
          <td
            className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
            onClick={() => handleEditClick(data)}
          >
            <ViewfinderCircleIcon className="text-gray-500 hover:text-red-500 cursor-pointer h-6 w-6" />
          </td>
        </tr>
      ))}
    </tbody>
  )
}
