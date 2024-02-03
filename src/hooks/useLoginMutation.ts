import UserService, { IUserLoginPayload } from "@/services/userService";
import { IUser } from "@/store";
import { useMutation } from "@tanstack/react-query";
import { useLocalStorage } from "./useLocalStorage";
import { UserAuth } from "@/context/AuthContext";

export interface IResponse {
  message: string;
  user: IUser;
}

export const useCreateUserMutation = () => {
  const { setItem } = useLocalStorage("userDetails");
  const { logOut } = UserAuth();
  return useMutation({
    mutationFn: (userData: IUserLoginPayload) => {
      return UserService.userLogin(userData);
    },
    onSuccess: (data: IResponse) => {
      setItem(JSON.stringify(data.user._id));
    },
    onError: () => {
      logOut();
    },
  });
};
