import { useEffect, useState } from 'react'
import { UserAuth } from '@/contexts/AuthContext'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import { USER_TYPE, USE_LOCAL_STORAGE } from '@/shared/shared.interface'

interface WithCustomerOnlyProps {}

export function withCustomerOnly<P extends WithCustomerOnlyProps>(
  Component: React.ComponentType<P>
) {
  return function WithCustomerOnlyWrapper(props: P) {
    const [isCustomer, setIsCustomer] = useState(false)
    const { getItem } = useLocalStorage(USE_LOCAL_STORAGE.LOGGED_IN_TYPE)
    const { user } = UserAuth()

    useEffect(() => {
      if (!user || getItem() !== USER_TYPE.CUSTOMER) {
        return setIsCustomer(false)
      }
      return setIsCustomer(true)
    }, [user, getItem])

    return isCustomer ? <Component {...props} /> : null
  }
}

export default withCustomerOnly
