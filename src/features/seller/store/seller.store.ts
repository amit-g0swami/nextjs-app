import { create } from 'zustand'
import { ICreateOrderPayload } from '../seller.interface'

type SellerManagementState = {
  selected: number
  isTabOpen: boolean
  isCreateSellerOrderFormSubmitted: boolean
  isViewOrderDetailsOpen: boolean
  selectedRowdata: null | ICreateOrderPayload
  appliedFilters: string
  setSelected: (id: number) => void
  setIsTabOpen: (open: boolean) => void
  setIsCreateSellerOrderFormSubmitted: (isFormSubmitted: boolean) => void
  setIsViewOrderDetailsOpen: (isOpen: boolean) => void
  setSelectedRowdata: (data: null | ICreateOrderPayload) => void
  setAppliedFilters: (data: string) => void
}

const useSellerStore = create<SellerManagementState>((set) => ({
  selected: 0,
  isTabOpen: false,
  isCreateSellerOrderFormSubmitted: false,
  isViewOrderDetailsOpen: false,
  selectedRowdata: null,
  appliedFilters: '',
  setSelected: (id) => set({ selected: id }),
  setIsTabOpen: (open) => set({ isTabOpen: open }),
  setIsCreateSellerOrderFormSubmitted: (isFormSubmitted) =>
    set({
      isCreateSellerOrderFormSubmitted: isFormSubmitted
    }),
  setIsViewOrderDetailsOpen: (isOpen) =>
    set({
      isViewOrderDetailsOpen: isOpen
    }),
  setSelectedRowdata: (data) => set({ selectedRowdata: data }),
  setAppliedFilters: (data) => set({ appliedFilters: data })
}))

export default useSellerStore
