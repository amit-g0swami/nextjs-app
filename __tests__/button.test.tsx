import '@testing-library/jest-dom'
import { Button } from '@/components/atoms/button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  it('renders a button', () => {
    render(<Button btnText="test" />)
    const button = screen.getByText('test')
    expect(button).toBeInTheDocument()
  })
})
