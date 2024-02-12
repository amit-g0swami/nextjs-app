import React, { useState } from 'react'
import { Container } from '@/components/atoms/container'

interface IDateInputProps {
  placeholder?: string
  name: string
  className?: string
  disabled?: boolean
  onFilterChange: (value: string) => void
}

export const DateInputFilter: React.FC<IDateInputProps> = ({
  placeholder,
  name,
  disabled = false,
  className = '',
  onFilterChange
}) => {
  const [value, setValue] = useState<string | undefined>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setValue(newValue)
    onFilterChange(newValue)
  }

  return (
    <Container className={className}>
      <Container>
        <input
          type="date"
          name={name}
          id={name}
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent disabled:cursor-not-allowed disabled:text-gray-400"
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </Container>
    </Container>
  )
}
