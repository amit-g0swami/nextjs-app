import { USER_TYPE } from '@/shared/shared.interface'

export interface IUser {
  _id: string
  name: string
  email: string
  createdAs: USER_TYPE
  __v: number
  sellerId?: string
}

export enum AUTH_MESSAGE {
  USER_ALREADY_EXISTS = 'User already exists',
  USER_LOGGED_IN = 'User logged in',
  USER_LOGGED_OUT = 'Logged out successfully'
}
