import { create } from 'zustand'

type SellerManagementState = {
  selected: number
  isTabOpen: boolean
  isCreateSellerOrderFormSubmitted: boolean
  setSelected: (id: number) => void
  setIsTabOpen: (open: boolean) => void
  setIsCreateSellerOrderFormSubmitted: (isFormSubmitted: boolean) => void
}

const useSellerStore = create<SellerManagementState>((set) => ({
  selected: 0,
  isTabOpen: false,
  isCreateSellerOrderFormSubmitted: false,
  setSelected: (id) => set({ selected: id }),
  setIsTabOpen: (open) => set({ isTabOpen: open }),
  setIsCreateSellerOrderFormSubmitted: (isFormSubmitted) =>
    set({
      isCreateSellerOrderFormSubmitted: isFormSubmitted
    })
}))

export default useSellerStore
