import { tokenKey } from "@/constants/localStorage";

export const apiClient = async (
  url: string,
  options: RequestInit = {}
): Promise<any> => {
  const token = localStorage.getItem(tokenKey);

  // Set default headers and merge with options
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: token }),
  };

  // Stringify body if it's an object
  const body =
    options.body && typeof options.body === "object"
      ? JSON.stringify(options.body)
      : options.body;

  const mergedOptions: RequestInit = {
    ...options,
    headers: {
      ...headers,
      ...options.headers, // Allow custom headers to override defaults
    },
    body,
  };

  const response = await fetch(url, mergedOptions).then((res) => res.json());

  if (!response.success) {
    const error = response.message;
    throw new Error(error || "An error occurred while fetching data.");
  }

  return response;
};
