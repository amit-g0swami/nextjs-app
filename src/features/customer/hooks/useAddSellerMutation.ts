import useCustomerStore from '../store/customer.store'
import CustomerService from '../customer.service'
import { IAddSellerIdPayload } from '../customer.interface'
import { useMutation } from '@tanstack/react-query'
import { USE_LOCAL_STORAGE } from '@/shared/shared.interface'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'

export const useAddSellerMutation = () => {
  const { setIsAddSellerIdModelOpen } = useCustomerStore()
  const { setSearchedSellerId } = useCustomerStore()
  const { setItem } = useLocalStorage(USE_LOCAL_STORAGE.USER_SELLED_ID)

  return useMutation({
    mutationFn: (addSellerIdPayload: IAddSellerIdPayload) => {
      return CustomerService.addSellerId(addSellerIdPayload)
    },
    onSuccess: (data) => {
      setItem(data.user.sellerId)
      setIsAddSellerIdModelOpen(false)
      setSearchedSellerId(null)
    },
    onError: () => {}
  })
}
