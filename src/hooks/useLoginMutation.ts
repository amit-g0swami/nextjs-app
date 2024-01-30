import useZustandStore, { IUser } from "@/store";
import UserService, { IUserLoginPayload } from "@/services/userService";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

export const useCreateUserMutation = () => {
  const { setUser } = useZustandStore();
  return useMutation({
    onSuccess: (data: IUser) => {
      console.log("User created successfully:", data);
      setUser(data);
    },
    onError: () => {
      console.error("Error creating user");
      setUser(null);
      signOut();
    },
  });
};
