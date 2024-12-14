import { apiClient } from "@/lib/apiClient";
import { baseApi } from "./base";

const attendanceBase = "/attendance";

// Fetch attendance stats (for ADMIN role)
export const getAttendanceStats = async () => {
  return await apiClient(`${baseApi + attendanceBase}/stats`, { method: "GET" });
};

// Fetch employee attendance sheet (for ADMIN role)
export const getEmployeeSheet = async (month) => {
  return await apiClient(`${baseApi + attendanceBase}/employee-sheet?month=${month}`, { method: "GET" });
};

// Fetch logged-in user's attendance sheet (for MANAGER and EMPLOYEE roles)
export const getMyAttendanceSheet = async () => {
  return await apiClient(`${baseApi + attendanceBase}/my-sheet`, { method: "GET" });
};

// Fetch attendance status of logged-in user (for MANAGER and EMPLOYEE roles)
export const getAttendanceStatus = async () => {
  return await apiClient(`${baseApi + attendanceBase}/attd-status`, { method: "GET" });
};

// Confirm attendance (for MANAGER and EMPLOYEE roles)
export const confirmAttendance = async () => {
  return await apiClient(`${baseApi + attendanceBase}/confirm-attendance`, { method: "PATCH" });
};
