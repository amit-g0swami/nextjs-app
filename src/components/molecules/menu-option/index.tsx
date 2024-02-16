import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

type MenuOptionProps = {
  title: string
  discription: string
  onClick: () => void
}

export const MenuOption = ({
  title,
  discription,
  onClick
}: MenuOptionProps) => {
  return (
    <Container
      className="mt-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
      onClick={() => onClick()}
    >
      <Text as="h2" className="text-sm font-semibold text-gray-900">
        {title}
      </Text>
      <Text as="p" className="text-xs text-gray-600">
        {discription}
      </Text>
    </Container>
  )
}
