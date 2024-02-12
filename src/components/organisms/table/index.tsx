import { TableBody } from './table-body'
import { TableHeader } from './table-header'
import { TableToolbar } from './table-toolbar'
import { TableComponentProps } from './table.interface'

export const TableComponent: React.FC<TableComponentProps> = ({
  rowData,
  columns,
  handleEdit,
  getAppliedFilter
}: TableComponentProps) => {
  return (
    <div className="overflow-x-auto">
      <TableToolbar getAppliedFilter={getAppliedFilter} />
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader columns={columns} />
        <TableBody
          rowData={rowData}
          columns={columns}
          handleEdit={handleEdit}
        />
      </table>
    </div>
  )
}
