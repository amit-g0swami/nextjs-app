import '@testing-library/jest-dom'
import { Tooltip } from '@/components/molecules/tooltip'
import { render, fireEvent } from '@testing-library/react'

describe('Tooltip component', () => {
  it('renders tooltip text correctly when mouse enters and hides when mouse leaves', () => {
    const text = 'Tooltip Text'
    const { getByText, queryByText } = render(
      <Tooltip text={text}>
        <div>Child Component</div>
      </Tooltip>
    )

    const childComponent = getByText('Child Component')
    fireEvent.mouseEnter(childComponent)

    const tooltipText = getByText(text)
    expect(tooltipText).toBeInTheDocument()

    fireEvent.mouseLeave(childComponent)
    const tooltipTextAfterMouseLeave = queryByText(text)
    expect(tooltipTextAfterMouseLeave).not.toBeInTheDocument()
  })

  it('renders tooltip in specified position', () => {
    const text = 'Tooltip Text'
    const position = 'right'
    const { getByText } = render(
      <Tooltip text={text} position={position}>
        <div>Child Component</div>
      </Tooltip>
    )

    const childComponent = getByText('Child Component')
    fireEvent.mouseEnter(childComponent)

    const tooltip = getByText(text)
    expect(tooltip).toHaveStyle(`top: 50%`)
    expect(tooltip).toHaveStyle(`left: 100%`)
    expect(tooltip).toHaveStyle(`transform: translateY(-50%)`)

    fireEvent.mouseLeave(childComponent)
  })
})
