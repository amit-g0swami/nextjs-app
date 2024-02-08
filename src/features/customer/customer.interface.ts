export enum CUSTOMER_QUERY_KEYS {
  SEARCHED_STORES = "searchedStore",
}

export interface IAddSellerIdPayload {
  userId: string;
  sellerId: string;
}
