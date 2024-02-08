import { create } from "zustand";

type CustomerManagementState = {
  isAddSellerIdModelOpen: boolean;
  setIsAddSellerIdModelOpen: (open: boolean) => void;
};

const useCustomerStore = create<CustomerManagementState>((set) => ({
  isAddSellerIdModelOpen: false,
  setIsAddSellerIdModelOpen: (open) => set({ isAddSellerIdModelOpen: open }),
}));

export default useCustomerStore;
