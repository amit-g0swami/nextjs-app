import { create } from "zustand";

type SellerManagementState = {
  selectedTab: number;
  isTabOpen: boolean;
  setSelectedTab: (id: number) => void;
  setIsTabOpen: (open: boolean) => void;
};

const useSellerStore = create<SellerManagementState>((set) => ({
  selectedTab: 0,
  isTabOpen: false,
  setSelectedTab: (id) => set({ selectedTab: id }),
  setIsTabOpen: (open) => set({ isTabOpen: open }),
}));

export default useSellerStore;
