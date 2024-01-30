import { create } from "zustand";

export enum USER_TYPE {
  CUSTOMER = "CUSTOMER",
  SELLER = "SELLER",
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  createdAs: USER_TYPE;
  __v: number;
}

export interface IAddress {
  _id: string;
  userId: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: number;
  sellerId: string;
  __v: number;
  createdAs: USER_TYPE;
}

type ZustandStore = {
  user: IUser | null;
  address: IAddress | null;
  setAddress: (address: IAddress | null) => void;
  setUser: (user: IUser | null) => void;
};

const useZustandStore = create<ZustandStore>((set) => {
  return {
    user: null,
    address: null,
    setAddress: (address: IAddress | null) => set({ address }),
    setUser: (user: IUser | null) => set({ user }),
  };
});

export default useZustandStore;
