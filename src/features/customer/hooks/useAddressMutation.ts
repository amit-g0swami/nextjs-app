import CustomerService from '../customer.service'
import { ICreateCustomerOrderPayload } from '../customer.interface'
import { useMutation } from '@tanstack/react-query'

export const useAddressMutation = () => {
  return useMutation({
    mutationFn: (createOrderPayload: ICreateCustomerOrderPayload) => {
      return CustomerService.createCustomerOrder(createOrderPayload)
    },
    onSuccess: () => {},
    onError: () => {}
  })
}
