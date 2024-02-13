import '@testing-library/jest-dom'
import { Input } from '@/components/atoms/input'
import { render, fireEvent } from '@testing-library/react'

describe('Input component', () => {
  it('renders correctly with provided placeholder', () => {
    const placeholderText = 'Enter your text here'
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholderText} name="test" />
    )
    const inputElement = getByPlaceholderText(placeholderText)
    expect(inputElement).toBeInTheDocument()
  })

  it('updates input value when user types', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" name="test" />
    )
    const inputElement = getByPlaceholderText('Enter text')
    fireEvent.change(inputElement, { target: { value: 'Hello' } })
    expect(inputElement).toHaveValue('Hello')
  })

  it('calls onChange callback when input value changes', () => {
    let newValue = ''
    const handleChange = jest.fn((e) => {
      newValue = e.target.value
    })
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" name="test" onChange={handleChange} />
    )
    const inputElement = getByPlaceholderText('Enter text')
    fireEvent.change(inputElement, { target: { value: 'Hello' } })
    expect(newValue).toBe('Hello')
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
