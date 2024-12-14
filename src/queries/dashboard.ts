import { apiClient } from "@/lib/apiClient";
import { baseApi } from "./base";

const dashboardBase = "/dashboard";

// Fetch dashboard statistics (for ADMIN role)
export const getDashboardStats = async () => {
  return await apiClient(`${baseApi + dashboardBase}/stats`, { method: "GET" });
};
