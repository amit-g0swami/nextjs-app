import CustomerService from '../customer.service'
import useCustomerStore from '../store/customer.store'
import { ICreateCustomerOrderPayload } from '../customer.interface'
import { useMutation } from '@tanstack/react-query'

export const useAddressMutation = () => {
  const { setIsCreateCustomerOrderFormSubmitted } = useCustomerStore()
  return useMutation({
    mutationFn: (createOrderPayload: ICreateCustomerOrderPayload) => {
      return CustomerService.createCustomerOrder(createOrderPayload)
    },
    onSuccess: () => {
      setIsCreateCustomerOrderFormSubmitted(false)
    },
    onError: () => {}
  })
}
