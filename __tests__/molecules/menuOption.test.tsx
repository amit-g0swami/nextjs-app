import '@testing-library/jest-dom'
import { MenuOption } from '@/components/molecules/menu-option'
import { render, fireEvent } from '@testing-library/react'

describe('MenuOption component', () => {
  it('renders title and description correctly', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <MenuOption
        onClick={onClickMock}
        title="Test Title"
        discription="Test Description"
      />
    )

    const titleElement = getByText('Test Title')
    const descriptionElement = getByText('Test Description')

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn()
    const { container } = render(
      <MenuOption
        onClick={onClickMock}
        title="Test Title"
        discription="Test Description"
      />
    )

    fireEvent.click(container.firstChild!)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
