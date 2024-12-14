'use client'
import { tokenKey } from "@/constants/localStorage";


// Retrieve the token from local storage
export const getToken = (): string | null => {
  
  return localStorage.getItem(tokenKey);
};

// Store the token in local storage
export const setToken = (token: string): void => {
  localStorage.setItem(tokenKey, token);
};

// Remove the token from local storage
export const deleteToken = (): void => {
  localStorage.removeItem(tokenKey);
};
