import CustomerService from "../customer.service";
import { CUSTOMER_QUERY_KEYS } from "../customer.interface";
import { useQuery } from "@tanstack/react-query";

export const useGetSearchedSeller = (searchText: string | null) => {
  return useQuery({
    queryKey: [CUSTOMER_QUERY_KEYS.SEARCHED_STORES, searchText],
    queryFn: () => CustomerService.getSearchedSeller(searchText),
    enabled: searchText !== null,
  });
};
