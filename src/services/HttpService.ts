import axios from "axios";
import toast from "react-hot-toast";
import { HTTP_STATUS_CODE } from "@/shared/shared.interface";
import { AUTH_MESSAGE } from "@/features/login/login.interface";

const TIMEOUT = 5000;

const _axios = axios.create({
  timeout: TIMEOUT,
});

_axios.interceptors.response.use(
  (response) => {
    if (response.data.message === AUTH_MESSAGE.USER_ALREADY_EXISTS) {
      toast.success(AUTH_MESSAGE.USER_LOGGED_IN);
    } else if (
      response.data.status === HTTP_STATUS_CODE.OK ||
      response.data.status === HTTP_STATUS_CODE.CREATED ||
      response.data.status === HTTP_STATUS_CODE.UPDATED
    ) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
    return response;
  },
  (error) => {
    toast.error(error);
  }
);

const getAxiosClient = () => _axios;

const HttpService = {
  getAxiosClient,
  get: getAxiosClient().get,
  post: getAxiosClient().post,
  put: getAxiosClient().put,
  patch: getAxiosClient().patch,
  delete: getAxiosClient().delete,
};

export default HttpService;
