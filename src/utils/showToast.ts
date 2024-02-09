import toast from "react-hot-toast";
import { AxiosResponse } from "axios";
import { HTTP_STATUS_CODE } from "@/shared/shared.interface";
import { AUTH_MESSAGE } from "@/features/login/login.interface";

interface IShowToast {
  response: AxiosResponse<any, any>;
}

export const showToast = ({ response }: IShowToast) => {
  if (response.data.message === AUTH_MESSAGE.USER_ALREADY_EXISTS) {
    toast.success(AUTH_MESSAGE.USER_LOGGED_IN);
    return;
  }
  switch (response.data.status) {
    case HTTP_STATUS_CODE.OK:
    case HTTP_STATUS_CODE.CREATED:
    case HTTP_STATUS_CODE.UPDATED:
      toast.success(response.data.message);
      break;
    default:
      toast.error(response.data.message);
      break;
  }
};
