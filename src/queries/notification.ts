import { apiClient } from "@/lib/apiClient";
import { baseApi } from "./base";

const notificationBase = "/notification";

// Fetch all notifications (for ADMIN, MANAGER, EMPLOYEE roles)
export const getNotifications = async () => {
  return await apiClient(`${baseApi + notificationBase}`, { method: "GET" });
};

// Mark all notifications as read (for ADMIN, MANAGER, EMPLOYEE roles)
export const readAllNotifications = async () => {
  return await apiClient(`${baseApi + notificationBase}/read-all`, { method: "PATCH" });
};
