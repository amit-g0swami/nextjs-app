import { create } from "zustand";

type SellerManagementState = {
  selectedTab: number;
  setSelectedTab: (id: number) => void;
};

const useSellerStore = create<SellerManagementState>((set) => ({
  selectedTab: 0,
  setSelectedTab: (id) => set({ selectedTab: id }),
}));

export default useSellerStore;
