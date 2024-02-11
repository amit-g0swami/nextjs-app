import React from 'react'
import Link from 'next/link'
import { User } from 'firebase/auth'
import { ROUTES } from '@/shared/shared.interface'
import { Text } from '@/components/atoms/text'
import { Button } from '@/components/atoms/button'

type renderButtonTypeProps = {
  user: User | null
  pathname: string
  className?: string
  handleSignOut: () => void
}

const renderButtonType = ({
  user,
  pathname,
  className = '-mx-3 block rounded-sm px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100',
  handleSignOut
}: renderButtonTypeProps) => {
  switch (user) {
    case null:
      return (
        <Link
          href={pathname === ROUTES.LOGIN ? ROUTES.HOME : ROUTES.LOGIN}
          className={`${className}`}
        >
          {pathname === ROUTES.LOGIN ? 'Go Home' : 'Login'}{' '}
          <Text aria-hidden="true">&rarr;</Text>
        </Link>
      )
    default:
      return (
        <Button
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => handleSignOut()}
          btnText={
            <React.Fragment>
              Logout
              <Text aria-hidden="true">&rarr;</Text>
            </React.Fragment>
          }
        />
      )
  }
}

export const RenderButtonType = ({
  user,
  pathname,
  className,
  handleSignOut
}: renderButtonTypeProps) => {
  return (
    <React.Fragment>
      {renderButtonType({ user, pathname, className, handleSignOut })}
    </React.Fragment>
  )
}
