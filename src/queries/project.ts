import { apiClient } from "@/lib/apiClient";
import { baseApi } from "./base";

const projectBase = "/project";

// Fetch all projects
export const getProjects = async (pagination?: any, filters?: any) => {
  const queryParams = new URLSearchParams({
    ...pagination,
    ...filters,
  }).toString();

  return await apiClient(`${baseApi + projectBase}?${queryParams}`, {
    method: "GET",
  });
};

// Fetch project details by ID
export const getProjectDetails = async (id: string) => {
  return await apiClient(`${baseApi + projectBase}/${id}`, { method: "GET" });
};

// Fetch project select options
export const getProjectSelectOptions = async () => {
  return await apiClient(`${baseApi + projectBase}/get-select-options`, {
    method: "GET",
  });
};

// Add a new project
export const addProject = async (data: any) => {
  return await apiClient(`${baseApi + projectBase}/add`, {
    method: "POST",
    body: data,
  });
};

// Update a project
export const updateProject = async (id: string, data: any) => {
  return await apiClient(`${baseApi + projectBase}/update/${id}`, {
    method: "PATCH",
    body: data,
  });
};

// Remove a project
export const removeProject = async (id: string) => {
  return await apiClient(`${baseApi + projectBase}/remove/${id}`, {
    method: "DELETE",
  });
};
