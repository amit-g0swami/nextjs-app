export enum PAYMENT_TYPE {
  COD = 'COD',
  PREPAID = 'PREPAID'
}

export enum USER_TYPE {
  CUSTOMER = 'CUSTOMER',
  SELLER = 'SELLER'
}

export enum USE_LOCAL_STORAGE {
  LOGGED_IN_TYPE = 'loggedInType',
  USER_DETAILS = 'userDetails',
  USER_SELLED_ID = 'userSelledId'
}

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SELLER: '/seller/[id]',
  CUSTOMER: '/customer',
  CUSTOMER_CREATE_ORDER: '/customer/[id]'
}

export enum HTTP_STATUS_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  OK = 200,
  CREATED = 201,
  UPDATED = 200,
  CONFLICT = 409
}
