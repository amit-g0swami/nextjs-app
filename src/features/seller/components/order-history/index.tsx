import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

export const OrderHistory = () => {
  return (
    <Container className="px-4 sm:px-0">
      <Text as="h3" className="text-base font-semibold leading-7 text-gray-900">
        Order History
      </Text>
    </Container>
  )
}
