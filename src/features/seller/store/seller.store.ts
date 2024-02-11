import { create } from 'zustand'

type SellerManagementState = {
  selected: number
  isTabOpen: boolean
  setSelected: (id: number) => void
  setIsTabOpen: (open: boolean) => void
}

const useSellerStore = create<SellerManagementState>((set) => ({
  selected: 0,
  isTabOpen: false,
  setSelected: (id) => set({ selected: id }),
  setIsTabOpen: (open) => set({ isTabOpen: open })
}))

export default useSellerStore
