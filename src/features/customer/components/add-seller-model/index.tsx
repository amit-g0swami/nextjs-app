import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { Modal } from '@/components/molecules/modal'
import { CustomSearch } from '@/components/organisms/custom-search'
import { IUser } from '@/features/login/login.interface'

type AddSellerModelProps = {
  isOpen: boolean
  searchedSeller: IUser | undefined
  setSearchedSellerId: (value: string | null) => void
  handleAddSellerMutate: (sellerId: string) => void
  handleCloseModal: () => void
}

export const AddSellerModel = ({
  isOpen,
  searchedSeller,
  setSearchedSellerId,
  handleAddSellerMutate,
  handleCloseModal
}: AddSellerModelProps) => {
  return (
    <Modal
      isOpen={isOpen}
      title="Add SellerId"
      content={
        <Container>
          <CustomSearch
            name="sellerId"
            placeholder="Please Enter SellerId"
            type="text"
            charLimit={23}
            getSuggestions={(value) => setSearchedSellerId(value)}
            handleEmptyInput={() => setSearchedSellerId(null)}
          />
          {searchedSeller && (
            <Container
              className="mt-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              onClick={() => handleAddSellerMutate(searchedSeller._id)}
            >
              <Text as="h2" className="text-sm font-semibold text-gray-900">
                {searchedSeller.name}
              </Text>
              <Text as="p" className="text-xs text-gray-600">
                {searchedSeller.email}
              </Text>
            </Container>
          )}
        </Container>
      }
      onClose={handleCloseModal}
    />
  )
}
