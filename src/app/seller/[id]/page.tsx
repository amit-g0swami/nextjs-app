"use client";

import withSellerOnly from "@/utils/withSellerOnly";
import { SellerComponent } from "@/features/seller";

const SellerPage = () => {
  return <SellerComponent />;
};

export default withSellerOnly(SellerPage);
