import { apiClient } from "@/lib/apiClient";
import { baseApi } from "./base";

const employeeBase = "/employee";

// Fetch all employees with pagination and filters
export const getEmployees = async (queryParams?: Record<string, any>) => {
  const query = new URLSearchParams(queryParams).toString();
  return await apiClient(`${baseApi + employeeBase}?${query}`, { method: "GET" });
};

// Fetch employee details by ID
export const getEmployeeDetails = async (id: string) => {
  return await apiClient(`${baseApi + employeeBase}/${id}`, { method: "GET" });
};

// Fetch employee select options by department
export const getEmployeeSelectOptions = async (department?: string) => {
  return await apiClient(
    `${baseApi + employeeBase}/get-select-options/${department}`,
    { method: "GET" }
  );
};

// Add a new employee
export const addEmployee = async (data) => {
  return await apiClient(`${baseApi + employeeBase}/add`, {
    method: "POST",
    body: data,
  });
};

// Update an employee by ID
export const updateEmployee = async (id: string, data) => {
  return await apiClient(`${baseApi + employeeBase}/update/${id}`, {
    method: "PATCH",
    body: data,
  });
};
