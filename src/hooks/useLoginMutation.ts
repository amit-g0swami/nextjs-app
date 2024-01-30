import useZustandStore, { IUser } from "@/store";
import UserService, { IUserLoginPayload } from "@/services/userService";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useLocalStorage } from "./useLocalStorage";

export const useCreateUserMutation = () => {
  const { setUser } = useZustandStore();
  const { removeItem } = useLocalStorage("loggedInType");
  return useMutation({
    mutationFn: (userData: IUserLoginPayload) => {
      return UserService.userLogin(userData);
    },
    onSuccess: (data: IUser) => {
      console.log("User created successfully:", data);
      setUser(data);
    },
    onError: () => {
      console.error("Error creating user");
      removeItem();
      setUser(null);
      signOut();
    },
  });
};
