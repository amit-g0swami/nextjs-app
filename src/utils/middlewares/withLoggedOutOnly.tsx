import { useEffect, useState } from 'react'
import { UserAuth } from '@/contexts/AuthContext'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import { ROUTES, USER_TYPE, USE_LOCAL_STORAGE } from '@/shared/shared.interface'
import { redirect } from 'next/navigation'

interface UseLoggedOutOnlyProps {}

function useLoggedOutOnly() {
  const [isNotLoggedIn, setIsNotLoggedIn] = useState(true)
  const { user } = UserAuth()
  const { getItem } = useLocalStorage(USE_LOCAL_STORAGE.LOGGED_IN_TYPE)
  const { getItem: getUserDetails } = useLocalStorage(
    USE_LOCAL_STORAGE.USER_DETAILS
  )

  useEffect(() => {
    if (!user) {
      return setIsNotLoggedIn(true)
    }

    if (getItem() === USER_TYPE.CUSTOMER) {
      setIsNotLoggedIn(false)
      return redirect(ROUTES.CUSTOMER)
    }

    if (getItem() === USER_TYPE.SELLER && getUserDetails()) {
      setIsNotLoggedIn(false)
      return redirect(ROUTES.SELLER.replace('[id]', `${getUserDetails()}`))
    }
  }, [user, getItem, getUserDetails])

  return isNotLoggedIn
}

export function withLoggedOutOnly<P extends UseLoggedOutOnlyProps>(
  Component: React.ComponentType<P>
) {
  return function useLoggedOutOnlyWrapper(props: P) {
    const isNotLoggedIn = useLoggedOutOnly()

    return isNotLoggedIn ? <Component {...props} /> : null
  }
}

export default withLoggedOutOnly
