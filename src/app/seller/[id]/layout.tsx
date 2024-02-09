import DashboardLayout from "@/features/seller";

export default function Layout({ order }: { order: React.ReactNode }) {
  return (
    <>
      {order}
      <DashboardLayout />
    </>
  );
}
