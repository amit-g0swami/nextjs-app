import CustomerService, { IAddressPayload } from "../customer.service";
import { useMutation } from "@tanstack/react-query";

export const useAddressMutation = () => {
  return useMutation({
    mutationFn: (addressData: IAddressPayload) => {
      return CustomerService.createAddress(addressData);
    },
    onSuccess: () => {},
    onError: () => {},
  });
};
