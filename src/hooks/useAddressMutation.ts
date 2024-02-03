import AddressService, { IAddressPayload } from "@/services/addressService";
import { useMutation } from "@tanstack/react-query";

export const useAddressMutation = () => {
  return useMutation({
    mutationFn: (addressData: IAddressPayload) => {
      return AddressService.addressCreate(addressData);
    },
    onSuccess: () => {},
    onError: () => {},
  });
};
