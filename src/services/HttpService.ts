import axios from "axios";
import toast from "react-hot-toast";
import { HTTP_STATUS_CODE } from "@/shared/shared.interface";

const _axios = axios.create({
  timeout: 5000,
});

_axios.interceptors.response.use(
  (response) => {
    if (
      response.data.status !== HTTP_STATUS_CODE.OK ||
      HTTP_STATUS_CODE.CREATED ||
      HTTP_STATUS_CODE.UPDATED
    ) {
      toast.error(response.data.message);
    } else {
      toast.success(response.data.message);
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
