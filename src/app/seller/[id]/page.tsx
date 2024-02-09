"use client";

import withSellerOnly from "@/utils/withSellerOnly";
import DashboardLayout from "@/features/seller";

const SellerPage = () => {
  return <DashboardLayout />;
};

export default withSellerOnly(SellerPage);
