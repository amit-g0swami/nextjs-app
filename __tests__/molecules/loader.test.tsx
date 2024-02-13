import '@testing-library/jest-dom'
import { Loader } from '@/components/molecules/loader'
import { render } from '@testing-library/react'

describe('Loader component', () => {
  it('renders loader correctly', () => {
    const { getByRole } = render(<Loader />)
    const loaderElement = getByRole('status')
    expect(loaderElement).toBeInTheDocument()
  })
})
