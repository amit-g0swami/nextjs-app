import Image from 'next/image'
import { ROUTES } from '@/shared/shared.interface'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

export const Logo = () => {
  return (
    <Container className="flex lg:flex-1">
      <a href={ROUTES.HOME} className="-m-1.5 p-1.5">
        <Text className="sr-only">Your Company</Text>
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={100}
          height={98}
          priority
        />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </a>
    </Container>
  )
}
