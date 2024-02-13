import '@testing-library/jest-dom'
import { Text } from '@/components/atoms/text'
import { render } from '@testing-library/react'

describe('Text component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Text>Hello World</Text>)
    expect(getByText('Hello World')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Text className="custom-class">Hello World</Text>
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('renders as specified HTML element', () => {
    const { container } = render(<Text as="h1">Hello World</Text>)
    expect((container.firstChild as HTMLElement).tagName.toLowerCase()).toBe(
      'h1'
    )
  })
})
