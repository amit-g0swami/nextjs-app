import React, { useEffect, useState } from 'react'
import { Container } from '@/components/atoms/container'
import toast from 'react-hot-toast'

interface IDateRangeInputProps {
  placeholder?: string
  name: string
  disabled?: boolean
  appliedFilters?: string
  onFilterChange: (value: string) => void
}

enum DATE_TYPE {
  START = 'start',
  END = 'end'
}

enum TOAST_MESSAGE {
  INVALID_DATE_RANGE = 'Invalid date range'
}

export const DateRangeInputFilter: React.FC<IDateRangeInputProps> = ({
  placeholder,
  name,
  appliedFilters,
  disabled = false,
  onFilterChange
}) => {
  const [startDate, setStartDate] = useState<string | undefined>('')
  const [endDate, setEndDate] = useState<string | undefined>('')

  const [startDateValue, endDateValue] = appliedFilters?.split('|') || []

  useEffect(() => {
    if (startDateValue && endDateValue) {
      setStartDate(startDateValue)
      setEndDate(endDateValue)
    }
  }, [appliedFilters])

  useEffect(() => {
    if (startDate && endDate) {
      onFilterChange(`${startDate}|${endDate}`)
    }
  }, [startDate, endDate])

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    dateType: DATE_TYPE
  ) => {
    const newValue = event.target.value

    const isStartDate = dateType === DATE_TYPE.START
    const validDateRange = isStartDate
      ? !endDate || newValue < endDate
      : !startDate || newValue > startDate

    if (!validDateRange) {
      toast.error(TOAST_MESSAGE.INVALID_DATE_RANGE)
      return
    }

    const updatedStartDate = isStartDate ? newValue : startDate
    const updatedEndDate = isStartDate ? endDate : newValue

    isStartDate ? setStartDate(updatedStartDate) : setEndDate(updatedEndDate)
  }

  return (
    <Container className="flex gap-2">
      <Container>
        <label
          htmlFor="street-address"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Start Date
        </label>
        <input
          type="date"
          name={`${name}-start`}
          id={`${name}-start`}
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent disabled:cursor-not-allowed disabled:text-gray-400"
          value={startDate}
          onChange={(e) => handleInputChange(e, DATE_TYPE.START)}
          placeholder={placeholder ? `${placeholder} (Start)` : ''}
          disabled={disabled}
        />
      </Container>
      <Container>
        <label
          htmlFor="street-address"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          End Date
        </label>
        <input
          type="date"
          name={`${name}-end`}
          id={`${name}-end`}
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent disabled:cursor-not-allowed disabled:text-gray-400"
          value={endDate}
          onChange={(e) => handleInputChange(e, DATE_TYPE.END)}
          placeholder={placeholder ? `${placeholder} (End)` : ''}
          disabled={disabled}
        />
      </Container>
    </Container>
  )
}
