'use client'

import withSellerOnly from '@/utils/middlewares/withSellerOnly'
import { SellerDashboardLayout } from '@/features/seller'

type LayoutProps = {
  children: React.ReactNode
  order: React.ReactNode
  profile: React.ReactNode
  history: React.ReactNode
}

const Layout = ({ children, order, profile, history }: LayoutProps) => {
  return (
    <SellerDashboardLayout order={order} profile={profile} history={history}>
      {children}
    </SellerDashboardLayout>
  )
}

export default withSellerOnly(Layout)
