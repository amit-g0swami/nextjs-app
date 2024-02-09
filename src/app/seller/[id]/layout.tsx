import { SellerDashboardLayout } from "@/features/seller";

export default function Layout({
  children,
  order,
  profile,
}: {
  children: React.ReactNode;
  order: React.ReactNode;
  profile: React.ReactNode;
}) {
  return (
    <SellerDashboardLayout
      order={order}
      profile={profile}
      children={children}
    />
  );
}
