import HttpService from "@/services/HttpService";
import { IUser } from "../login/login.interface";
import { IAddSellerIdPayload } from "./customer.interface";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export interface IAddressPayload {
  id: string | string[];
  address: Record<string, any>;
}

const createAddress = async (addressPayload: IAddressPayload) => {
  try {
    const { id, address } = addressPayload;
    const { data } = await HttpService.post(
      `${baseUrl}/address/${id}`,
      address
    );
    return data;
  } catch (error) {
    throw error;
  }
};

const getSearchedSeller = async (sellerId: string | null) => {
  try {
    const { data } = await HttpService.get(`${baseUrl}/seller/${sellerId}`);
    const seller: IUser = data.seller[0];
    return seller;
  } catch (error) {
    throw error;
  }
};

const addSellerId = async (addSellerIdPayload: IAddSellerIdPayload) => {
  try {
    const { userId, sellerId } = addSellerIdPayload;
    const { data } = await HttpService.put(`${baseUrl}/${userId}/sellerId`, {
      sellerId,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const CustomerService = {
  createAddress,
  getSearchedSeller,
  addSellerId,
};

export default CustomerService;
