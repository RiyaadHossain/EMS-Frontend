import { apiClient } from "@/lib/apiClient";
import { baseApi } from "./base";
import { setToken } from "@/helpers/localStorage";

const authBase = "/auth";

// Login a user
export const loginUser = async (data) => {
  const res = await apiClient(`${baseApi + authBase}/login`, {
    method: "POST",
    body: data,
  });

  setToken(res.data.accessToken)

  return res;
};
