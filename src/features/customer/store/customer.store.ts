import { create } from "zustand";

type CustomerManagementState = {
  isAddSellerIdModelOpen: boolean;
  searchedSellerId: string | null;
  setIsAddSellerIdModelOpen: (open: boolean) => void;
  setSearchedSellerId: (id: string | null) => void;
};

const useCustomerStore = create<CustomerManagementState>((set) => ({
  isAddSellerIdModelOpen: false,
  searchedSellerId: null,
  setIsAddSellerIdModelOpen: (open) => set({ isAddSellerIdModelOpen: open }),
  setSearchedSellerId: (id) => set({ searchedSellerId: id }),
}));

export default useCustomerStore;
