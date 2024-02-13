import { useEffect, useState } from 'react'
import { UserAuth } from '@/contexts/AuthContext'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import { USER_TYPE, USE_LOCAL_STORAGE } from '@/shared/shared.interface'

interface WithSellerOnlyProps {}

export function withSellerOnly<P extends WithSellerOnlyProps>(
  Component: React.ComponentType<P>
) {
  return function WithSellerOnlyWrapper(props: P) {
    const [isSeller, setIsSeller] = useState(false)
    const { getItem } = useLocalStorage(USE_LOCAL_STORAGE.LOGGED_IN_TYPE)
    const { user } = UserAuth()

    useEffect(() => {
      if (!user || getItem() !== USER_TYPE.SELLER) {
        return setIsSeller(false)
      }
      return setIsSeller(true)
    }, [user, getItem])

    return isSeller ? <Component {...props} /> : null
  }
}

export default withSellerOnly
