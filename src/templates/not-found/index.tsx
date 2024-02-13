import Link from 'next/link'
import { BackGroundDiv } from '@/features/shared/components/background-dev'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { ROUTES } from '@/shared/shared.interface'

export const NotFoundComponent = () => {
  return (
    <Container className="py-24 sm:py-32 h-screen flex items-center justify-center">
      <BackGroundDiv>
        <Container className="flex gap-1 ml-auto flex-col ">
          <Text as="h2" className="text-4xl text-neutral-800">
            404 Not Authorized
          </Text>
          <Text as="p" className="text-neutral-600">
            Need to login to find requested resource
          </Text>
          <Link href={ROUTES.HOME} className="text-neutral-600">
            Go Home <span aria-hidden="true">&rarr;</span>
          </Link>
        </Container>
      </BackGroundDiv>
    </Container>
  )
}
