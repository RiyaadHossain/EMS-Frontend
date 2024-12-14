import { apiClient } from "@/lib/apiClient";
import { baseApi } from "./base";

const departmentBase = "/department";

// Fetch all departments
export const getDepartments = async () => {
  return await apiClient(`${baseApi + departmentBase}`, { method: "GET" });
};

// Fetch department details by ID
export const getDepartmentDetails = async (id: string) => {
  return await apiClient(`${baseApi + departmentBase}/${id}`, { method: "GET" });
};

// Fetch department select options
export const getDepartmentSelectOptions = async () => {
  return await apiClient(`${baseApi + departmentBase}/get-select-options`, {
    method: "GET",
  });
};

// Add a new department
export const addDepartment = async (data: any) => {
  return await apiClient(`${baseApi + departmentBase}/add`, {
    method: "POST",
    body: data,
  });
};

// Update a department
export const updateDepartment = async (id: string, data: any) => {
  return await apiClient(`${baseApi + departmentBase}/update/${id}`, {
    method: "PATCH",
    body: data,
  });
};

// Remove a department
export const removeDepartment = async (id: string) => {
  return await apiClient(`${baseApi + departmentBase}/remove/${id}`, {
    method: "DELETE",
  });
};
