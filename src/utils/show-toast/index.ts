import toast from 'react-hot-toast'
import Logger from '@/libs/logger.util'
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { HTTP_STATUS_CODE } from '@/shared/shared.interface'
import { AUTH_MESSAGE } from '@/features/login/login.interface'

interface IResponseData {
  message: AUTH_MESSAGE
  status: HTTP_STATUS_CODE
}

interface IAxiosConfig {}

interface IShowToast {
  response: AxiosResponse<
    IResponseData,
    InternalAxiosRequestConfig<IAxiosConfig>
  >
}

export const showToast = ({ response }: IShowToast) => {
  switch (response.data.status) {
    case HTTP_STATUS_CODE.OK:
    case HTTP_STATUS_CODE.CREATED:
    case HTTP_STATUS_CODE.UPDATED:
      toast.success(response.data.message)
      Logger.info(response.data.message)
      break
    default:
      toast.error(response.data.message)
      Logger.error(response.data.message)
      break
  }
}
