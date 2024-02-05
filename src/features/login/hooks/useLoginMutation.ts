import AuthService, { IUserLoginPayload } from "@/features/login/user.service";
import { useMutation } from "@tanstack/react-query";
import { useLocalStorage } from "../../shared/hooks/useLocalStorage";
import { UserAuth } from "@/features/shared/contexts/AuthContext";
import { IUser } from "../login.interface";

export interface IResponse {
  message: string;
  user: IUser;
}

export const useCreateUserMutation = () => {
  const { setItem } = useLocalStorage("userDetails");
  const { logOut } = UserAuth();
  return useMutation({
    mutationFn: (userData: IUserLoginPayload) => {
      return AuthService.userLogin(userData);
    },
    onSuccess: (data: IResponse) => {
      setItem(JSON.stringify(data.user._id));
    },
    onError: () => {
      logOut();
    },
  });
};
