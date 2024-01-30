import axios from "axios";

const baseUrl = process.env.BASE_URL;
export interface IUserLoginPayload {
  name: string | null | undefined;
  email: string | null | undefined;
  createdAs: string | null;
}

const userLogin = async (userData: IUserLoginPayload) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8000/api/login",
      userData
    );
    console.log("Login successful:", data);
    return data;
  } catch (error) {
    console.error("Error during login request:", error);
    throw error;
  }
};

const UserService = {
  userLogin,
};

export default UserService;
