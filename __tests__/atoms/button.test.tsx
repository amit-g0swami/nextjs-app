import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { Button } from '@/components/atoms/button'

describe('Button component', () => {
  it('renders button text correctly', () => {
    const buttonText = 'Click Me'
    const { getByText } = render(<Button btnText={buttonText} />)
    expect(getByText(buttonText)).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <Button btnText="Click Me" onClick={onClickMock} />
    )
    fireEvent.click(getByText('Click Me'))
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('disables button when disable prop is true', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <Button btnText="Click Me" onClick={onClickMock} disable={true} />
    )
    const button = getByText('Click Me')
    expect(button).toBeDisabled()
    fireEvent.click(button)
    expect(onClickMock).not.toHaveBeenCalled()
  })

  it('applies custom className', () => {
    const customClassName = 'custom-class'
    const { getByText } = render(
      <Button btnText="Click Me" className={customClassName} />
    )
    const button = getByText('Click Me')
    expect(button).toHaveClass(customClassName)
  })
})
