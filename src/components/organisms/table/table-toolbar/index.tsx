import { Container } from '@/components/atoms/container'
import { DateInputFilter } from './table-filters/DateInputFilter'
import { IToolTipProps } from '../table.interface'
import { ExportToExcelButton } from './table-filters/ExportToExcelButton'

export const TableToolbar: React.FC<IToolTipProps> = ({
  rowData,
  isLoading,
  isError,
  getAppliedFilter
}: IToolTipProps) => {
  return (
    <Container className="flex flex-col sm:flex-row justify-start gap-2">
      <DateInputFilter name="date" onFilterChange={getAppliedFilter} />
      <ExportToExcelButton
        data={rowData}
        isLoading={isLoading}
        isError={isError}
      />
    </Container>
  )
}
