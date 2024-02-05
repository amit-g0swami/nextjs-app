import axios from "axios";
import toast from "react-hot-toast";

const _axios = axios.create({
  timeout: 5000,
});

const configure = () => {
  _axios.interceptors.request.use((config): any => {
    // if (AuthService.isLoggedIn()) {
    //   config.headers.Authorization = `Bearer ${AuthService.getToken()}`;
    //   return Promise.resolve(config);
    // }
  });
  _axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        toast(error);
      }
    }
  );
};

const getAxiosClient = () => _axios;

const HttpService = {
  configure,
  getAxiosClient,
  get: getAxiosClient().get,
  post: getAxiosClient().post,
  put: getAxiosClient().put,
  patch: getAxiosClient().patch,
  delete: getAxiosClient().delete,
};

export default HttpService;
