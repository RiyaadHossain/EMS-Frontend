'use client';
import { tokenKey } from "@/constants/localStorage";

// Retrieve the token from local storage
export const getToken = (): string | null => {
  if (typeof window === "undefined") return null; // Ensure code runs only in the browser
  return localStorage.getItem(tokenKey);
};

// Store the token in local storage
export const setToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(tokenKey, token);
  }
};

// Remove the token from local storage
export const deleteToken = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(tokenKey);
  }
};
