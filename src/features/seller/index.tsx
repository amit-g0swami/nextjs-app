'use client'

import { Container } from '@/components/atoms/container'
import { Panel } from '@/components/molecules/panel'
import { Tabs } from '@/components/molecules/tabs'
import { DashboardBackground } from './components/seller-layout'

type sellerDashboardLayoutProps = {
  children: React.ReactNode
  profile: React.ReactNode
  order: React.ReactNode
}

export const SellerDashboardLayout = ({
  children,
  profile,
  order
}: sellerDashboardLayoutProps) => {
  return (
    <DashboardBackground>
      {children}
      <Tabs>
        <Panel title="Seller Profile">{profile}</Panel>
        <Panel title="Create Order">{order}</Panel>
      </Tabs>
    </DashboardBackground>
  )
}
