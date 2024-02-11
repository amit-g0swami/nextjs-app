'use client'

import withSellerOnly from '@/utils/middlewares/withSellerOnly'
import { SellerDashboardLayout } from '@/features/seller'

type LayoutProps = {
  children: React.ReactNode
  order?: React.ReactNode
  profile?: React.ReactNode
}

const Layout = ({ children, order, profile }: LayoutProps) => {
  return (
    <SellerDashboardLayout order={order} profile={profile}>
      {children}
    </SellerDashboardLayout>
  )
}

export default withSellerOnly(Layout)
