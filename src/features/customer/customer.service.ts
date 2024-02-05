import HttpService from "@/services/HttpService";
import toast from "react-hot-toast";

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
    toast(data.message);
    return data;
  } catch (error) {
    console.error("Error during login request:", error);
    throw error;
  }
};

const CustomerService = {
  createAddress,
};

export default CustomerService;
