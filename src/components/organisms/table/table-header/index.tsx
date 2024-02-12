import { IColumnData } from '../table.interface'

export const TableHeader = ({ columns }: { columns: IColumnData[] }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            scope="col"
            className="px-6 py-3 text-left text-sm font-semibold leading-7 text-gray-900 tracking-wider"
          >
            {column.label}
          </th>
        ))}
        <th
          scope="col"
          className="px-6 py-3 text-left text-sm font-semibold leading-7 text-gray-900"
        >
          View
        </th>
      </tr>
    </thead>
  )
}
