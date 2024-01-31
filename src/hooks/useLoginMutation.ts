import useZustandStore, { IUser } from "@/store";
import UserService, { IUserLoginPayload } from "@/services/userService";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useLocalStorage } from "./useLocalStorage";

export interface IResponse {
  message: string;
  user: IUser;
}

export const useCreateUserMutation = () => {
  const { setUser } = useZustandStore();
  const { removeItem } = useLocalStorage("loggedInType");
  const { setItem } = useLocalStorage("userDetails");
  return useMutation({
    mutationFn: (userData: IUserLoginPayload) => {
      return UserService.userLogin(userData);
    },
    onSuccess: (data: IResponse) => {
      setItem(JSON.stringify(data.user._id));
      console.log("User created successfully:", data);
    },
    onError: () => {
      console.error("Error creating user");
      removeItem();
      setUser(null);
      signOut();
    },
  });
};
