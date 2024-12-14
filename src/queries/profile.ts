import { apiClient } from "@/lib/apiClient";
import { baseApi } from "./base";

const profileBase = "/profile";

// Fetch profile of the logged-in user (for ADMIN, MANAGER, EMPLOYEE roles)
export const getMyProfile = async () => {
  return await apiClient(`${baseApi + profileBase}/me`, { method: "GET" });
};

// Update profile of the logged-in user (for ADMIN, MANAGER, EMPLOYEE roles)
export const updateProfile = async (profileData: any) => {
  return await apiClient(`${baseApi + profileBase}/update`, {
    method: "PATCH",
    body: JSON.stringify(profileData),
  });
};
