import { USER_TYPE } from '@/shared/shared.interface'
import { Card } from '../card'
import { Container } from '@/components/atoms/container'

type CardComponentProps = {
  setType: (type: USER_TYPE) => void
}

export const CardComponent = ({ setType }: CardComponentProps) => {
  return (
    <Container className="mx-auto max-w-7xl px-6 lg:px-8">
      <Container className="mx-auto max-w-2xl rounded-3xl sm:mt-18 lg:mx-0 lg:flex lg:max-w-none justify-center">
        <Card
          icon={'/assets/seller.png'}
          title="Seller Login"
          description="Elevate your business journey! Sign in to your seller account
   and explore tools designed to boost your sales."
          setLoginType={setType}
          type={USER_TYPE.SELLER}
        />
        <Card
          icon={'/assets/profile.png'}
          title="Customer Login"
          description="Unlock endless possibilities and personalized experiences. Login to
  access exclusive features tailored just for you."
          setLoginType={setType}
          type={USER_TYPE.CUSTOMER}
        />
      </Container>
    </Container>
  )
}
