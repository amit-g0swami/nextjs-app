'use client'

import withCustomerOnly from '@/utils/middlewares/withCustomerOnly'
import { CustomerFormComponent } from '@/features/customer/components/customer-form'

const CustomerFormPage = () => {
  return <CustomerFormComponent />
}

export default withCustomerOnly(CustomerFormPage)
