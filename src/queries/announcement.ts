import { apiClient } from "@/lib/apiClient";
import { baseApi } from "./base";

const announcementBase = "/announcement";

// Fetch all announcements (for ADMIN, MANAGER, EMPLOYEE roles)
export const getAnnouncements = async () => {
  return await apiClient(`${baseApi + announcementBase}`, { method: "GET" });
};

// Add a new announcement (for ADMIN, MANAGER roles)
export const addAnnouncement = async (data: any) => {
  return await apiClient(`${baseApi + announcementBase}/add`, {
    method: "POST",
    body: data,
  });
};
