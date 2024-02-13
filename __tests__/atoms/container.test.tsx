import '@testing-library/jest-dom'
import { Container } from '@/components/atoms/container'
import { render } from '@testing-library/react'

describe('Container component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Container>Hello World</Container>)
    expect(getByText('Hello World')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Container className="custom-class">Hello World</Container>
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('applies inline styles', () => {
    const { container } = render(
      <Container style={{ color: 'red' }}>Hello World</Container>
    )
    expect(container.firstChild).toHaveStyle('color: red')
  })

  it('passes id prop', () => {
    const { container } = render(
      <Container id="test-container">Hello World</Container>
    )
    expect(container.firstChild).toHaveAttribute('id', 'test-container')
  })

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn()
    const { container } = render(
      <Container onClick={onClickMock}>Hello World</Container>
    )
    container.firstChild?.dispatchEvent(
      new MouseEvent('click', { bubbles: true })
    )
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
