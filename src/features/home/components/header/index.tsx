'use client'

import useHomeStore from '../../store/home.store'
import React, { useEffect, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import { UserAuth } from '@/contexts/AuthContext'
import { Container } from '@/components/atoms/container'
import { Logo } from './logo'
import { MobileMenu } from './mobile-menu'
import { Menu } from './menu'
import { Button } from '@/components/atoms/button'
import { RenderButtonType } from './render-button-type'

export const HeaderSection = () => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navigationData, setNavigationData] = useState<[] | typeof navigation>(
    []
  )
  const { user, logOut } = UserAuth()
  const { navigation } = useHomeStore()

  useEffect(() => {
    if (!user) {
      return setNavigationData(navigation)
    }
    return setNavigationData([])
  }, [user, navigation])

  const handleSignOut = () => {
    logOut()
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Logo />
        <Container className="flex lg:hidden">
          <Button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
            btnText={
              <React.Fragment>
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </React.Fragment>
            }
          />
        </Container>
        <Menu navigationData={navigationData} />
        <Container className="hidden lg:flex lg:flex-1 lg:justify-end">
          <RenderButtonType
            user={user}
            pathname={pathname}
            handleSignOut={handleSignOut}
            className="text-sm font-semibold leading-6 text-gray-900"
          />
        </Container>
      </nav>
      <MobileMenu
        user={user}
        pathname={pathname}
        mobileMenuOpen={mobileMenuOpen}
        navigationData={navigationData}
        handleSignOut={handleSignOut}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  )
}
