import '@testing-library/jest-dom'
import { CustomSearch } from '@/components/organisms/custom-search'
import { render, fireEvent, waitFor } from '@testing-library/react'

describe('CustomSearch component', () => {
  it('updates input value and calls getSuggestions function on input change', async () => {
    const placeholder = 'Search...'
    const name = 'search'
    const getSuggestions = jest.fn()
    const { getByPlaceholderText } = render(
      <CustomSearch
        placeholder={placeholder}
        name={name}
        getSuggestions={getSuggestions}
      />
    )

    const input = getByPlaceholderText(placeholder)
    fireEvent.change(input, { target: { value: 'test' } })

    await waitFor(() => {
      expect(input).toHaveValue('test')
      expect(getSuggestions).toHaveBeenCalledWith('test')
    })
  })

  it('calls handleEmptyInput function when input value is empty', async () => {
    const placeholder = 'Search...'
    const name = 'search'
    const handleEmptyInput = jest.fn()
    const { getByPlaceholderText } = render(
      <CustomSearch
        placeholder={placeholder}
        name={name}
        handleEmptyInput={handleEmptyInput}
        getSuggestions={() => {}}
      />
    )

    const input = getByPlaceholderText(placeholder)
    fireEvent.change(input, { target: { value: '' } })

    await waitFor(() => {
      expect(input).toHaveValue('')
      expect(handleEmptyInput).toHaveBeenCalled()
    })
  })
})
