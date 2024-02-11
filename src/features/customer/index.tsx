import React from 'react'
import useCustomerStore from './store/customer.store'
import { BackGroundDiv } from '@/features/shared/components/background-dev'
import { UserAuth } from '../../contexts/AuthContext'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { useLocalStorage } from '../shared/hooks/useLocalStorage'
import { ROUTES, USE_LOCAL_STORAGE } from '@/shared/shared.interface'
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { useGetSearchedSeller } from './hooks/useGetSearchedSeller'
import { useAddSellerMutation } from './hooks/useAddSellerMutation'
import { useRouter } from 'next/navigation'
import { ShowDetails } from '../shared/components/show-details'
import { AddSellerModel } from './components/add-seller-model'
import { Tooltip } from '@/components/molecules/tooltip'

export const CustomerComponent = () => {
  const router = useRouter()
  const { user } = UserAuth()
  const { getItem } = useLocalStorage(USE_LOCAL_STORAGE.USER_SELLED_ID)
  const { getItem: getUserId } = useLocalStorage(USE_LOCAL_STORAGE.USER_DETAILS)
  const sellerId = getItem()
  const userId = getUserId()

  const { isAddSellerIdModelOpen } = useCustomerStore()
  const { searchedSellerId } = useCustomerStore()
  const { setIsAddSellerIdModelOpen } = useCustomerStore()
  const { setSearchedSellerId } = useCustomerStore()

  const { data: searchedSeller } = useGetSearchedSeller(searchedSellerId)
  const useAddSellerMutate = useAddSellerMutation()

  const handleAddSeller = () => {
    setIsAddSellerIdModelOpen(true)
  }

  const handleCloseModal = () => {
    setIsAddSellerIdModelOpen(false)
    setSearchedSellerId(null)
  }

  const handleAddOrderClicked = () => {
    if (!sellerId) return
    router.push(ROUTES.CUSTOMER_CREATE_ORDER.replace('[id]', `${sellerId}`))
  }

  const handleAddSellerMutate = (sellerId: string) => {
    if (!userId) return
    const addSellerIdPayload = {
      userId,
      sellerId
    }
    useAddSellerMutate.mutate(addSellerIdPayload)
  }

  return (
    <Container className="bg-white py-10 sm:py-14 h-screen">
      <BackGroundDiv>
        <Container>
          <Container className="px-4 sm:px-0">
            <Text
              as="h3"
              className="text-base font-semibold leading-7 text-gray-900"
            >
              Customer Information
            </Text>
          </Container>
          <Container className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <ShowDetails title="Full Name" description={user?.displayName} />
              <ShowDetails title="Email" description={user?.email} />
              <ShowDetails
                title="Seller"
                description={
                  <React.Fragment>
                    {sellerId === null ? (
                      <Tooltip text="Please Add Your Seller">
                        <Container
                          className="flex cursor-pointer"
                          onClick={() => handleAddSeller()}
                        >
                          <PlusCircleIcon className="mr-2 h-5 w-5" />
                          Add Seller
                        </Container>
                      </Tooltip>
                    ) : (
                      sellerId
                    )}
                  </React.Fragment>
                }
              />
              {sellerId && (
                <ShowDetails
                  title="Add Order"
                  description={
                    <React.Fragment>
                      <Container
                        className="flex cursor-pointer"
                        onClick={() => handleAddOrderClicked()}
                      >
                        <PlusCircleIcon className="mr-2 h-5 w-5" />
                        Add Order
                      </Container>
                    </React.Fragment>
                  }
                />
              )}
            </dl>
          </Container>
        </Container>
      </BackGroundDiv>

      <AddSellerModel
        isOpen={isAddSellerIdModelOpen}
        searchedSeller={searchedSeller}
        setSearchedSellerId={setSearchedSellerId}
        handleAddSellerMutate={handleAddSellerMutate}
        handleCloseModal={handleCloseModal}
      />
    </Container>
  )
}
