import { Container } from '@/components/atoms/container'
import { MenuOption } from '@/components/molecules/menu-option'
import { Modal } from '@/components/molecules/modal'
import { CustomSearch } from '@/components/organisms/custom-search'
import { IUser } from '@/features/login/login.interface'

type AddSellerModelProps = {
  isOpen: boolean
  searchedSeller: IUser[] | [] | undefined
  setSearchedSellerId: (value: string | null) => void
  handleAddSellerMutate: (sellerId: string) => void
  handleCloseModal: () => void
}

const lengthZero = 0

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
          {searchedSeller && searchedSeller.length !== lengthZero && (
            <MenuOption
              onClick={() => handleAddSellerMutate(searchedSeller[0]?._id)}
              title={searchedSeller[0]?.name}
              discription={searchedSeller[0]?.email}
            />
          )}
          {searchedSeller && searchedSeller.length === lengthZero && (
            <MenuOption
              onClick={() => {}}
              title="Seller not found"
              discription="No Seller Exist with this SellerId"
            />
          )}
        </Container>
      }
      onClose={handleCloseModal}
    />
  )
}
