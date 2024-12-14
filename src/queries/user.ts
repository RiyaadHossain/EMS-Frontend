import { apiClient } from "@/lib/apiClient";
import { baseApi } from "./base";

const userBase = "/user";

// Register a new user
export const registerUser = async (data: any) => {
  return await apiClient(`${baseApi + userBase}/register`, {
    method: "POST",
    body: data,
  });
};
