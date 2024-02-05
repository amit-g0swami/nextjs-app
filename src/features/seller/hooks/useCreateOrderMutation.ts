import SellerService from "../seller.service";
import useSellerStore from "../store/seller.store";
import { ICreateOrderPayload } from "../seller.interface";
import { useMutation } from "@tanstack/react-query";

export const useCreateOrderMutation = () => {
  const { setSelectedTab } = useSellerStore();
  return useMutation({
    mutationFn: (createOrderPayload: ICreateOrderPayload) => {
      return SellerService.createOrder(createOrderPayload);
    },
    onSuccess: () => {
      setSelectedTab(0);
    },
    onError: () => {},
  });
};
