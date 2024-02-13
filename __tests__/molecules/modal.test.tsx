import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { Modal } from '@/components/molecules/modal'

describe('Modal component', () => {
  it('renders title and content correctly when isOpen is true', () => {
    const onCloseMock = jest.fn()
    const { getByText } = render(
      <Modal
        isOpen={true}
        title="Test Title"
        content={<div>Test Content</div>}
        onClose={onCloseMock}
      />
    )

    const titleElement = getByText('Test Title')
    const contentElement = getByText('Test Content')

    expect(titleElement).toBeInTheDocument()
    expect(contentElement).toBeInTheDocument()
  })

  it('calls onClose handler when close button is clicked', () => {
    const onCloseMock = jest.fn()
    const { getByText } = render(
      <Modal
        isOpen={true}
        title="Test Title"
        content={<div>Test Content</div>}
        onClose={onCloseMock}
      />
    )

    const closeButton = getByText('Close')
    fireEvent.click(closeButton)

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  it('does not render when isOpen is false', () => {
    const onCloseMock = jest.fn()
    const { queryByText } = render(
      <Modal
        isOpen={false}
        title="Test Title"
        content={<div>Test Content</div>}
        onClose={onCloseMock}
      />
    )

    const titleElement = queryByText('Test Title')
    const contentElement = queryByText('Test Content')

    expect(titleElement).not.toBeInTheDocument()
    expect(contentElement).not.toBeInTheDocument()
  })
})
