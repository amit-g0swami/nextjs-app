import axios from 'axios'
import toast from 'react-hot-toast'
import { showToast } from '@/utils/show-toast'

const TIMEOUT = 5000

const _axios = axios.create({
  timeout: TIMEOUT
})

_axios.interceptors.response.use(
  (response) => {
    showToast({ response })
    return response
  },
  (error) => {
    toast.error(error)
  }
)

const getAxiosClient = () => _axios

const HttpService = {
  getAxiosClient,
  get: getAxiosClient().get,
  post: getAxiosClient().post,
  put: getAxiosClient().put,
  patch: getAxiosClient().patch,
  delete: getAxiosClient().delete
}

export default HttpService
