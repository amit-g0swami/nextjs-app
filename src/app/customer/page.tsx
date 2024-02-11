'use client'

import withCustomerOnly from '@/utils/middlewares/withCustomerOnly'
import { CustomerComponent } from '@/features/customer'

const CustomerPage = () => {
  return <CustomerComponent />
}

export default withCustomerOnly(CustomerPage)
