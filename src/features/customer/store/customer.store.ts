import { create } from 'zustand'

type CustomerManagementState = {
  isAddSellerIdModelOpen: boolean
  searchedSellerId: string | null
  isCreateCustomerOrderFormSubmitted: boolean
  setIsAddSellerIdModelOpen: (open: boolean) => void
  setSearchedSellerId: (id: string | null) => void
  setIsCreateCustomerOrderFormSubmitted: (isFormSubmitted: boolean) => void
}

const useCustomerStore = create<CustomerManagementState>((set) => ({
  isAddSellerIdModelOpen: false,
  searchedSellerId: null,
  isCreateCustomerOrderFormSubmitted: false,
  setIsAddSellerIdModelOpen: (open) => set({ isAddSellerIdModelOpen: open }),
  setSearchedSellerId: (id) => set({ searchedSellerId: id }),
  setIsCreateCustomerOrderFormSubmitted: (isFormSubmitted) =>
    set({
      isCreateCustomerOrderFormSubmitted: isFormSubmitted
    })
}))

export default useCustomerStore
