import { SellerDashboardLayout } from '@/features/seller'

type LayoutProps = {
  children: React.ReactNode
  order?: React.ReactNode
  profile?: React.ReactNode
}

export default function Layout({ children, order, profile }: LayoutProps) {
  return (
    <SellerDashboardLayout order={order} profile={profile}>
      {children}
    </SellerDashboardLayout>
  )
}
