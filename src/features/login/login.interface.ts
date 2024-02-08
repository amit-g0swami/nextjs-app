import { USER_TYPE } from "@/shared/shared.interface";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  createdAs: USER_TYPE;
  __v: number;
  sellerId?: string;
}
