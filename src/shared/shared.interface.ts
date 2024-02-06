export enum PAYMENT_TYPE {
  COD = "COD",
  PREPAID = "PREPAID",
}

export enum USER_TYPE {
  CUSTOMER = "CUSTOMER",
  SELLER = "SELLER",
}

export enum USE_LOCAL_STORAGE {
  LOGGED_IN_TYPE = "loggedInType",
  USER_DETAILS = "userDetails",
}

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SELLER: "/seller/[id]",
  CUSTOMER: "/customer",
};
