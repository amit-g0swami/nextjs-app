import SellerService from '../seller.service'
import { useQuery } from '@tanstack/react-query'
import { SELLER_QUERY_KEYS } from '../seller.interface'

export const useGetSellerOrdersTableData = ({
  sellerId,
  appliedFilters
}: {
  sellerId: string | string[]
  appliedFilters: string
}) => {
  return useQuery({
    queryKey: [SELLER_QUERY_KEYS.GET_TABLE_DATA, appliedFilters],
    queryFn: () =>
      SellerService.getSellerOrdersList({ sellerId, appliedFilters }),
    enabled: appliedFilters !== ''
  })
}
