import { Container } from '@/components/atoms/container'
import { DateInputFilter } from './table-filters/DateInputFilter'
import { IToolTipProps } from '../table.interface'

export const TableToolbar: React.FC<IToolTipProps> = ({
  getAppliedFilter
}: IToolTipProps) => {
  return (
    <Container className="flex items-center justify-start">
      <DateInputFilter name="date" onFilterChange={getAppliedFilter} />
    </Container>
  )
}
