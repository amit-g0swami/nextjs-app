"use client";

import withCustomerOnly from "@/utils/withCustomerOnly";
import { CustomerFormComponent } from "@/features/customer/components/CustomerForm";

const CustomerFormPage = () => {
  return <CustomerFormComponent />;
};

export default withCustomerOnly(CustomerFormPage);
