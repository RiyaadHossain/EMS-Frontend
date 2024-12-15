import { apiClient } from "@/lib/apiClient";
import { baseApi } from "./base";

const taskBase = "/task";

// Fetch all tasks (for ADMIN, MANAGER, EMPLOYEE roles)
export const getTasks = async (pagination?: any, filters?: any) => {
  const queryParams = new URLSearchParams({
    ...pagination,
    ...filters,
  }).toString();

  return await apiClient(`${baseApi + taskBase}?${queryParams}`, {
    method: "GET",
  });
};

// Fetch tasks by project ID (for MANAGER role)
export const getTasksByProject = async (projectId: string) => {
  return await apiClient(`${baseApi + taskBase}/${projectId}`, { method: "GET" });
};

// Add a new task (for MANAGER role)
export const addTask = async (data: any) => {
  return await apiClient(`${baseApi + taskBase}/add`, {
    method: "POST",
    body: data,
  });
};

// Update a task (for MANAGER and EMPLOYEE roles)
export const updateTask = async (id: string, data: any) => {
  return await apiClient(`${baseApi + taskBase}/update/${id}`, {
    method: "PATCH",
    body: data,
  });
};

// Remove a task (for MANAGER role)
export const removeTask = async (id: string) => {
  return await apiClient(`${baseApi + taskBase}/remove/${id}`, {
    method: "DELETE",
  });
};
