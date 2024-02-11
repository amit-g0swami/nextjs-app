import SellerService from '../seller.service'
import useSellerStore from '../store/seller.store'
import { ICreateOrderPayload } from '../seller.interface'
import { useMutation } from '@tanstack/react-query'

export const useCreateOrderMutation = () => {
  const { setSelected } = useSellerStore()
  return useMutation({
    mutationFn: (createOrderPayload: ICreateOrderPayload) => {
      return SellerService.createOrder(createOrderPayload)
    },
    onSuccess: () => {
      setSelected(0)
    },
    onError: () => {}
  })
}
