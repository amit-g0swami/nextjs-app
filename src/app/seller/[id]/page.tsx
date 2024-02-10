"use client";

import withSellerOnly from "@/utils/middlewares/withSellerOnly";

const SellerPage = () => {
  return <div />;
};

export default withSellerOnly(SellerPage);
