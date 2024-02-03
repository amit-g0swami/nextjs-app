import axios from "axios";
import toast from "react-hot-toast";

const baseUrl = process.env.BASE_URL;

export interface IAddressPayload {
  id: string | string[];
  address: Record<string, any>;
}

const addressCreate = async (addressPayload: IAddressPayload) => {
  try {
    const { id, address } = addressPayload;
    const { data } = await axios.post(
      `http://localhost:8000/api/address/${id}`,
      address
    );
    toast(data.message);
    return data;
  } catch (error) {
    console.error("Error during login request:", error);
    throw error;
  }
};

const AddressService = {
  addressCreate,
};

export default AddressService;
