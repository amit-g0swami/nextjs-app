import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { User } from 'firebase/auth'
import { INavigationData } from '../../../home.interface'
import { Button } from '@/components/atoms/button'
import { RenderButtonType } from '../render-button-type'

type MobileMenuProps = {
  user: User | null
  pathname: string
  mobileMenuOpen: boolean
  navigationData: [] | INavigationData[]
  handleSignOut: () => void
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileMenu = ({
  user,
  pathname,
  mobileMenuOpen,
  navigationData,
  handleSignOut,
  setMobileMenuOpen
}: MobileMenuProps) => {
  return (
    <React.Fragment>
      {mobileMenuOpen && (
        <Container className="lg:hidden">
          <Container className="fixed inset-0 z-50 bg-white p-6">
            <Container className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <Text className="sr-only">Shippiviot</Text>
                <Image
                  src="/assets/logo.png"
                  alt=""
                  width={98}
                  height={98}
                  priority
                />
              </a>
              <Button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
                btnText={
                  <React.Fragment>
                    <Text className="sr-only">Close menu</Text>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </React.Fragment>
                }
              />
            </Container>
            <Container className="mt-6 flow-root">
              <Container className="-my-6 divide-y divide-gray-500/10">
                <Container className="space-y-2 py-6">
                  {navigationData.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-sm px-3 py-1 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </Container>
                <Container className="py-6">
                  <RenderButtonType {...{ user, pathname, handleSignOut }} />
                </Container>
              </Container>
            </Container>
          </Container>
          <Container
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          ></Container>
        </Container>
      )}
    </React.Fragment>
  )
}
