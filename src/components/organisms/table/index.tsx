import { DateInputFilter } from './table-toolbar/table-filter/table-filter-options/DateInputFilter'

interface IColumn {
  key: string
  text: string
  label: string
}

interface ITableComponentProps {
  data: any[]
  columns: IColumn[]
}

export const TableComponent: React.FC<ITableComponentProps> = ({
  data,
  columns
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((rowData, index) => (
            <tr key={index}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex} className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {rowData[column.text][column.key]}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
