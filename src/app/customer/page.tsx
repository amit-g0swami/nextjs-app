"use client";

import withCustomerOnly from "@/utils/withCustomerOnly";
import { CustomerComponent } from "@/features/customer";

const CustomerPage = () => {
  return <CustomerComponent />;
};

export default withCustomerOnly(CustomerPage);
