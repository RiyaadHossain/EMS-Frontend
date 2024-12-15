import { apiClient } from "@/lib/apiClient";
import { baseApi } from "./base";

const managerBase = "/manager";

// Fetch all managers
export const getManagers = async () => {
  return await apiClient(`${baseApi + managerBase}`, { method: "GET" });
};

// Fetch manager details by ID
export const getManagerDetails = async (id: string) => {
  return await apiClient(`${baseApi + managerBase}/${id}`, { method: "GET" });
};

// Fetch manager select options
export const getManagerSelectOptions = async () => {
  return await apiClient(`${baseApi + managerBase}/get-select-options`, {
    method: "GET",
  });
};

// Fetch my manager 
export const getMyManager = async () => {
  return await apiClient(`${baseApi + managerBase}/my-manager`, {
    method: "GET",
  });
};
