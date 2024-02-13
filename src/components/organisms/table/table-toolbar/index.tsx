import { Container } from '@/components/atoms/container'
import { DateRangeInputFilter } from './table-filters/DateRangeInputFilter'
import { IToolTipProps } from '../table.interface'
import { ExportToExcelButton } from './toolbar-elements/ExportToExcelButton'

export const TableToolbar: React.FC<IToolTipProps> = ({
  rowData,
  isLoading,
  isError,
  appliedFilters,
  getAppliedFilter
}: IToolTipProps) => {
  return (
    <Container className="flex flex-col sm:flex-row justify-start gap-2">
      <DateRangeInputFilter
        name="date"
        placeholder="Select Date Range"
        appliedFilters={appliedFilters}
        onFilterChange={getAppliedFilter}
      />
      <Container className="mt-0 sm:mt-6">
        <ExportToExcelButton
          data={rowData}
          isLoading={isLoading}
          isError={isError}
        />
      </Container>
    </Container>
  )
}
