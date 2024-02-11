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
    const loggedInType = getItem()
    const userDetailsString = getUserDetails() as string | undefined

    if (
      loggedInType === USER_TYPE.SELLER &&
      userDetailsString !== undefined &&
      user
    ) {
      const sellerId = JSON.parse(userDetailsString)
      setIsNotLoggedIn(false)
      redirect(ROUTES.SELLER.replace('[id]', `${sellerId}`))
    }

    if (loggedInType === USER_TYPE.CUSTOMER && user) {
      setIsNotLoggedIn(false)
      redirect(ROUTES.CUSTOMER)
    }

    if (!user) {
      setIsNotLoggedIn(true)
    } else {
      setIsNotLoggedIn(false)
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
