import '@testing-library/jest-dom'
import { Tabs } from '@/components/organisms/tabs'
import { render } from '@testing-library/react'
import { Panel } from '@/components/organisms/tabs/panel'

describe('Tabs', () => {
  const child1 = <Panel title="Tab 1">Tab 1 Content</Panel>
  const child2 = <Panel title="Tab 2">Tab 2 Content</Panel>

  it('renders without crashing', () => {
    const { getByText } = render(
      <Tabs>
        {child1}
        {child2}
      </Tabs>
    )
    expect(getByText('Tab 1 Content')).toBeInTheDocument()
  })
})
