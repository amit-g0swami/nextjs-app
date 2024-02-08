import AuthService, { IUserLoginPayload } from "@/features/login/login.service";
import { useMutation } from "@tanstack/react-query";
import { useLocalStorage } from "../../shared/hooks/useLocalStorage";
import { UserAuth } from "@/features/shared/contexts/AuthContext";
import { IUser } from "../login.interface";
import { USER_TYPE, USE_LOCAL_STORAGE } from "@/shared/shared.interface";

export interface IResponse {
  message: string;
  user: IUser;
}

export const useCreateUserMutation = () => {
  const { setItem } = useLocalStorage(USE_LOCAL_STORAGE.USER_DETAILS);
  const { setItem: setUserSellerId } = useLocalStorage(
    USE_LOCAL_STORAGE.USER_SELLED_ID
  );
  const { logOut } = UserAuth();
  return useMutation({
    mutationFn: (userData: IUserLoginPayload) => {
      return AuthService.userLogin(userData);
    },
    onSuccess: (data: IResponse) => {
      setItem(JSON.stringify(data.user._id));
      if (data.user.createdAs === USER_TYPE.CUSTOMER) {
        setUserSellerId(JSON.stringify(data.user.sellerId));
      }
    },
    onError: () => {
      logOut();
    },
  });
};
