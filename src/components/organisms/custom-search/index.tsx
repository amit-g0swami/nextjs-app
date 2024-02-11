import { useDebounce } from '@/features/shared/hooks/useDebounceSearch'
import { useEffect, useState } from 'react'

type CustomSearchProps = {
  placeholder: string
  name: string
  type?: string
  debounceTime?: number
  charLimit?: number
  handleEmptyInput?: () => void
  getSuggestions: (value: string) => void
}

export const CustomSearch = ({
  placeholder = '',
  name,
  type = 'text',
  debounceTime = 500,
  charLimit = 3,
  handleEmptyInput,
  getSuggestions
}: CustomSearchProps) => {
  const [inputValue, setInputValue] = useState('')
  const debouncedSearchInput = useDebounce(inputValue, debounceTime)

  const zero = 0

  useEffect(() => {
    if (inputValue.length === zero) {
      if (handleEmptyInput) {
        handleEmptyInput()
      }
    } else if (debouncedSearchInput.length > charLimit) {
      getSuggestions(debouncedSearchInput)
    }
  }, [debouncedSearchInput])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = e.target.value
    setInputValue(value)
  }

  return (
    <input
      type={type}
      name={name}
      className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      value={inputValue}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  )
}
