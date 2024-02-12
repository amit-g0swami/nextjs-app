'use client'

import { Panel } from '@/components/organisms/tabs/panel'
import { Tabs } from '@/components/organisms/tabs'
import { DashboardBackground } from './components/seller-layout'

type sellerDashboardLayoutProps = {
  children: React.ReactNode
  profile: React.ReactNode
  order: React.ReactNode
  history: React.ReactNode
}

export const SellerDashboardLayout = ({
  children,
  profile,
  order,
  history
}: sellerDashboardLayoutProps) => {
  return (
    <DashboardBackground>
      {children}
      <Tabs>
        <Panel title="Seller Profile">{profile}</Panel>
        <Panel title="Create Order">{order}</Panel>
        <Panel title="Order History">{history}</Panel>
      </Tabs>
    </DashboardBackground>
  )
}
